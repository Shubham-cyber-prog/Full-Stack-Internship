//Ek student object banao jisme: ● name ● age ● city Store ho. 
let student = {
    name: "Subham ",
    age: 20,
    city: "Panipat"
};

//Upar wale object ka name print karo. 
console.log(student.name);

//Object me greet() method add karo jo print kare:
student.greet = function() {
    console.log("Hello, I am  " + this.name);
};
student.greet();

//Object me isAdult() method banao jo age check kare. 
student.isAdult = function() {
    return this.age >= 18;
};
console.log(student.isAdult());

//Object ki sabhi keys print karo.
console.log(Object.keys(student));

//Object ki sabhi values print karo. 
console.log(Object.values(student));

//Check karo ki object me email property hai ya nahi. 
console.log("email" in student);

// Object me dynamically property add karo. student.course = "MERN"; 
student.course = "MERN";    
console.log(student); 

//Object se age property delete karo. 
delete student.age;
console.log(student);

//10

//Ek object banao jisme showName() method ho aur this.name print kare
const person = {
    name: "Subham",
    showName: function() {
        console.log(this.name);
    }
}

//12
const person2 = {
    name: "Ram",
    printUpperCase: function() {
        console.log(this.name.toUpperCase());
    }
}

//13

//14
Ram 

//15 
undefined 

//16
function student(name, age) {
    this.name = name;
    this.age = age;
}

//17 student objects create karo constructor se. 
const s1 = new student ("Subham", 20);
const s2 = new student ("Aadesh", 21);
const s3 = new student ("Rahul", 22);

//18Constructor function me greet() method add karo.
student.prototype = {
    greet: function() {
        console.log("Hello, I am " + this.name);
    }
}
s1.greet();
s2.greet();
s3.greet();

//19 
Ram 

//20 Car constructor function banao. Properties: brand price 
function Car(brand, price) {
    this.brand = brand;
    this.price = price;
}

//21Student constructor banao aur prototype me greet() method add kar
function student(name, age) {
    this.name = name; 
    this .age = age; 
}
student.prototype.greet = function() {
    console.log("Hello, I am " + this.name);
}
const s1 = new student("Subham", 20);
const s2 = new student("Aadesh", 21);
const s3 = new student("Rahul", 22);

s1.greet();
s2.greet();
s3.greet();

//22
not defined 

//23Prototype me isAdult() method add karo. 
student.prototype.isAdult = function() {
    return this.age >= 18;
}
console.log(s1.isAdult());
console.log(s2.isAdult());
console.log(s3.isAdult());

//24
Hi
 
//25 Prototype me course property add karo. 
student.prototype.course = "MERN";
console.log(s1.course);
console.log(s2.course);
console.log(s3.course);

//26 
false kyu course property prototype mai add

//27
true

//28 Prototype chain draw karo: const arr=[] 
const arr = [];
console.log(arr.__proto__);

//29 Animal object banao. Method: eat() 
const animal = {
    eat: function() {
        console.log("Animal is eating");
    }
}

//Animal se dog object create karo using: Object.create() 
const animal = {
    eat: function() {
        console.log("Animal is eating");
    }
}
const dog = Object.create(animal);
dog.bark = function() {
    console.log("Dog is barking");
}
dog.eat(); 
dog.bark();

