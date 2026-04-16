const score = 400
// console.log(score);

//anothger method to declare number

const balance = new Number(100) //specifically defines that itnis a number
// console.log(balance);           //if seen in console also shows its methods

// console.log(balance.toString().length); //converts to string to we can also use methods of string like length
// console.log(balance.toFixed(2));

const Number1 = 23.8966
const Number2 = 123.8966
const Number3 = 1123.8966
// console.log(Number1.toPrecision(3));
// console.log(Number2.toPrecision(3));
// console.log(Number2.toPrecision(4));
// console.log(Number3.toPrecision(3));

const hundreds = 10000000
// console.log(hundreds.toLocaleString()); // comma laga deta h, defalut us standard ke hisab se lagata h
// console.log(hundreds.toLocaleString('en-IN')); //converts to indian stamdard

//++++++++++++++++++++++++++++++++++++++++++++++++++
// console.log(Math); //you can see all the properties and functions of it in console
// console.log(Math.abs(-4)) // only converts negative to positive
// console.log(Math.round(4.3)) //rounds of decimal value
// console.log(Math.ceil(4.2)) // rounds of to upper value
// console.log(Math.floor(4.2)); //rounds of to lowerbound
// console.log(Math.min(2.6,4,1));
// console.log(Math.max(2.8,4,5));

//most used
// console.log(Math.random()); //gives any value bet 0 and 1 
// console.log(Math.random()*10) //gives value bet 0 ad 10 but can also ive 0 so
// console.log((Math.random()*10)+1) //this will atleast give 1 ot 0
// //if want to round of the no
// console.log(Math.round(Math.random()*10)+1)

//if want a no between any two partivular nums
const min =10
const max= 20
console.log(Math.floor(Math.random()*(max-min))+1)
// iif want atleast min 10
console.log(Math.floor(Math.random()*(max-min))+min)