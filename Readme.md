### Day_01
before ES6 - Oonly 
after ES6 - three types of variable let , var and const 

problem with var 

Redeclaration


Functionsl Scope 
Loop Related scope 

let ->  Redeclaration is not allowed 
blocked scope 
looped problem solved 

//Block scope - {} you can only access these variables defined inside only 

const 
- Reassigment not allowed 
in case of object with const is allowed 

We cam not access variable data type because they are tdz 

Temporial Dead Zone - 
Var are not tdz but let , const are tdz 

implicit Return 
Single Return 
Multiparameter 
no parameter 
return object 

Template literal in Javascript

concatenation of string you can use its value in any line 
it is introduced in ES6
used for multi line strength 

 
//Array Destructring


//Default parameter  and spread parameter 
default parameter ka use tb hota hai jb function call krte wakt argunment pass kre 

Spread operator array ya object ke elements/properties ko expand kar deta hai.
Rest Operator 

### Day_02
1.Lexical Scope 
2. Closure 
3. iife 
4 . hof
5. map()
6. Filter()
7. reduce()
8. function composition
9. currying 
10. Memorization 

1. Lexical scope 
-> Global Scope 
scope matlab kisi variable ko access kr skte hai 

->Function scope 
jab koi 

->Block scope 

lexical scope ka matlab itna hai ki child function apne parent variable  ke sarwe variabkle ko accesss kr skta hai 

###Closure 
closure is a combinationn of function and its lexical environment 
jab koi child function apne parent function ko fully execute ho jane ke baad bhi usse milli value ko hold krke rkhta h then that willl be known as closure 

###IIFE (Immediately Invoked Function Expression)
function bnta bhi h aur turantt hi execute bhi ho jata hai 

Higher order function 
when a function use a function as a parameter or a function returning a function as resukt known as hof 

map function 
ek array method hai jo har element par callback function execute karta hai aur transformed values ka naya array return karta hai.

filter function 
when we want to implement 

it doesn't effect original array 

Reduce()-
when we have to convert an array into a singke value 


### Day_03 
object 
-data 
-function 

const student ={
    name :"Subham",
    age:25, 
    city :"Kanpur"
}

key -> name , age , city 
-> To access value of key in object we have to use dot notation 
->When we are using a function in an object at that time that will be known as method.

basically if any particular object is usng any value of key in  a method so at that time to acess that we have to use this keyword.

this -> student 

prototype chaining  ek javascript technique hai jisme ek object dusre object ke properties or method ko access krta  hai agr usko properties or method nahi milta to wo parent ko dhundta jb tk nhi mil jata ye chain chlta hai 

const s1 = new student("Ram", 25)
step-> create an new object
step-> to add object from constructor 
step3->code execution 

Har ek function ke pass prototype hoti hai 

*** ES6 In Javscript 
```
Inheritance -> Dog can herit properties of animal . 
```
