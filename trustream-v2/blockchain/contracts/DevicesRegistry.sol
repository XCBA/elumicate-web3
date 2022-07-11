// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

import "./interfaces/IDevicesRegistry.sol";

contract DevicesRegistry is Ownable, IDevicesRegistry {
    event DeviceRegistered(address indexed _deviceAddress);

    event DeviceDeleted(address indexed _deviceAddress);

    event DeviceSuspended(address indexed _deviceAddress);

    event DeviceActivated(address indexed _deviceAddress);

    struct Device {
        bool isRegistered;
        bool isActive;
    }

    mapping(address => Device) public AuthorizedDevices;

    constructor() {
        console.log("Deploying DevicesRegistry contract");
    }

    modifier onlyRegisteredDevice(address _deviceAddress) {
        require(
            AuthorizedDevices[_deviceAddress].isRegistered,
            "Data Source is not registered"
        );
        _;
    }

    modifier onlyUnregisteredDevice(address _deviceAddress) {
        require(
            !AuthorizedDevices[_deviceAddress].isRegistered,
            "Data Source already registered"
        );
        _;
    }

    modifier onlyActiveDevice(address _deviceAddress) {
        require(
            AuthorizedDevices[_deviceAddress].isActive,
            "Data Source is suspended"
        );
        _;
    }

    modifier onlySuspendedDevice(address _deviceAddress) {
        require(!AuthorizedDevices[_deviceAddress].isActive, "Data Source is active");
        _;
    }

    function registerDevice(address _newDeviceAddress)
        public
        onlyOwner
        onlyUnregisteredDevice(_newDeviceAddress)
    {
        AuthorizedDevices[_newDeviceAddress] = Device(true, true);
        emit DeviceRegistered(_newDeviceAddress);
    }

    function removeDevice(address _deviceAddressToRemove)
        public
        onlyOwner
        onlyRegisteredDevice(_deviceAddressToRemove)
    {
        delete AuthorizedDevices[_deviceAddressToRemove];
        emit DeviceDeleted(_deviceAddressToRemove);
    }

    function suspendDevice(address _dataSourseToSuspend)
        public
        onlyOwner
        onlyRegisteredDevice(_dataSourseToSuspend)
        onlyActiveDevice(_dataSourseToSuspend)
    {
        AuthorizedDevices[_dataSourseToSuspend].isActive = false;
        emit DeviceSuspended(_dataSourseToSuspend);
    }

    function activateDevice(address _deviceAddressToActivate)
        public
        onlyOwner
        onlyRegisteredDevice(_deviceAddressToActivate)
        onlySuspendedDevice(_deviceAddressToActivate)
    {
        AuthorizedDevices[_deviceAddressToActivate].isActive = true;
        emit DeviceActivated(_deviceAddressToActivate);
    }

    function isAuthorizedDevice(address _deviceAddress)
        public
        view
        override
        onlyRegisteredDevice(_deviceAddress)
        onlyActiveDevice(_deviceAddress)
        returns (bool)
    {
        return true;
    }
}
