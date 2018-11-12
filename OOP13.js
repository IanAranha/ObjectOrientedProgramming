//Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.

function Dog(name) {
  this.name = name;
}


let beagle = new Dog("Spot");

let retriever = {
    name : "Gus"
}

// Add your code below this line
function joinDogFraternity(candidate){
    if(candidate.constructor === Dog){
        return true
    } else {
        return false
    }
}

console.log(joinDogFraternity(beagle));
console.log(joinDogFraternity(retriever));