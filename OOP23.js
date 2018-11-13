//Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the ability to glide.

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = function(obj){
    obj.glide = function () {return console.log("Gliding!!")}
}

glideMixin(bird)
glideMixin(boat)

console.log(bird.name)
console.log(boat.name)

console.log(boat.type)


bird.glide()
boat.glide()