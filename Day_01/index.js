// for (var i=1; i<=3; i++) {{
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }}

// const user = {
//     name: "John"
// };

// user.name = "Doe";

// console.log(user.name);


// const multiply = ()=>({
//     name :"Subham"
// })

// console.log(multiply());

// write an arrow function 
// const products = [
//     {id :1, name : "Laptop", price : 1000},
//     {id :2, name : "Phone", price : 500},
//     {id :3, name : "Tablet", price : 3000} ,
//     {id :4, name : "Monitor", price : 2000},
//     {id :5, name : "Keyboard", price : 500},
//     {id :6, name : "Mouse", price : 300},
//     {id :7, name : "Headphones", price : 1500},
//     {id :8, name : "Speaker", price : 800},
//     {id :9, name : "Webcam", price : 1200},
//     {id :10, name : "Printer", price : 2500}
// ] 
// // const productgreater = products.filter(product => product.price > 1000);
// const result = products.reduce((acc, product) => {
//     total = acc + product.price;
//     return total;
// }, 0);



// console.log(result);

// const name = "Geeta "

// console.log(`my school name is ${name}`);

// const line =`my name is Subham `
// console.log(line)

// a = 5; 
// b = 10;
// console.log(`${a + b}`);

// const user  = {
//     name : "Subham",
//     age :25
// }
// const {name, age} = user;

// console.log(name);
// console.log(age);

// function greet (name = "Guest"){
//     console.log(name );
// }

// greet("Subham");
// greet();

// function fetchData(page = 1){

// }
// fetchData(4);

// rest operator 
// function addvalue(...nums){
//     console.log(nums);
// }
// console.log(addvalue(1,2,3,4,56,7,8,9,10));

//spread operator 
// const arr1 = [1,2,3];
// const arr2 = [ ...arr1, 4,5,6];
// console.log(arr2);

// const nums = [10, 20, 30, 40, 50];
// const [first, second, ...rest] = nums;
// console.log(first);
// console.log(second);
// console.log(rest);

// const caluculator = (a, b, opp = "add") => {
//     switch (opp){
//         case "add": 
//             return a + b;
//     }
// }
// console.log(caluculator(5, 10));

// const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum(1, 2, 3, 4, 5));


// const frontend = ["HTML", "CSS"]
// const backend = ["NodeJS", "ExpressJS"];
// const fullstack = [...frontend, ...backend];
// console.log(fullstack);


const Invoice = (customerName, amount) => ` ${customerName}: $${amount.toFixed(2)}`;
console.log(Invoice("Ram", 100.50));