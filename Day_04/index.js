// console.log(age);

// console.log("A"); 
// try{
//     console.log(user.name); 
// }catch(error){
//     // console.log(error.name);
//     // console.log(error.message);
//     console.log(error.message);
// }
// finally{
//     console.log("Finally block executed");
// }
// console.log("B");

// let age = 12; 
// if (age < 18) {
//     throw new Error(
//         "Age must be at least 18"



function throws() { throw new RangeError('out') } try { throws() } catch(e) { if (e instanceof TypeError) throw e; console.log('range caught'); }

