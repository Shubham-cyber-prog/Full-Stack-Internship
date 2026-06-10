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

// const words = ["Hello ", "How ", "are ", "You"]
// const sentence = words.reduce((acc, word) => acc + word, "");
// console.log(sentence);


// function a(){
//     let x = 1; 
// function b(){
//     let y = 2 ; 
//     function c(){
//         let z = 3 ; 
//         function d(){
//             let w = 4; 
//             console.log(x);
//             console.log(y);
//             console.log(z);
//             console.log(w);

//         }
//         d();
//     }
//     c();

// }
// b();

// }
// a();
//Write a function that returns another function and demonstrates lexical scope.
// function outer(){
//     let username = "subham"
//     function inner(){
//         console.log(username);
//     }
//     return inner;
// }
// const inner = outer();
// inner();

// var x = 100;  function a() {     console.log(x);     var x = 50; }  a(); 

// let name = "Ram";  function show() {     let name = "Mohan";     return function() {         console.log(name);     } }  show()(); 

// Create a 3-level nested function and access all variables inside the innermost function.
// function level1() {
//     let var1 = "Variable 1";
//     function level2() {
//         let var2 = "Variable 2";
//         function level3() {
//             let var3 = "Variable 3";
//             console.log(var1);
//             console.log(var2);
//             console.log(var3);
//         }
//         level3();
//     }
//     level2();
// }
// level1();

// Create a function where a child function can access grandparent variables.
// function grandVar(){
//     let grandVar = "GrandParent"
//     function parentVar(){
//         let parent = "Parent"
//         function childVar(){
//             console.log(grandVar);
//             console.log(parent);
//         }
//         childVar();
//     }
//     parentVar();
// }
// grandVar();

//Create a private variable using lexical scope. 


//Create a reverse counter. Output: 10 9 8 
// function count(){
//     let count = 10;
//     function counts(){
//         console.log(count);
//         count--;
//     }
//     return counts;
// }
// const counter = count();
// counter();
// counter();
// counter();


// //reate a closure that remembers the username forever. 
// function outer(){
//     let username = "subham"
//     function inner(){
//         console.log(username);
//     }
//     return inner;
// }
// const inner = outer();
// inner();

//Build a closure that stores a secret password. Only getter should be available. 





//Use IIFE to create private variables. 
