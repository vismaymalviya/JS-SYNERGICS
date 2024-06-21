//for loops
for (let i = 21; i < 31; i++) //will print from 21 to n-1 i.e. 20
{
    console.log(i)
}

//forin loop
let obj = {
    harry: 80,
    shubh: 78,
    sejal: 67,
    naina: 98
}
for (let a in obj)
    {
        console.log("Marks of " + a + " are " + obj [a])
    }

let sum = 0
let n = prompt("Enter your number")
n = Number.parseInt(n)
for (let i = 0; i < n; i++ ){
    sum += i+1
}
console.log("sum of first natural numbers " + n + " natural numbers is " + sum)