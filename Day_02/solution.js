//1
20

//2 
error

//3
function a(){
    let x = 1; 
function b(){
    let y = 2 ; 
    function c(){
        let z = 3 ; 
        function d(){
            let w = 4; 
            console.log(x);
            console.log(y);
            console.log(z);
            console.log(w);
        }
        d();
    }
    c();
}
b();
}
a();

//Write a function that returns another function and demonstrates lexical scope
function outer(){
    let username = "subham"
    function inner(){
        console.log(username);
    }
    return inner;
}
const inner = outer();
inner();

//5
undefined 

//6 
function grandVar(){
    let grandVar = "GrandParent"
    function parentVar(){
        let parent = "Parent"
        function childVar(){
            console.log(grandVar);
            console.log(parent);
        }
        childVar();
    }
    parentVar();
}
grandVar();

//7
undefined 

//8

function level1() {
    let var1 = "Variable 1";
    function level2() {
        let var2 = "Variable 2";
        function level3() {
            let var3 = "Variable 3";
            console.log(var1);
            console.log(var2);
            console.log(var3);
        }
        level3();
    }
    level2();
}
level1();

//10
function counter(){
    let count = 0; 
    function increment(){
        count ++; 
        console.log(count);
    }
    return increment;
}
const increment = counter();
increment();
increment();
increment();

//11
function count (){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}
const counter = count();
counter();
counter();
counter();

//12
function count(){
    let count = 10;
    function counts(){
        console.log(count);
        count--;
    }
    return counts;
}
const counter = count();
counter();
counter();
counter();

//13


//14 
function outer(){
    let username = "subham"
    function inner(){
        console.log(username);
    }
    return inner;
}
const inner = outer();
inner();

//16
function secret (){
    let password = function(){
         let secret = "Shubham123";
            function get(){
                return secret;
            }
            return get;

    }
    const get = password();
    console.log(get());

}   
secret();

//17


//18

//19
function count(){
    let count = 0; 
    function increment(){
        count ++ ;
        console.log(count);
    }
    return increment;
}
count = count();
count();
count();
count();

//21
(function(){
    console.log("Welcome to JavaScript");
})();

//22
(function(l, w){
    let area = l * w;
    console.log(area);
})(5, 3);

//23
(() => {
    console.log("This is an arrow function IIFE");
})();   

//24
(function(){
    let secret = "This is a secret message";
    function reveal(){
        console.log(secret);
    }
    reveal();
})();   

//25

