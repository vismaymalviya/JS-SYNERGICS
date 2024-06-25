//Array destructuring is a unique technique that allows you to neatly extract an array’s value into new variables.

const profile = ['vismay', 'dinesh', 'malviya'];
const [firstname, middelname, lastname] = profile;
console.log(firstname, middelname, lastname)


const [firstName, lastName, website] = ["Oluwatobi", "Sofela", "codesweetly.com"];
console.log(firstName, lastName, website)


const [firstName2, ...otherInfo] = ["Oluwatobi", "Sofela", "codesweetly.com"];
console.log(firstName, otherInfo);