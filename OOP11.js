//Add a numLegs property to the prototype of Dog

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");
console.log(beagle.name)
console.log(beagle.numLegs)