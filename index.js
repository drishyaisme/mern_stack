// let userName = "Sunil Bhujel";
// // userName = 'drishya'

// const age = 90;
// const islogin = true;
// const isregister = false;
// let image = null;

// // console.log(typeof(userName));

// const person = {
//     name: ' Sunil ',
//     age: 30
// };

// const number = [22,34,55, 77, 99]

// function addSome(){
//     console.log('hello world');
// }

// const some = () => {
//     console.log('1');
// }

// some();
// addSome();

// let a = 90;
// const b = 100;
// a += 100;

// console.log(a);

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);

// const x = 5;
// const y = 6;

// console.log(x>y || x<y || x==y);
// console.log(x<y && x===5 && x!==y);

// let isTrue = x>y ? 'true' : 'false';
// console.log(isTrue);

// let age = 19;
// if(age < 20){
//     console.log('Junior ticket $10');
// }
// else if (age > 20 && age < 50){
//     console.log('Regular ticket $20');
// } else {
//     console.log('Senoir ticket $15');
// }

// let i = 0;
// while(i< 15){
//     i++;
//     console.log(i)
// }


// let m = 'ram'
// for (let i = 1; i<=20; i++){
//   if (i % 2 == 0){
//     console.log('Even number: ${i}');
//   } else {
//     console.log('Odd number: ${i}');
//   }
// }

// Exercise: fizz buzz

// Write a program that implements the "fizz buzz" algorithm, defined as follows:

// for i from 1 to 15
//     if i is divisible by 3 and 5
//         print "fizz buzz"
//     otherwise if i is divisible by 3
//         print "fizz"
//     otherwise if i is divisible by 5
//         print "buzz"
//     otherwise


// const user = 'Sunil';
// const greetType = 'hello';
// console.log(user, greetType);


// function greet() {
//     console.log("Hello World!")
// }
// greet();


// const greet = () => {
//     console.log("Sunil Bhujel");
// }
// greet();

// const greet = (name, age, greetType) => {
//     console.log(`${name} ${greetType} ${age}`);
// }
// greet('Sunil', 90, 'hello')



// setTimeout = (() => {
//     console.log("Hello world!");

// }, 3);


// setInterval(() => {
//     const date = new Date();
//     console.log(`${date.getHours()} ${date.getMinutes()} ${date,getSeconds()}`);
// }, 1000)


// let total = 0;
// const numbers = [22, 55, 77, 99];
// numbers.forEach((n) => {
//     total = total + n;
// });
// console.log(total);


// numbers.push(90);
// numbers.pop();
// var num = numbers.slice(1, 3);
// console.log(num);


// const data = [
//     {
//       "userId": 1,
//       "id": 1,
//       "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//       "gender": "male"
//     },
//     {
//       "userId": 1,
//       "id": 2,
//       "title": "qui est esse",
//       "gender": "male"
//     },
//     {
//       "userId": 1,
//       "id": 3,
//       "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//       "gender": "female"
//     }
//   ];

//   const newData = data.filter((m) => {
//     return m.gender = 'male';
//   });
//   console.log(newData);


//   const newData1 = data.filter((m) => {
//     return m.id == 1;
//   });
//   console.log(newData1);


// const dataMap = data.map((d) => {
//     return d.title;

// });
// console.log(dataMap);
// console.log(newNum);


//   const numbers = [22, 55, 77, 99, 100];

//   const newNum = numbers.map((n) => {
//     return n * 2;
//   });
//   const sumOf = numbers.reduce((p, n) => {
//     // 22 55
//     // 77 77
//     // 154 99
//     return p + n;
//   });
//   console.log(sumOf);


const person = {
    name: 'sunil',
    age: 29,
};

const {name, age} = person;
console.log(age);
const dataArray = ['hari', 'shyam'];
const [mi, to] =  dataArray;
console.log(mi);