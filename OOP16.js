// Just like people inherit genes from their parents, an object inherits its prototype directly from the 
// constructor function that created it. For example, here the Dog constructor creates the retriever object:

// function Dog(name) {
//   this.name = name;
// }

// let beagle = new Dog("Snoopy");

// beagle inherits its prototype from the Dog constructor function. 
// You can show this relationship with the isPrototypeOf method:


function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

console.log(Dog.prototype.isPrototypeOf(beagle))

