//ARITHMETIC OPERATORS
console.log("Arithmetic Operators in JS")
let a = 11;
let b = 13;

console.log("a + b =", a+b)
console.log("a - b =", a-b)
console.log("a / b =", a/b)
console.log("a * b =", a*b)
console.log("a ** b =", a**b) //a^b 
console.log("a % b =", a%b) //will print according to the remainder
console.log("a++ =", a++) //will increment and store but will print added value it in next iteration
console.log("a++ =", a++) //this will print the previous operation
console.log("--b =", --b) //this will do the operation as well print it in this same iteration
console.log("b-- =", a--) //will decrement and store but will print when called next time
console.log(a)
console.log(b)

//ASSIGNMENT OPERATORS
console.log("Assignment Operators in JS")
let c = 5
c += 5 //same as c = c + 5
c -= 5 //same as c = c - 5
c *= 5 //same as c = c * 5
c /= 5 //same as c = c / 5
c %= 5 //same as c = c % 5
c **= 5 //same as c = c ** 5 c^5

//COMPARISON OPERATORS
console.log("Comparison Operators in JS")
let comp1 = 1;
let comp2 = 11;
console.log("comp 1 == comp2 is ",comp1 == comp2) //equal to
console.log("comp 1 != comp2 is ",comp1 != comp2) //not equals to
console.log("comp 1 === comp2 is ",comp1 === comp2) //for same content but different data type: 6 and "6"
console.log("comp 1 !== comp2 is ",comp1 !== comp2) //for same content but different data type: 6 and "6"
console.log("comp 1 < comp2 is ",comp1 < comp2)
console.log("comp 1 > comp2 is ",comp1 > comp2)
console.log("comp 1 >= comp2 is ",comp1 >= comp2)
console.log("comp 1 <= comp2 is ",comp1 <= comp2)

//LOGICAL OPERATORS
console.log("Logical Operators in JS")
let x = 1;
let y = 11;
console.log(x<y && x==1) //answer is true
console.log(x>y || x==1) //one is true so result is true
console.log(!false) //will make false as true and make true as false