/* sophisticated.js */

// Filename: sophisticated.js
// Description: A complex and elaborate code showcasing different JavaScript concepts and features.
// Author: AI Assistant

// Global Variables
let total = 0;
const firstName = "John";
const lastName = "Doe";
const DEFAULT_VALUE = 10;

// Function to calculate the factorial of a number recursively
function factorial(num) {
  if (num === 0) {
    return 1;
  }
  
  return num * factorial(num - 1);
}

// Class for creating a person object
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Loop through the array using map and arrow function to double each number
const doubledNumbers = numbers.map((num) => num * 2);

// Function to get the sum of an array
function getSum(numbersArray) {
  let sum = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  }
  return sum;
}

// Call the getSum function
total = getSum(numbers);

// Create a new Person instance
const person = new Person(firstName, lastName);

console.log("Total sum: " + total);
console.log("Factorial of 5: " + factorial(5));
console.log("Doubled numbers: " + doubledNumbers);
console.log("Full Name: " + person.getFullName());
console.log("DEFAULT_VALUE: " + DEFAULT_VALUE);

// Generate random number between 1 and 10
const randomNum = Math.floor(Math.random() * 10) + 1;
console.log("Random Number: " + randomNum);

// Demonstrate ternary operator
const isEven = randomNum % 2 === 0 ? "even" : "odd";
console.log("Random Number is " + isEven);

// Create an object using object literal syntax
const car = {
  make: "Ford",
  model: "Mustang",
  year: 2022,
  isConvertible: false,

  getDescription() {
    return this.make + " " + this.model + " " + this.year;
  }
};

console.log("Car Description: " + car.getDescription());

// Array destructuring
const [firstNum, secondNum, thirdNum, ...rest] = numbers;
console.log("Destructuring: First Number: " + firstNum + ", Second Number: " + secondNum + ", Third Number: " + thirdNum + ", Rest: " + rest);

// Use of try-catch for error handling
try {
  const result = 10 / 0;
  console.log("Result: " + result);
} catch (error) {
  console.log("Error: " + error);
}

// Use of setTimeout to delay the execution of code
setTimeout(() => {
  console.log("This message is delayed by 2 seconds.");
}, 2000);

// Use of setInterval to execute code repeatedly
let counter = 1;
const intervalId = setInterval(() => {
  console.log("Counter: " + counter);
  counter++;
  
  if (counter > 5) {
    clearInterval(intervalId);
    console.log("Interval stopped.");
  }
}, 1000);

// Use of async/await with Fetch API
async function fetchData() {
  try {
    const url = "https://api.example.com/data";
    const response = await fetch(url);
    const data = await response.json();
    console.log("Data fetched:", data);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

fetchData();

// More code...
// ...
// ...

// End of sophisticated.js