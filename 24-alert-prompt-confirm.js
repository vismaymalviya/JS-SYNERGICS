//script.js file
alert("Enter the value of your number A") //use to invoke a mini window at the top of the browser with a alert message

let A = prompt("Enter the value of your number A", "369")

A = Number.parseInt(A)

alert("you entered A of type " + (typeof A))

let write = confirm("Do you want to write it to the page")
if (write) {
  document.write(A)
}
else {
  document.write("Please allow me to write")
}