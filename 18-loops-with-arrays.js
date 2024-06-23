//clasic for loop
let num1 = [1, 3, 2, 6, 5, 9, 8, 7, 4, 10]
for(let i=0; i<num1.length; i++){
   console.log(num1[i])
}

//for each loop
num1.forEach((element)=>{
    console.log(element * element)
})

//array.from
let name1 = "Vismay"
let array1 = Array.from(name1)
console.log(array1)

//for of loop
for (let i of num1){
    console.log(i)
}

//for in loop
for (let i in num1){
    console.log(i)
}