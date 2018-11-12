//Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.

function Dog(name) {
  this.name = name; 
}

Dog.prototype = {
    numLegs : 2,
    
    eat : function(){
       console.log("nom nom nom")
    },
    
    describe : function(){
        console.log("I am a dog and my name is " + this.name)
    }  
};

var retriever = new Dog("Gus")

retriever.eat();
retriever.describe();