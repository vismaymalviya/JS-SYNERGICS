//ARRAY METHODS - 1

//toString()
let numbers1 = [1, 11, 2, 22, 3, 33]
let numbers2 = numbers1.toString()
console.log(numbers2)
console.log(typeof numbers2)

//join()
let a = numbers1.join("_")
console.log(a)
console.log(typeof a)

let b = numbers1.join(" and ")
console.log(b)
console.log(typeof b)

//pop() popout - removes last element
r = numbers1.pop()
console.log(numbers1, r) //removes an element from the end of array and org array is modified

//push() - adds an element at the end
p = numbers1.push(4)
console.log(numbers1, p) //adds a new element at the end of the array and modifies the org array

//shift() - removes first element
let q = numbers1.shift()
console.log(q, numbers1) //removes first element - start of the array and modifies the original array

//unshift() - adds element at the start
let s = numbers1.shift(0)
console.log(s, numbers1) //adds a new element at the start of the array and modifies the org array