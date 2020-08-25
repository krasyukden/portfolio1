"use strict";

// схема
// class Watercraft
//    _status: Boolean 
//    _power: Number (0 - 4) 
//    _speed: Number 
//    getStatus(): Boolean 
//    getPower(): Number 
//    getSpeed(): Number 
//    on(): void
//    off(): void
//    increasePower(): void
//    decreasePower(): void


function Watercraft(){
	this._speed = 0;
	this._power = 0; // 0 - 4
	this._status = false;
	
}

Watercraft.prototype.getStatus = function(){
	return this._status;
}

Watercraft.prototype.getSpeed = function(){
	return this._speed;
}

Watercraft.prototype.getPower = function(){
	return this._power;
}



Watercraft.prototype.on = function () {
	this._status = true;
}

Watercraft.prototype.increasePower = function (delay){
	if(this._status && this._power < 4){
		this._power++;
	
	
	 var timeId = setInterval ( () => {
		console.log(this.getSpeed());
		this._speed = this._speed + 5;
	 switch (this._power){
		case 1:
				if(this._speed > 11){
				this._speed = 12;
				clearInterval(timeId);
				};
				break;
		case 2:
				if(this._speed > 27){
				this._speed = 28;
				clearInterval(timeId);
				};
				break;
		case 3:
				if(this._speed > 59){
				this._speed = 60;
				clearInterval(timeId);
				};
				break;	
		case 4:
				if(this._speed > 74){
				this._speed = 75;
				clearInterval(timeId);
				};
				break;		
	    }
	  }, delay);
	
		
	}	
}



Watercraft.prototype.decreasePower = function (delay){
	if(this._status && this._power > 0){
		this._power--;
	
	
	 var timeId = setInterval ( () => {
			console.log(this.getSpeed());
			this._speed = this._speed - 8;
	 switch (this._power){
		case 0: 
			
			
			if(this._speed <= 0){
			clearInterval(timeId);
			this._speed = 0;}
			break;
		case 1:
				if(this._speed <= 12){
				clearInterval(timeId);
				};
				break;
		case 2:
				if(this._speed <= 28){
				this._speed = 28;
				clearInterval(timeId);
				};
				break;
		case 3:
				if(this._speed <= 60){
				this._speed = 60;
				clearInterval(timeId);
				};
				break;	
		
	    }
	  }, delay);
	
		
	}	
}



Watercraft.prototype.off = function(delay){
		this._status = false;	
				
		var timeId = setInterval ( () => {
			if(this._speed >= 8){
				this._speed = this._speed - 8;
			}	
			else {
				this._speed = 0;
				this._power = 0;
				clearInterval(timeId);
			}
						
			console.log(this.getSpeed());
			
		}, delay)	
		
}


// наследник - Boat

function Boat(name, type) {
	Watercraft.call(this);
	if (typeof name === "string" && name.length > 2){
		this._name = name;
	} else {
      this._name = "Boat"; 
    }
    if (Boat.types.indexOf(type) >= 0) {
      this._type = type;
	 }
   else {
	   throw new Error("Enter correct type");
	}
	
	
}
Boat.types = ["fishingBoat", "pilot", "sailing"]; 
Boat.prototype = Object.create(Watercraft.prototype);
Boat.prototype.constructor = Boat; 





Boat.prototype.getType = function (){ 
	return this._type;
}

Boat.prototype.getName = function (){ 
	return this._name;
}


// Наследник //Launch - катер

function Launch (name, type){
	Watercraft.call(this, name, type);
	
	this._levelPetrol = 0;
	if (typeof name === "string" && name.length > 2){
		this._name = name;
	} else {
      this._name = "Launch"; 
    }
   
   if(Launch.types.indexOf(type)>= 0){
	   this._type = type;
   }
   else{
	   throw new Error("Enter correct type 2");
   }
	
}
Launch.types = ["jetski", "launch"];// 
Launch.prototype = Object.create(Watercraft.prototype);
Launch.prototype.constructor = Launch;

Launch.prototype.setPetrol = function(level){
	if(typeof level === "number" && !isNaN(level) && 0 < level && level <= 40){
		this._levelPetrol = level;
	}	
}
Launch.prototype.getPetrol = function(){
	return this._levelPetrol;
}	

Launch.prototype.on = function(){// полиморфизм расшир 
	
	if (this._levelPetrol >= 1){
		console.log("sos");
		Watercraft.prototype.on.call(this);  
	}	
}



Launch.prototype.getType = function (){ 
	return this._type;
}

Launch.prototype.getName = function (){ 
	return this._name;
}


var sailing = new Boat("Rose", "fishingBoat");
var launch = new Launch("Medusa", "launch");

console.log(sailing.getStatus());
sailing.on();
console.log(sailing.getStatus());
console.log(sailing.getPower());
sailing.increasePower(1000);
sailing.increasePower(1000);
sailing.increasePower(1000);
sailing.increasePower(1000);
//sailing.decreasePower(6000);// 
//sailing.decreasePower(7000);
console.log(sailing.getPower());
console.log(sailing.getSpeed());
sailing.off(5000);
console.log(sailing.getStatus());
console.log(sailing.getPower());


console.log(sailing.getStatus());

console.log(sailing.getName());
console.log(launch.getName());
console.log(sailing.getType());
//sailing.setType("pilot");
console.log(sailing.getType());
console.log(launch.getType());
/*sailing.setSpeed(2);
console.log(sailing.getSpeed());
sailing.increaseSpeed();
sailing.increaseSpeed();
sailing.decreaseSpeed();
console.log(sailing.getSpeed());
sailing.off();
console.log(sailing.getStatus());*/


/*
launch.on();
console.log(launch.getStatus());
console.log(launch.getName());
console.log(launch.getType());
launch.setType("jetski");
console.log(launch.getType());
*/
/*launch.setSpeed(4);
launch.increaseSpeed();
launch.increaseSpeed();
launch.decreaseSpeed();
console.log(launch.getSpeed());*/

launch.setPetrol(35);
console.log(launch.getPetrol());
console.log(launch.getStatus());






