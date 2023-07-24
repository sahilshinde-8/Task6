const c = 7
console.log(c)
var a
console.log(a)
a = "Sahil"
console.log(a)
let b = "shah"

console.log(b)
{
    let b = "xyz"
    console.log(b)
    var a = "abc"
    console.log(a)
    const c = 5
    console.log(c)
}
console.log(a)
console.log(b)

console.log(a, typeof a)
let d = false
console.log(d, typeof d)
let e = null
console.log(e ,typeof(e))
console.log(typeof(null))

let f = [5, "Sahil", false, null, undefined]
//{
//let a = [1, 2, 3, 4, 5]
//let b = [1, 2, 3, 4, 5]
//console.log(a[0])
//console.log(b[0])
//console.log(a == b) //giving false even when values are same as they both are pointing to different memory locations
//a = b
//console.log(a == b)
//a[0] = 100
//console.log[a[0]]
//console.log(b[0]);
//}

{
const a = [1, 2, 3, 4]
a[0] = 5 //Wont give an error as we are only changing the value of the memory where a is pointing
//ERROR a = b  In this case we are changing the pointer of (a to b)
}

let addition = () => {
        console.log("addition")
}

let sub = () => {
    console.log("substration")
}

const randomfxn = (param) => {
//const randomfxn = (param, num1, num2) => {
   param()
   //return param(num1, num2)
}

randomfxn(sub)
randomfxn(addition)
//randomfxn(addition, 10, 20)


function fxn(num1, num2){
    if(typeof(num1)!= typeof(num2)){
        return["ERROR", undefined]
    }
    else{
        return["null", num1 + num2]
    }
}
let [message, x] = fxn("yash", 5)
if(message == null){
    console.log("ERROR")
    //return ["unvalid datatype"]
}
else{
    //return["Valid datatype"]
    console.log("Success")
}

// let add = (num1, num2) => {
//     return num1 + num2
// }
// let substraction = (num1, num2) =>{
// return num1 - num2

// }
// let functionGenerator = (functionName) => {
//     switch(functionName){
//         case "add" : return["", add(1, 7)]
//         case "substraction" : return["", substraction(10, 7)]
//         default : return["Invalid", null]
//         }
       
// }

// let [m, abc] = functionGenerator("add")

// let[n, xyz] = functionGenerator("substraction")

// console.log(abc)
// console.log(xyz)



let add = (num1, num2) => {
    console.log( num1 + num2)
}
let substraction = (num1, num2) =>{
console.log(num1 - num2)

}
let functionGenerator = (functionName) => {
    switch(functionName){
        case "add" : return["", add]
        case "substraction" : return["", substraction]
        default : return["Invalid", null]
        }
       
}

let [m, abc] = functionGenerator("add")
abc(1, 7)
let[n, xyz] = functionGenerator("substraction")
xyz(7,3)

