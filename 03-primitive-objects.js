// primitive data types: NNBBSSU - NULL, NUMBER, BOLLEAN, BIGINT, STRING, SYMBOL, UNDEFINED

let a = null;
let b = 369;
let c = false;
let d = BigInt("567") + BigInt("3")
let e = "Vismay"
let f = Symbol("I am a Symbol")
let g = undefined

console.log(a, b, c, d, e, f, g)

console.log(typeof d)

// objects: non-primitive data types

const item = 
{
    "Harry": true,
    "Shubh": false,
    "Sejal": 56,
    "Rohan": undefined
}
console.log(item["Shubh"], item["Sejal"], item["Harry"]) //lookup //mapping //dictionary