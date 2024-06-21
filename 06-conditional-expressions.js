let a = prompt("Hello, Let us know your age:") //prompt will always be a string
a = Number.parseInt(a) //converting the prompt string to a number
if(a<0){
    alert("This is a invalid age");
}
else if(a<9){
    alert("you cannot drive at this age");
}
else if(a<18 && a>=9){
    alert("You can drive after 18");
}
else{
    alert("Yes you can drive")
}
console.log("Done")

console.log("You can", (a<18? "not drive" :"drive")) //ternary operator