//Create a variable using const and store your college name. Print it.  
const collegName = "Geeta University"; 
console.log(collegName);

//Create a variable using let and update its value three times.  
let name = "Subham";
console.log(name);
name = "Geeta";
console.log(name);
name = "University";
console.log(name);

//Create a block using {} and show that a variable declared with let cannot be accessed outside it.
{
    let block= "I am inside the block";
    console.log(block);
}

//Write a program to swap two numbers using array destructuring. 
let a = 5;
let b = 10;
[a,b] = [b,a];
console.log(`a: ${a}, b: ${b}`);

// Create an arrow function that returns the cube of a number. 
const cube = (num) => num ** 3;
console.log(cube(3));

//Create an arrow function to check whether a number is even or odd. 
const EvenOrOdd = (num) => num % 2 === 0 ? "Even" : "Odd";
console.log(EvenOrOdd(5));
console.log(EvenOrOdd(6));

// Create an arrow function that finds the maximum of three numbers. 
const findMax = (a, b, c) => Math.max(a, b, c);
console.log(findMax(5, 10, 15));

//Given an array  const nums = {10, 20, 30, 40, 50 } Use destructuring to get first, second and remaining values. 
const nums = [10, 20, 30, 40, 50];
const [first, second, ...rest] = nums;
console.log(first);
console.log(second);
console.log(rest);

// Create a function that receives a user's name and age and returns: "Hello Ram, you are 25 years old." using template literals. 
const greet = (name, age) => `Hello ${name}, you are ${age} years old.`;
console.log(greet("Ram", 25));

// Create an object and destructure all properties: JavaScript const student = { name: "Ram", age: 25, course: "MERN" }; 
const student = { name: "Ram", age: 25, course: "MERN" };
const { name, age, course } = student;
console.table({ name, age, course });

// Rename course to technology while destructuring. 
const { name, age, course: technology } = student;
console.log(name);
console.log(age);
console.log(technology);

// Create a function with a default parameter: createUser(name, role="Student") 
const User = (name, role = "Student") => `Name: ${name}, Role: ${role}`;
console.log(User("Subham"));
console.log(User("Subham", "Student"));
