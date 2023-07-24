//slice method which requires 2 parameters that is .slice(start, end)

let text = "Banana, Apple, Grapes";
console.log(text.length);
// string 0123456789
// 012345
// Banana

console.log(text.slice(8, 13));
console.log(text.slice(0, 6));
console.log(text.slice(15, 22));

let fruits = "Guava, Mango, Apple";
console.log(fruits.slice(7));

let cars = "mercedes, jaguar";
console.log(cars.slice(-16));

console.log(cars.slice(-16, -8));

//substring = value less than 0 is considered as 0 = .substring(start, end)

let bike = "yamaha, apache";
console.log(bike.substring(0, 6));

// substr is similar to slice = .substr(start, length)

let tech = "facebook, Google, Twitter";
console.log(tech.substr(0, 8));
console.log(tech.substr(10, 6));
console.log(tech.substr(18, 7   ));
