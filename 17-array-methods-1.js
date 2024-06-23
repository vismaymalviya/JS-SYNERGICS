//ARRAY METHODS - 2

//delete - its an operator *IMP*
let num = [1, 11, 2, 22, 3, 33, 4, 44]
delete num[0] //will not change the original size of the array even after deletion
console.log(num)
console.log(num.length)

//concat - adds two or more array and returns that new array
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let num2 = [11, 22, 33, 44, 55, 66, 77, 88, 99]
let num3 = [11, 12, 13, 14, 15, 16, 17, 18, 19]
let num4 = num1.concat(num2, num3)
console.log(num4) //does not change or modify existing array

//sort - sorts alphabatically - modifies the org array *IMP*
let num5 = [2, 54, 69, 0, 99, 31, 45, 68, 31, 89, 1, 55, 111, 233, 34, 555, 100]
num5.sort() //it will modify the orginal array
console.log(num5)

let compare = (a, b) => { //this is a comapre fucntion 
    return a - b //sort real alphabetically in ascending order and for descending do b - a
}
let num6 = [2, 54, 69, 0, 99, 31, 45, 68, 31, 89, 1, 55, 111, 233, 34, 555, 100]
num6.sort(compare)
console.log(num6)

//reverse - reverses the array
let num7 = num6.reverse()
console.log(num7)

//splice (where to add, how many to delete, what to add) deletes and adds

let num8 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
num8.splice(2, 3, 1021, 1022, 1023) //delete index 0-3 elements and replace them with these
console.log(num8)

//slice - slice out a piece from array and creates a new array
let num9 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let num10 = num9.slice(3) //does not modify a new array (3, 5) -> limit from index 3 to 5
console.log(num10) //slices the elements 1, 2, 3 and after that is printed as a new array