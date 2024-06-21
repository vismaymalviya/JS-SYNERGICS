///////////////////MAP QUESTIONS SOLUTION:////////////////////////
const test = (num) => num * 2

//takes an array of numbers and returns an array with all values doubled.
const myNums7 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const myDoub = myNums7.map(test);
console.log(myDoub); 


//takes an array of numbers and returns an array where each number is squared.
const myNums6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mySqd = myNums6.map(num => num * num);
console.log(mySqd);

//takes an array of strings and returns an array containing the lengths of those strings.
const myArr4 = ["Never", "Have", "I", "Ever"];
const myArrLen = myArr4.map(str => str.length);
console.log(myArrLen);

///////////////////FILTER QUESTIONS SOLUTION:////////////////////////

//takes an array of numbers and returns a new array with only the numbers that are greater than 10
const myArr3 = [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24,26];
const myHigh10 = myArr3.filter(num => num > 10);
console.log(myHigh10)


//Make a filtered list of all the people whose age is greater than 18.
const myArr2 = [{ name: "Angelina Jolie", age: 80 },
                { name: "Eric Jones", age: 2 },
                { name: "Paris Hilton", age: 5 },
                { name: "Kayne West", age: 16 },
                { name: "Bob Ziroll", age: 100 }]
const myAgehigh18 = myArr2.filter(function(element) {
  return element.age >18;
})
console.log(myAgehigh18);

const myNames = myArr2.map(item => console.log(item.name));

//new array that only includes those that are 5 characters or fewer in length
const myArr = ['okay', 'goodbye', 'morning', 'hello', 'no'];
const myLess5 = myArr.filter(word => word.length <= 5);
console.log(myLess5);

//Given an array of numbers, return a new array that only includes the even numbers.
const myNums5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myEven = myNums5.filter(function(num) {
  return num % 2 === 0;
});
console.log(myEven);

//new array that has only the numbers that are 5 or greater.
const myNums4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myAbove5 = myNums4.filter(num => num >= 5);
console.log(myAbove5);

////////////////////REDUCE QUESTIONS SOLUTION://////////////////////

//takes an array of numbers and returns the avergae of all the numbers.
const myNums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myAverage = myNums3.reduce((acc, curr) => acc + curr/10, 0);
console.log(myAverage);

//takes an array of numbers and returns the product of all the numbers.
const myNums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myProduct = myNums2.reduce((acc, curr) => acc * curr, 1);
console.log(myProduct);

//Write a function that takes an array of numbers and returns the sum of all the numbers.
const myNums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myTotal = myNums1.reduce((acc, curr) => {
    acc += curr
    return acc
}, 0);
console.log(myTotal);

//multiple methods in one.
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numAt = myNumbers
.map(num => num * 10)
.map(num => num + 1)
.filter(num => num >= 40)

console.log(numAt);
