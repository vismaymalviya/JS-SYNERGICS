console.log(console) //print all console objects/methods

console.log("Hello, this is vismay") //simple print the input given in ()

console.error("THIS IS AN ERROR!") //show an error

console.assert(555<55) //true or false assertion

console.clear() //clears the whole console

obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6} //make a table with key value pairs as the columns name
console.table(obj)

console.warn("Hey, please dont drink soda")

console.info("Hello this is an important information")

console.time("Process1")
console.timeEnd("Process1")

console.time("forLoop") //*IMP FRO COMPARSION BETWEEN DIFFERENT LOOPS*
for(let i = 0; i<5; i++){
    console.log(233)
}
console.timeEnd("forLoop")

