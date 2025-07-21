// Operators =  operat krne bala 
// Arithmetic

// + = Addition
// - = subtraction
// * = mutiplication
// / = Division
// ** = Exponentiation
// ++ = Increment
// -- = Decrement

let a = 5;
let b = 10;

let sum =  a+b;
let sub = a-b;
let muti = a*b;
let divi = a/b;
let expo = a**b;
let expo2 = 2**3; 
console.log(sum); // 15
console.log(sub); // -5
console.log(muti); // 50
console.log(divi); // 0.5
console.log(expo); // 9765625
console.log(expo2); // 8

// increment ++ = +1
// Two types of increments
// 1. pre increment  ++
//  isme pahle ++ likhte hai
//   ex - ++c
//  isme pahle increment krte hai uske bad use krte hai
// 2. post increment ++
//  isme bad me ++ likhte hai 
//   ex - c++
//  pahle use krte hai uske bad increment krte hai 
let c = 10;
let d = 10;
console.log(++c);  //  11
console.log(d++);  //  10
console.log(d); // 11

// -- = Decrement -1
// Two types of increments
// 1. pre decrement  --
//  isme pahle -- likhte hai
//   ex - --c
//  isme pahle decrement krte hai uske bad use krte hai
// 2. post increment --
//  isme bad me -- likhte hai 
//   ex - c--
//  pahle use krte hai uske bad decrement krte hai


let e = 10;
let f = 10;
console.log(--e);  //  9
console.log(f--);  //  10
console.log(f); // 9

let x = 1; 
let y = x++ - --x + ++x - x--; 
//   x = 1
        // 1 - 1 + 2 - 2 = 0
console.log(y); 
console.log(x); 
// y aur x ka final output kya hoga?
// y  = 0
//  x = 1


let p = 2; 
let q = ++p * p++; 
     // 3*3
//      p = 4
console.log(q); 
console.log(p);


let r = 10; 
let s = --r / r--; 
     // 9 / 9 = 1
// r = 8
console.log(r);  // 8
console.log(s); // 1


let j = 3; 
let k = j++ - --j + j++ - j--; 

console.log(j);  // 3
console.log(k); // -1

// Assignment
//  = 
 let g = 5;
//  g == 5
 g = 10; 
//  x + y = 10
//  +=
     g *= 5
//   g =  g*5
  console.log(g)
//  -=
//  *=
//  /=
//  **=
// Comparison
// == 
// ===
// > =  grater than
// < =  less then 
// >= =  grater than equal
// <= =  less than equal

let ravi = 21
let alok = 22

console.log(alok<ravi)


// Logical

// and aur
// or athva
// not nahi

// ternary
// ~