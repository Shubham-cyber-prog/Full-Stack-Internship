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
const allstudent ={
    name:"Subham ",
    age : 19,
    city : "Panipat",
    sayYourSkills:function(){
        console.log("Hello my skills are MERN Stack");
    }
}
allstudent.sayYourSkills();
// console.log(allstudent["age"]);


// let key = "name"

// console.log(allstudent[key]);