function onePlusAvg (x,y){
    return 1 + (x+y) / 2
}

let a = 1;
let b = 2;
let c = 3;

console.log("one plus average of a and b is ", onePlusAvg(a,b))
console.log("one plus average of b and c is ", onePlusAvg(b,c))
console.log("one plus average of a and c is ", onePlusAvg(a,c))

const somesum = (p,q) => {
    return p + q
}

console.log("the sum of p and q is ", somesum(1,11))