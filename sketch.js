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



console.log("-----------------Exercise Begins----------------")
// Exercise Begins ---------------------------------
let basket = ["apple", "banana", "orange", "pear"];

//Log the first fuit
console.log(basket[0])

//Log the last fruit
console.log(basket[3])

//Replace "banana" with "kiwi" (Find Banana first)
console.log(basket[1])
basket[1] = "kiwi";
console.log(basket);

//Remove the last fruit
basket.pop();
console.log(basket);

//Add "mango" to the start of the array
basket.unshift("mango");
console.log(basket);

//Loop through the array
for (let i = 0; i < basket.length; i++) {
	console.log(basket[i])
}


//Loop using "Fruit 1:" format
for (let i = 0; i < basket.length; i++) {
  console.log(`Fruit ${i + 1}: ${basket[i]}`);
}

//Check if orange exists in the basket
console.log(basket.indexOf("orange"));

//If it exists, log: Orange found at index X
console.log("Orange found at index", basket.indexOf("orange"));

//If it doesn't
for (let i = 0; i < basket.length; i++) 
  if (basket[i] === "orange") {
    console.log("Orange doesn't exist");
  }

//Create a new array called citrus
let citrus = basket.slice()

