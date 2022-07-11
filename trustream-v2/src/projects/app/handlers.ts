import _ from 'lodash'
import { deviceDataRepository, deviceRepository } from './models'
import { ProjectContext } from '../interface'
import { EthHelper } from "@helpers/index"
import {
  ecrecover,
  toBuffer
} from 'ethereumjs-util'
var ethUtil = require('ethereumjs-util');
import { publicKeyToAddress } from '@common/utils'

async function onDeviceRegistered(context: ProjectContext, event: any,) {
  if (event)
  {
    const { _deviceAddress } = event.returnValues;
    console.log("Registered new device: ", _deviceAddress);
    await deviceRepository.upsert({
      address: _deviceAddress,
      status: 0
    })
  }
}

function buf2hex(buffer : ArrayBuffer) { // buffer is an ArrayBuffer
  return [...new Uint8Array(buffer)]
      .map(x => x.toString(16).padStart(2, '0'))
      .join('');
}

async function onMqttData(context: ProjectContext, topic: string, payload: Buffer) {
  console.log("Received a message on topic: ", topic);
  
  // Check that the topic passed respect the format
  const values = /^\/device\/(0x[a-fA-F0-9]{40})\/data$/.exec(topic)
  if(!values) {
    console.log("Invalid topic, ignoring");
    return;
  }
  const address = values[1]

  // Decode the JSON message
  let decodedPayload = eval('('+payload.toString()+')');
  // console.log("Payload:")
  // console.log(decodedPayload)
  
  // First, recover the address from the message signature
  const message = JSON.stringify(decodedPayload.message)
  const signature = decodedPayload.signature

  const msgHex = ethUtil.bufferToHex(Buffer.from(message));
  // console.log(`msgHex ${msgHex}`);
  const msgBuffer = ethUtil.toBuffer(msgHex);
  // console.log(`msgBuffer ${msgBuffer}`);
  const hash = ethUtil.hashPersonalMessage(msgBuffer);
  // console.log(`msgHash ${buf2hex(hash)}`);
  const sig = Buffer.from(signature, 'base64');
  // console.log(`sig ${buf2hex(hash)}`);

  let isValid: boolean = false
  for (let i = 0; i < 4; i++) {
    const v = 27 + i
    try {
      let pubkey = '04' + ecrecover(hash, v, sig.slice(0, 32), sig.slice(32, 64), 0).toString('hex')
      const recovered = publicKeyToAddress(pubkey)
      // console.log(`Recovered address: ${address}`)
      if (address.toLowerCase() === recovered.toLowerCase()) {
        console.log(`Recovered address: ${recovered}`)
        isValid = true
        break
      }
    } catch (e) {
      console.log(`ERROR: Dropping message. ${e}`)
      return
    }
  }
  if (isValid === false) {
    console.log(`WARNING: Dropping data message: Invalid signature. Recovered address doesn't match ${address}`)
  }
  const device = await deviceRepository.findByPk(address);
  if (!device) {
      console.log(`WARNING: Dropping data message: Device ${address} is not registered`)
      return null
  }

  console.log("Device is registered. Processing data")
  console.log(`Device address: ${address}`)
  console.log(`Heart rate: ${decodedPayload.message.heartRate}`)
  console.log(`Timestamp: ${decodedPayload.message.timestamp}`)

  await deviceDataRepository.upsert({
    id: address + '-' + decodedPayload.message.timestamp,
    address: address,
    heartRate: decodedPayload.message.heartRate,
    timestamp: decodedPayload.message.timestamp
  })
  // Store the data and execute some contracts (eg. rewards)
}

const handlers = {
  onDeviceRegistered,
  onMqttData,
}

export default handlers
