//The function below is an anonymous function that is called immediately
//Also known as Immediately Invoked Function Expression IIFE

(function () { console.log("Chirp! Chirp!")})()

//CHALLENGE: 
//Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).

function makeNest() {
  console.log("Second : A cozy nest is ready");
}

//makeNest(); 


(function () {console.log("A cozy nest is ready")})();