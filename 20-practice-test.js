//make an array and take input from user
let arr1 = [1, 11, 2, 22, 33, 4, 44, 3]
let a = prompt["Enter a number"]
a = Number.parseInt(a)
arr1.push(a)
console.log(arr1)

//add number until 0 is added to the array
let arr2 = [1, 2, 23, 45, 67, 90, 42, 11]
let a1;
do {
    let a1 = prompt("Enter a Number")
   a1 = Number.parseInt(a1)
   arr2.push(a1)
} while (a1!=0);
console.log(arr2)

//filter numbers from array
let arr3 = [1, 2, 23, 45, 67, 90, 42, 11, 10, 60, 30]
let divsible = arr3.filter((x)=> {
    return x%10==0
})
console.log(divsible)

//array of square of given numbers
let arr4 = [1, 2, 23, 45, 67, 90, 42, 11, 45, 70, 88]
let squared = arr4.map((x)=> {
    return x * x
})
console.log(squared)

//use reduce to calculate factorial
let arr5 = [1, 2, 23, 45, 67, 90, 42, 11, 55, 39, 67]
let factorial = arr5.reduce((accu, currv)=> {
    return accu * currv
})
console.log(arr5)