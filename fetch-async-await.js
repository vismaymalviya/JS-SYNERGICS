const { default: axios } = require("axios")


const getData = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos')


  // const data = HttpGet('https://jsonplaceholder.typicode.com/todos')

  console.log(response.data)

}

getData()

// // import axios from 'axios';
// const axios = require("axios")
// function axiosTut() {
//       const getData = async () => {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

//         const data = response.data
//         console.log(data)
//         // const data = await response.json();
//         // console.log(data)
//     }

//   // console.log('hello from axios tut')

//     getData()

// }

// axiosTut()

// // axiosTut();

// //axiosTut();


async function runProcess()
{
const response = await fetch('https://jsonplaceholder.typicode.com/todos');
const data = await response.json();
console.log(data)

const onlyUserid = data.map(item => item.userId);
const onlyTitle = data.map(item => item.title);
console.log(onlyUserid);
console.log(onlyTitle);
}
  
runProcess();