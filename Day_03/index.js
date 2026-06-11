// function add(a){
//     return function(b){
//         return function(c){
//             return a + b + c;
//         }
//     }
// }
// console.log*(add(1)(2)(3));


// function sendAutoEmail(to){
//     return function(subject){
//         return function(body){
//             console.log(`Sending email to ${to} with subject "${subject}" and body "${body}"`);
//         }
// }
// }
// let step1 = sendAutoEmail("john@example.com");
// let step2 = step1("Regarding  confirmation Mail of signup ");
// let step3 = step2("Please confirm your email address.");

// let studentName = "Subham";
// let studentAge = 19;
// let studentCity = "Panipat";

// const allStudentData = [
// {
//     name:"Subham ",
//     age : 19,
//     city : "Panipat"
// },
// ]
// const allstudent ={
//     name:"Subham ",
//     age : 19,
//     city : "Panipat",
//     skill: "MERN Stack",
//     sayYourSkills:function(){
//         console.log(this.skill);
//     }
// }
// allstudent.sayYourSkills();

// console.log(allstudent["age"]);


// let key = "name"

// console.log(allstudent[key]);

// const obj1 = {
//     name: "Subham",
// }

// const obj2 = onj1
// obj2.name = "Rahul";

// console.log(obj1.name); // Output: "Rahul"



// const animal = {
//     bark(){
//         console.log("Hello i am barking ")
//     }
// }

// const dog = Object.create(animal);
// dog.bark(); 
// function Student(name, age) {
//     this.name = name;
//     this.age = age;
// }
// const s1 = new Student("Subham", 19);
// const s2 = new Student("Rahul", 20);
// console.log(s1); 
// console.log(s2); 



// function Student(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         console.log("Hello"); 
// }
// }
// Student.prototype.greet = function(){
//     console.log("Hello")
// }
// const s1 = new Student("Subham", 19);
// const s2 = new Student("Rahul", 20);
// const s3 = new Student("Abhishek", 20);

// s1.greet();
// s2.greet();
// s3.greet();

// function student(){

// }
// console.log(student.prototype);


// function Student(){}
// const s1 = new Student();
// console.log(s1.__proto__ === Student.prototype); 

// function Student (name, age){
//     this.name = name;
//     this.age = age;
// }
// Student.prototype.greet = function(){
//     console.log("Hello");
// }

// class Student{
//     constructor(name , age ){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         console.log("Hello");
//     }
// }

// class Animal{
//     constructor(name){
//         this.name = name;
//     }

// }
// class Dog extends Animal{
//     constructor(name){
//         super(name);
//     }

// }
// const d = new Dog("Buddy");
// console.log(d.name);


// class User{
//     get message(){
//         return "Hello i am a user"
//     }
// }
// const u = new User();
// console.log(u.message);

// class User{
//     set age(value){
//         if(value<0){
//             throw Error ("Age cannot be negative");
//         }
//         this ._age = value;
//     }
// }
//it will run automatically 


//Static method in JS 

// class MathHelper{
//     static add(a,b){
//         return a + b;
//     }
// }
// MathHelper.add(2,3);
// console.log(MathHelper.add(2,3));

// class Animal{
//     eat(){
//         console.log("Eating");
//     }
// }
// class Dog extends Animal {
//     bark(){
//         console.log("Barking");
//     }
// }
// const d = new Dog();
// d.bark();
// d.eat();
