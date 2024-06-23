//map()
let arr = [45, 55, 65]
let a = arr.map((value, index, array)=> {
    console.log(value, index, array)
    return value + 5
})
console.log(a) //new array

//filter()
let arr2 = [1, 11, 111, 2, 22, 222, 3, 33, 333]
let a2 = arr2.filter((a)=> {
    return a<10
})
console.log(a2)

//reduce()
let arr3 = [1, 11, 2, 22, 3, 33, 4, 44]
let a3 = arr3.reduce((accu, currv)=>{
    return accu + currv
})
console.log(a3)