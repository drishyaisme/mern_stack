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

const greet = (name, age, greetType) => {
    console.log(`${name} ${greetType} ${age}`);
}
greet('Sunil', 90, 'hello')