//1
oops true
done

//2
TypeError

//3
inner
caught 42
outer

//4
2

//5
bad
fin

//6
ReferenceError

//7 
fail 404 true 

//8 
true

//9 


//10 
TypeError

//11

//12

//13

//14

//15
const mathUtils = require("./mathUtils");

console.log(mathUtils.add(2, 3));

console.log(mathUtils.sub(5, 2));
console.log(mathUtils.mul(4, 6));   
console.log(mathUtils.div(10, 2));
try {
    console.log(mathUtils.div(10, 0));
}
catch (error) {
    console.log(error.message);
}

//16 
const logger = require("./logger");

logger.log("info", "This is an info message");
logger.log("error", "This is an error message");

//17
const { env, port, dbUrl } = require("./config");

if (!env) {
    throw new Error("Environment variable 'env' is missing");
}
if (!port) {
    throw new Error("Environment variable 'port' is missing");
}
if (!dbUrl) {
    throw new Error("Environment variable 'dbUrl' is missing");
}

console.log("Environment:", env);
console.log("Port:", port);
console.log("Database URL:", dbUrl);

//18 


//19


//20

//21

//22
const EventEmitter = require("./EventEmitter");

const emitter = new EventEmitter();

function listener1(data) {
    console.log("Listener 1 received:", data);
}

function listener2(data) {
    console.log("Listener 2 received:", data);
    throw new Error("Error in Listener 2");
}

function listener3(data) {
    console.log("Listener 3 received:", data);
}

emitter.on("myEvent", listener1);
emitter.on("myEvent", listener2);
emitter.on("myEvent", listener3);

//23
const jsonString = '{"name": "John", "age": 30}';
try {
    const user = JSON.parse(jsonString);
    console.log(user);
}
catch (error) {
    console.log("Error parsing JSON:", error.message);
}

//24
{ value: 1, done: false } { value: 3, done: false } { value: 'done', done: true }

//25 
true true error 

//51


//52 
SyntaxError 

//53 
HTTP 500 HttpError: HTTP 500

//54
true true false

//55


//61 

//76 
try {
    
}
catch (error) {
    console.error("Error:", error.message);
}

//83
function withErrorLogging(fn) {
    return function(...args) {
        try {
            return fn.apply(this, args);
        } catch (error) {
            console.error({
                fnName: fn.name,
                args: args,
                error: error.message,
                timestamp: new Date()
            });
            throw error;
        }
    };
}

//84 

//85 
range caught 


//94 
const toast = {
  show: function(message, type, duration) {
    const toastElement = document.createElement("div");
    toastElement.className = `toast ${type}`;
    toastElement.textContent = message;
    document.body.appendChild(toastElement);
    
    setTimeout(() => {
      toastElement.remove();
    }, duration);
    }

    //
