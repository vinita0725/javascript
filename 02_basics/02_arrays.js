const marvel_heros = ["ironman", "spiderman", "thor"]
const dc_heros = ["superman", "flash", "batman"]

//trying to merge both arrays
// marvel_heros.push(dc_heros) //makes changes and returns the original array
// console.log(marvel_heros) //the problem is it adds the whole array as a sigle elemnt
// console.log(marvel_heros[3][1]) //so its tough to retrive an elemnt from it

//another way
const all_heros = marvel_heros.concat(dc_heros) //makes changes and returns a new array
// console.log(all_heros)

// //best method to join two arrays is "spread"
// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)

//how to oriant al subarray into the array using "flat"
const array2 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_array2 = array2.flat(Infinity) //you can pass any argument for how many depth you want to solve or just give infinity
// console.log(real_array2);

// to convert any datatype to array using "Array.from" method
console.log(Array.isArray("hitesh")) //checking if ita a array
console.log(Array.from("hitesh")) //converting
console.log(Array.from({name: "hitesh"})) //interesting
//you have to properly give which part to convert in array like key or value

//another way to convert a dsatatype to array using "Array.of()"
let score1 = 100
let score2 = 200
 let score3 = 300
 console.log(Array.of(score1,score2,score3));