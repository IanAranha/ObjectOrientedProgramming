// The eat method is repeated in both Cat and Bear. 
// Edit the code in the spirit of DRY by moving the eat method to the Animal supertype.

// function Cat(name) {
//   this.name = name; 
// }

// Cat.prototype = {
//   constructor: Cat, 
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };

// function Bear(name) {
//   this.name = name; 
// }

// Bear.prototype = {
//   constructor: Bear, 
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };

// function Animal() { }

// Animal.prototype = {
//   constructor: Animal,
  
// };

function Cat(name) {
  this.name = name; 
}

Cat.prototype = {
  constructor: Cat, 
};

function Bear(name) {
  this.name = name; 
}

Bear.prototype = {
  constructor: Bear, 
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  } 
};

//From the original function, I have removed the method eat from Cat class and from Bear class too.

//The eat method has been put into a separate class : Animal.



let ginger = new Cat("Clyde")
console.log( ginger instanceof Cat)

let grizzlie = new Bear("Balu")
console.log( grizzlie instanceof Bear)

//With this set up. Animal as a separate class, I cannot allow a Cat to access the eat method.
//I will have to set the cat object created to an animal object, allow it to eat and then set it back to cat. 
//RISKY!! CAT will lose some data in the swtich.
//Problem solved by inheritance....see next few projects.

ginger = new Animal()
ginger.eat()
console.log( ginger instanceof Cat)
ginger = new Cat()
console.log( ginger instanceof Cat)







