//singleton:when we declare object using constructors its a singleton , not when we use literals .
// Objects can be created using constructors and literals
//Constructor method: Object.create

// object literals : const objectname = {}
// object consist of keys and value pair

const mySym = Symbol("key1") //this is a symbol will use it in oject //imp

const jsUser = {
    name: "vini",
    "full name": "vinita singh",
    age: 18,
    [mySym]: "mykey1", //the syntax is little diff for symbol
    location: "indore",
    mail: "vini123@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["monday","saturday"]

}

//accessing objects
// console.log(jsUser.mail) //this is also right but not the best meth cuz obj like full name cannot be accessed by this
// console.log(jsUser["mail"]) // this is the best way
// console.log(jsUser[mySym])  // a lil diff for symbol
// console.log(jsUser["full name"])

//change a value of object
jsUser.mail = "vini@chatgpt.com"

// freeze obj so nobody can change it
Object.freeze(jsUser);
jsUser.mail = "vini@microsoft.com"
console.log(jsUser);

