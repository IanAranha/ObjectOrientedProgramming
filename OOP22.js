//Override the fly() method for Penguin so that it returns "Alas, this is a flightless bird."

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

let penguin = new Penguin();
console.log()
console.log("Before overriding the fly method: ")
console.log(penguin.fly())

//OVer riding the inherited fly method
Penguin.prototype.fly = function() { return "Alas, this is a flightless bird "}
console.log()
console.log("After overriding the fly method:")
console.log(penguin.fly());
console.log()