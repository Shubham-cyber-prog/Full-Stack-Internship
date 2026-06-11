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

//