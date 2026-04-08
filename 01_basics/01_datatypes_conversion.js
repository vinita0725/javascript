//CONVERSION TO NUMBER
let score = 33

console.log(typeof score);

let age= "18"
console.log(typeof age)

let marks= "33abc"
console.log(typeof marks)


//convert string to number 
let valueInNumber= Number(age) //Datatypes should be written in capital letter 
console.log(valueInNumber)

let newMarks= Number(marks) //sometimes it gives it datatype as number to we have to be carefull of this
console.log(newMarks)

let string1= null

let newString1= Number(string1)
console.log(newString1)


//CONVERSION TO BOOLEAN
let isLoggedIn ="vini" //undefined //null //1

let toBoolean= Boolean(isLoggedIn)
console.log(toBoolean)

//COVERSION TO STRINGS
let number1=undefined//null //false//true //33

let stringNumber= String(number1)
console.log(stringNumber)
console.log(typeof stringNumber)
