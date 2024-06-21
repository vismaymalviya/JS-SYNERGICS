//print marks of student using forloop
let marks = {
    Harry: 90,
    Shubham: 89,
    Monica: 58,
    Charmi: 76
}
for(let i=0; i<Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

for ( let key in marks) {
    console.log("The marks of " + key + " are " + marks[key])
}

//print try again until user print correct number
let cn = 4
let i
while (i!=cn) 
{
    console.log("Try again, because you have entered a wrong number")
i = prompt("Enter the correct number")
}
console.log("You have entered the correct number!")

//function of 5 numbers to calculate the mean
const mean = (a, b, c, d, e) => {
    return(a + b + c + d + e) / 5
}

console.log(mean(1, 2, 3, 4, 5))
