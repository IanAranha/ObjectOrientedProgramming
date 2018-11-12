//Object.create(obj) creates a new object, and sets obj as the new objects prototype. 
//
//Recall that the prototype is like the "recipe" for creating an object. By setting the prototype of animal to be Animals prototype, you are effectively giving the animal instance the same "recipe" as any other instance of Animal.
//
//Use Object.create to make two instances of Animal named duck and beagle.
//
//unction Animal() { }
//
//Animal.prototype = {
//  constructor: Animal, 
//  eat: function() {
//    console.log("nom nom nom");
//  }
//};
//
//// Add your code below this line
//
//let duck; // Change this line
//let beagle; // Change this line
//
//duck.eat(); // Should print "nom nom nom"
//beagle.eat(); // Should print "nom nom nom" 


function Animal() { }

Animal.prototype = {
    constructor: Animal, 
    eat: function() {
        console.log("nom nom nom");
    }
};

// Add your code below this line

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom" 