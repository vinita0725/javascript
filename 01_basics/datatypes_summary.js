//Primitive datatypes: call by value
// string,number, boolean, null, undefined, symbol, bigint, 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined
let userEmail2; //this is also umndefined
//symbol usage
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);



//Referenxce type / non priomitive datatypes
// array, objects, functions
 const heros = ["shaktiman", "doga", "naagraj"] // array
 //objects :inside curly bracket, key-value pairs can be any datatypes or functions or array or anothger object

 let myObj = {
    name: "vini",
    age: 23,
 }

 //fun ction 
// function(){} :function declare hota h
const myFunction = function (){
    console.log("hello world"); //variableform of fyunction declaration
}

// knowing what is  the type of diff datatypes
//non-primitive me all are object type but function me it returns function actuallly it is objectFunction type
//primitive me it gives object for null

console.log(typeof heros);
console.log(typeof myFunction )