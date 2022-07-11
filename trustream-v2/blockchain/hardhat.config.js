require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");
require('dotenv').config()
const fs = require('fs');

const IOTEX_PRIVATE_KEY = process.env.IOTEX_PRIVATE_KEY;

task("registerDevice", "Authorize a new device by adding it to the DevicesRegistry contract")
  .addParam("deviceaddress", "The device's address (matching the private key the device uses to sign its data).")
  .addParam("contractaddress", "The DevicesRegistry contract address.")
  .setAction(async ({deviceaddress,contractaddress}) => {
    console.log("Registering device:", deviceaddress, ",to contract: ", contractaddress);

    const DevicesRegistry = await ethers.getContractFactory("DevicesRegistry");
    const devicesRegistry = await DevicesRegistry.attach(contractaddress);
    let ret = await devicesRegistry.registerDevice(deviceaddress);
    console.log ("registerDevice:", ret);
  });


module.exports = {
  solidity: "0.8.4",
  networks: {
    testnet: {
      // These are the official IoTeX endpoints to be used by Ethereum clients
      // Testnet https://babel-api.testnet.iotex.io
      // Mainnet https://babel-api.mainnet.iotex.io
      url: `https://babel-api.testnet.iotex.io`,

      // Input your Metamask testnet account private key here
      accounts: [`${IOTEX_PRIVATE_KEY}`],
    },
  },
};
