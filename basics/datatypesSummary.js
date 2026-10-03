// primitive

// 7 types : string , number , boolean , null , undefined , symbol , BigInt

const score  = 100
const scoreValue = 100.3

const isLoggedIn  = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);
const bigNumber = 3557766777899900n

//reference (non premitive)
// array , object , function

const heros = ["shaktiman", "naagraj", "doga"];
 let myObj={
    name : "rabi",
    age : 22,

}

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof  bigNumber)
