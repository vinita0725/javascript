const name = "hitesh"
const repoCount = 503
// string concatenation
// console.log(name + repoCount + " value") 

//string interpolation
console.log(`hello my name is ${name} and my repo count is ${repoCount}`); //this is preferred also we can add methods on the go
console.log(`hello m name is ${name.toUpperCase()} and i have repo count ${repoCount.toFixed(2)}`) //methods used here
console.log(`${name} ${repoCount}`)

//aother method to declare string

const  gameName = new String("hitech-hc-choudhary")
//if we open it in browser it'll show its length and indexvalue as a array but actually it is a stringObject
//it also shows methods used with strings: we need o master them

console.log(gameName[0]);  //we can also acess the element from its index value like array
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLowerCase()); //this doesnt chANGE THE original string cuz its stack
console.log(gameName.charAt(2)); //tells element at this index
console.log(gameName.indexOf("t")); //tells the index value of given element

const newString = gameName.substring(0,4) //cant gve negative values
console.log(newString);

const anotherString = gameName.slice(-8,4) //can give negative values
console.log(anotherString);

const string1 = "   vini   "
console.log(string1);
console.log(string1.trim()); //read about it in mdn doc

const url = "hhtps://htesh.com/hitesh%20choudhary"
console.log(url.replace("%20", "-"))
console.log(url.includes('itesh'));//searches if sting is present
console.log(url.includes('sundar')); 

console.log(gameName.split("-"))// convefrts given string to array and splits on the basis of given atribute