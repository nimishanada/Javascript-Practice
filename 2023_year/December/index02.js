//  remove element from the array

let colors = ["red","blue","car","green"];

let carIndex = colors.indexOf("car");//get  "car" index

//remove car from the colors array
colors.splice(carIndex, 1); 

console.log(colors); // ["red","blue","green"]