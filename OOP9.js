//Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. Then, use instanceof to verify that it is an instance of House.

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let bungalow = {
    numBedrooms : 5
}




let myHouse = new House(3);

console.log( myHouse instanceof House);
console.log( bungalow instanceof House);

