//Global Scope 
// let name = "Sachin"
// function show(){
//     console.log(name);
// }
// show(); 

//function Scope
// function show(){
//     let name = "Sachin"
//     console.log(name);
// }
// show();

//Block Scope
// if(true){
//     let name = "Sachin"
//     console.log(name);
// }
// console.log(name);

// function outer(){
//     let username = "Sachin"
//     function inner(){
//         console.log(username);
//     }
//     inner();
// }
// outer(); 

// function a(){
//     let x = 10;
//     function b(){
//         let y = 20;
//         function c(){
//             console.log(x);
//             console.log(y);
//         }
//         c();
//     }
//     b();
// }
// a();        
// console.log (x);




    //}

// function calculate(a, b, operation)({
//         return operation(a, b);

    // })


// const products = [
//     {id :1, name : "Laptop", price : 1000,location : "India"},
//     {id :2, name : "Phone", price : 500,location : "USA"},
//     {id :3, name : "Tablet", price : 3000,location : "China"} ,
//     {id :4, name : "Monitor", price : 2000,location : "Germany"},
//     {id :5, name : "Keyboard", price : 500,location : "Japan"},
//     {id :6, name : "Mouse", price : 300,location : "South Korea"},
//     {id :7, name : "Headphones", price : 1500,location : "China"},
//     {id :8, name : "Speaker", price : 800,location : "USA"},
//     {id :9, name : "Webcam", price : 1200,location : "Japan"},
//     {id :10, name : "Printer", price : 2500,location : "Germany"}
//  ] 
 
// const product = products.map(product => product.id);

//  console.log(product);

// const result = [10,20,30,40,50].filter(num => num <= 30);
// console.log(result);

// const products = [ 
//     {price:10000},
//     {price:20000},
//     {price:30000},
//     {price:40000},
//     {price:50000}
// ]

// const names = ["Sachin", "Rahul", "Virat", "Rohit", "MS Dhoni"];
// const filteredNames = names.filter(name => name.startsWith("R"));
// console.log(filteredNames);

// const nums = [1, 2, 3, 4, 5];
// const sum = nums .reduce((acc, num) => acc + num, 0);
// console.log(sum);


// const prices = [ 100, 200 , 300, 400, 500];
// const totalPrice = prices.reduce((acc, price) => acc + price, 0);
// console.log(totalPrice);
//maximum
// const arr = [10, 50, 20, 30, 90, 60];
// const max = arr.reduce((acc, num) => (num > acc ? num : acc), arr[0]);
// console.log(max);

const words = ["Hello ", "How ", "are ", "You"]
const sentence = words.reduce((acc, word) => acc + word, "");
console.log(sentence);
