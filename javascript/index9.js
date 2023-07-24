var human; //global variable
var eye; // global variable

//object
let cars = {
  carName: "volvo", //local variable
  carModel: 2018, //local variable
  carMilleage: "25km", //local variable
};
carName = "Bugatti";
console.log(carName);

console.log(cars);
// array
let NewCars = ["volvo", "BMW", "AUDI", "Mercedes"];
console.log(NewCars);

const date = new Date();
console.log(date);

//functions

function myfunction(p1, p2) {
  let cars1;
  cars1 = "Lemousine";
  console.log(cars1);
  return p1 * p2;
}

let result = myfunction(4, 3);
console.log(result);
//addition functions

function addition(a1, a2) {
  return a1 + a2;
}

let additionresult = addition(5, 10);
console.log(additionresult);

// subtraction function
function subtractin(s1, s2) {
  return s1 - s2;
}
let subresult = subtractin(100, 50);
console.log(subresult);

//function example
function muladdition(d1, d2, d3, d4) {
  return d1 + d2 + d3 + d4;
}
let muladd = muladdition(2, 2, 2, 2);
console.log(muladd);
