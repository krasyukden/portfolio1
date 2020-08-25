"use strict";

class Home

	state
		_address: string
		_devices: []
	behavior
		getAdress(): string
		setAdress(string): void
		addDevice(device): void
		getDeviceByName(string): device
		getAllDevices(): [device]
	    deleteDeviceByName(string): void 
      
      onAllDevices(): void
      offAllDevices(): void
      
      delayOn(name, delay, callback): void
      delayOn(name, delay): Promise
 