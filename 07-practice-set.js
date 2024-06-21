//age lies between 10 to 20 or not using logical operator
let age = prompt("what is your age")
if (age>10 && age<20){
    console.log("Your age lies between 10 and 20")
}
else{
    console.log("Your age dont lie between 10 - 20")
}

//switch case statements
let age2 =prompt("what is your age")
switch(age2){
    case '12': //this will match the input of 12
        console.log("your age is 12") 
        break //this will break the order and exit the whole switch statement without printng the next followed cases
    case '13':
        console.log("your age is 13")
        break
    case '14':
        console.log("your age is 14")
        break
    case '15':
        console.log("your age is 15")
        break
    case '16':
        console.log("your age is 16")
        break
    default:
        console.log("your age is not the special age")
}

//if number is divisible by 2 and 3
let num1 = prompt("What is your number?")
num1 = Number.parseInt(num1)
if(num1%2==0 && num1%3==0){
    console.log("number is divisible by 2 and 3")
}
else{
    console.log("number is not divisible by 2 and 3")
}

//if number is divisble by 2 or 3
let num2 = prompt("What is your number?")
num2 = Number.parseInt(num2)
if(num2%=0 || num1%3==0){
    console.log("number is divisble by 2 or 3")
}
else{
    console.log("number is neither divible by 2 nor 3")
}

//ternary operator
let ageis = 19
let finalage = ageis > 18 ? "you can drive" : "you cannot drive"
console.log(finalage)