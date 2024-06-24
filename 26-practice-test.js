//using prompt function take input of age as a value from the user and use alert to tell him if he can drive!
let age = prompt("Enter your age")
age = Number.parseInt(age)

const canDrive = (age) => {
  return age >= 18 ? true : false
}
if (canDrive(age)) {
  alert("yes you can drive")
}
else {
  alert("no you cannot drive")
}

// In Q1 use confirm to ask the user if he wants to see the prompt again
let age2 = prompt("Enter your age")
age2 = Number.parseInt(age2)

let runAgain;
while (runAgain) {
  const canDrive = (age2) => {
    return age2 >= 18 ? true : false
  }
  if (canDrive(age2)) {
    alert("yes you can drive")
  }
  else {
    alert("no you cannot drive")
  }
  runAgain = confirm("Do you want to play again")
}

// In the previous question, use console.error to log the error if the age entered is negative
if (age < 0) {
  console.error("Please enter a valid age");
  break;
}

//change URL to google.com (redirection) if user enters a number greater than 4
let number = prompt("Enter your number")
number = Number.parseInt(number)

if (number > 4) {
  location.href = "https://google.com"
}

//change the background of the page to yellow, red or any other color based on user input through prompt

let color = prompt("Enter the page background color")
document.body.style.background = color
