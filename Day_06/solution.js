//1
function greetUser(name, callback) {
  const greeting = `Hello ${name} Welcome ${name}`;
  callback(greeting);
}

//2
function calculate(a, b, callback) {
    const result = callback(a, b);
    return result;
    }
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Error: Division by zero';
    }
    return a / b;
}

greetUser('Ram', (message) => {
    console.log(message);
});

console.log(calculate(5, 3, add)); 
console.log(calculate(5, 3, multiply)); 
console.log(calculate(5, 0, divide)); 

//3
function calculator(a, b, operation) {
    return operation(a, b);
}

console.log(calculator(20, 10, add)); 
console.log(calculator(20, 10, multiply)); 
console.log(calculator(20, 10, divide)); 


//4Create a function: processStudent(student, callback) Callback should print student details. 
function Student(student, callback) {
    callback(student);
}

const student = {
    name: 'Subham',
    age: 20,
    grade: 'A'
};
Student(student, (student) => {
    console.log(`Student Name: ${student.name}`);
    console.log(`Student Age: ${student.age}`);
    console.log(`Student Grade: ${student.grade}`);
});

//5
function downloadFile(callback) {
    setTimeout(() => {
        const file = 'File downloaded successfully';
        callback(file);
    }, 2000);


//6 
function registerUser(callback) {
    setTimeout(() => {
        const user = 'User registered successfully';
        callback(user);
    }, 2000);
}

registerUser((message) => {
    console.log(message);
    console.log('Welcome email s');
});

downloadFile((message) => {
    console.log(message);
});

//7


//8
function sendWelcomeEmail(user) {
    console.log(`Welcome email sent to ${user}`);
}
function registerUser(callback) {
    setTimeout(() => {
        const user = 'User registered successfully';
        callback(user);}, 2000);
}
registerUser((message) => {
    console.log(message);
    sendWelcomeEmail('User');
});

//11
A->C -> B

//12 
2 then 1 

//13
start End Timeout 

///14 

//15  
function bombTimer(seconds) {
    console.log(`Bomb will boom in ${seconds} seconds...`);
    setTimeout(() => {
        console.log('**Boom!');
    }, seconds * 1000);
}

bombTimer(3);

//16
function notification(message, delay) {
    setTimeout(() => {
        console.log(`Notification: ${message}`);
    }, delay);
}

notification('This is a delayed notification', 3000);

//17


//18 

//19 

//20 
function wait(seconds,callback){
    setTimeout(() => {
        callback();
    }, seconds * 1000);
}

wait(2, () => {
    console.log('Waited for 2 seconds');
});

//21 

