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

// Create a calculator function where the operation defaults to "add".
const caluculator = (a, b, opp = "add") => {
    switch (opp){
        case "add": 
            return a + b;
    }
}
console.log(caluculator(5, 10));

// Create a function that receives unlimited numbers and returns their sum using the Rest Operator. 
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
console.log(sum(1, 2, 3, 4, 5));

// Create a function that receives unlimited numbers and returns the largest number
const findMax = (...numbers) => Math.max(...numbers);
console.log(findMax(5, 10, 15, 20, 25));

//Merge two arrays using the Spread Operator: 
const frontend = ["HTML", "CSS"]
const backend = ["NodeJS", "ExpressJS"];
const fullstack = [...frontend, ...backend];
console.log(fullstack);

// Copy an array using the Spread Operator and add one extra value. 
const arr1 = [1,2,3]; 
const arr2 = [ ...arr1, 4];
console.log(arr2);

 //Copy an object and update only the email property. 
const user = {
    name: "Subham",
    email: "240130@geetauniversity.edu.in"
}
const updated = {
    ...user,
    email: "newemail@geetauniversity.edu.in"
}
console.log(updated);

//Create a product object and create a new object with an added discount field using the Spread Operator. 
const product = {
    name: "Laptop",
    price: 1000
}
const discounted = {
    ...product,
    discount: "10%"
}
console.log(discounted);

//Use map() and an arrow function to return only names from the given array:
const users = [ { name: "Ram", age: 25 }, 
                { name: "Mohan", age: 30 }, 
                { name: "Amit", age: 22 } 
]; 
const names = users.map(user => user.name);
console.log(names);

//Use filter() to get users whose age is greater than 24. 
const filter = users.filter(user => user.age > 24);
console.log(filter);

//Use reduce() to calculate the total age of all users.
const totalAge = users.reduce((acc, user) => acc + user.age, 0);
console.log(totalAge);

//Create a function createInvoice(customerName, amount) and return a formatted string using template literals. 
const Invoice = (customerName, amount) => ` ${customerName}: $${amount.toFixed(2)}`;
console.log(Invoice("Ram", 100));

//25
const student = { name: "Ram", marks: [80, 90, 70, 85] };
const { name, marks } = student;
const totalMarks = marks.reduce((acc, mark) => acc + mark, 0);
const average = totalMarks / marks.length;
console.log(` ${name},  ${totalMarks},  ${average.toFixed(2)}`);

`