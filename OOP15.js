function Dog(name) {
  this.name = name; 
}


Dog.prototype = {
  constructor : Dog,

  numLegs: 2, 

  eat: function() {
    console.log("nom nom nom"); 
  }, 

  describe: function() {
    console.log("My name is " + this.name); 

  }
};

let retriever =  new Dog("Gus");
console.log(retriever.constructor)
retriever.eat()
retriever.describe()