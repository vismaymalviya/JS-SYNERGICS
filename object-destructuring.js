const user1 = {
    name: 'Vismay',
    age: 22,
    address: 'Mumbai',
    state: 'Maharashtra'
}

const { name } = user1;
console.log(name); //to get value of name

const { age, address, salary=123456 } = user1;
console.log(age, address, salary); //to add new property salary and log it down

const { state: permanentState } = user1;
console.log(permanentState); //to change the name of the state property as permanent state


const user2 = { 
    'first_name': 'Alex',
    'last_name': 'Brandos',
}
const { first_name, last_name, full_name=`${first_name} ${last_name}` } = user2; //to generate new name as full_name after combining first and last name 

console.log(full_name);

const user3 = {  //destructuring in nested object
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43,
    'department':{
        'name': 'Sales',
        'Shift': 'Morning',
        'address3': {
            'city': 'Bangalore',
            'street': '7th Residency Rd',
            'zip': 560001
        }
    }
}

const { department } = user3;
console.log(department);

const { department: { address3 } } = user3;
console.log(address3);