let a = 29
for(let i=2; i<=a/2 ; i++){
    if(a % i == 0){
        console.log(a, "It is not a Prime No")
    }
    else{
        console.log(a, "It is a Prime No")
    }
}

let counteven = 0
let countodd = 0
let countzero = 0


for(let i=0;  i<20; i++){
if(i % 2 == 0 && i!=0){
    //console.log("It is not a Even No")
    counteven++
}
else if(i % 2 != 0 && i!=0){
    //console.log("IT is a Even NO")
    countodd++
}
else{
    countzero++
}
}
console.log("Even Count ", counteven, " Odd Count ", countodd, " Zero Count " + countzero)



let firstno = 0
let secondno = 1
console.log("Fibonacci Series")
console.log(" ",firstno)
console.log(" ", secondno)
let n = 12
for(let i=2; i<n; i++){
    
    let thirdno = firstno + secondno
    console.log(" ", thirdno)
    firstno = secondno
    secondno = thirdno
}