let score = 100;
    let number = prompt("Guess a number between 1 to 100: ");
let i = 68;
  while(true){
if(number > i) {
  console.log("your number is greater than the correct number")
  score--
}
if(number < i){
  console.log("your number is less than the correct number")
  score--
} 
if(number == i ) {
    console.log("You guessed the correct number");
    console.log("your score is " + score)
    }
    break 
  }