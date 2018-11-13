//when declared in an object, any variable can be changed as shown below

function Bird() {
    this.weight = 15;
}

let sparrow = new Bird();
console.log(sparrow.weight) //<==== This will show the weight at 15
sparrow.weight = 30;        //<==== Weight can be changed to 30
console.log(sparrow)
console.log(sparrow.weight)


//To over come this, we can make the variable private.

function Bird2() {
    //The variable weight is now private and is accessibe only inside the object
    let weight = 15
    this.getWeight = function() {return weight}
}

let crow = new Bird2()
console.log(crow.weight)   // <==== This will return undefined because it is protected
console.log(crow.getWeight()) // <==== This will show 15 but the variable is still protected.
