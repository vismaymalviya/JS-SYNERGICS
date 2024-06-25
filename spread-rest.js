//With spread syntax we can clone, update, and merge objects in an immutable way. The immutability helps reduce any accidental or unintentional changes to the original (Source) object.

const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}

const clone = {...user} //clone the original user object
console.log(clone)

const addSalary = {...user, salary:123456}; //add a new property as salary
console.log(addSalary);

const updateAge = {...user, age: 45}; //update the age to 45
console.log(updateAge);

const updatednum = { //add a new property called number
    ...user, 
    department: {...user.department, 'number': 7}
};

console.log(updatednum);

const user1 = { //spread ccan even merge two objects
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}

const department1 = {
    'id': '001',
    'Shift': 'Morning'
}

const details = {...user1, ...department1};
console.log(details);


const user2 = { //In the case of objects, the rest parameter is mostly used with destructuring syntax to consolidate the remaining properties in a new object you're working with.
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}

const { age, ...rest} = user2;
console.log(age, rest);