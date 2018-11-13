//Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.

//In the code below, we have two different Mixing function. 

let Duck = {}
let Plane = {}
//
//function glideMixin(obj) {
//  obj.glide = function() {
//    console.log("Gliding on the water");
//  };
//}
//function flyMixin(obj) {
//  obj.fly = function() {
//    console.log("Flying, wooosh!");
//  };
//}
//
let ducky = Object.create(Duck);
//glideMixin(ducky)
//ducky.glide()
//
let sevenSevenSeven = Object.create(Plane);
//flyMixin(sevenSevenSeven)
//sevenSevenSeven.fly()

let motionModule = (function () {
    return {
        glideMixin: function (obj){
            obj.glide = function(){ console.log("Gliding on the water");};
        },
        flyMixin: function(obj){
            obj.fly = function() {
                console.log("Flying, wooosh!");
            };
        }
    }
}) ();

//motionModule.glideMixin(ducky)
//ducky.glide()
//motionModule.flyMixin(sevenSevenSeven)
//motionModule.glideMixin(sevenSevenSeven)
//sevenSevenSeven.fly()
//sevenSevenSeven.glide()

////CHALLENGE:
//Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.

//let isCuteMixin = function(obj) {
//  obj.isCute = function() {
//    return true;
//  };
//};
//let singMixin = function(obj) {
//  obj.sing = function() {
//    console.log("Singing to an awesome tune");
//  };
//};


let funModule = (function(){
    return {
        isCuteMixin : function(obj){ obj.isCute = function() {return true};},
        
        singMixin : function(obj) {obj.sing = function() {console.log("Siging to an awesome tune")}}
    }
})()


funModule.isCuteMixin(ducky)
funModule.singMixin(ducky)
console.log(ducky.isCute())
ducky.sing()







