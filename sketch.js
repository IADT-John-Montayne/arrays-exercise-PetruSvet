function setup() {
	createCanvas(500, 500);
	background(55);
	rectMode(CENTER);
}

function draw() {
	rect(250, 250, 100, 100);
}


// Loop an array
let fruits = ["apple", "banana", "orange"]; 

for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}
// apple,banana,orange


//Looping with for..of
let fruits2 = ["apple", "banana", "orange"]; 

for (let fruit of fruits2) {
	console.log(fruit);
}
// apple,banana,orange


// Slicing an array
let names = ["John", "Michael", "Andrew", "Billy"]
 
let group = names.slice(1,3);
console.log(group);
// michael,andrew


// Removing/Replacing - splice()
let cars = ["Honda", "Toyota", "Nissan"]
cars.splice(1,1);
console.log(cars);
// ["Honda", "Toyota"]

//Replacing with splice()
let vegetables = ["Tomato", "Cucumber", "Bell Pepper"]
fruits.splice(1,1, "cabbage");
console.log(vegetables);
// ["Tomato, "cabbage", "Bell Pepper"]



