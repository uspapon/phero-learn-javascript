for(let i=10; i>=1; i--){
    console.log("10 nums", i);
}


function print(a, b, c){
    return a+2;
}

console.log(print(1, 2, 3));








let str = "Hello, World!";

console.log(str.slice(2, 5)); // "llo"
console.log(str.substring(2, 5)); // "llo"

console.log(str.slice(-12, -9)); // "llo"
console.log(str.substring(-12, -9)); // "Hel"


var std = {
    name: "papon",
    age: 34
}

var keys = Object.keys(std);
console.log(keys);





function compare(a, b) {
    if(a.toString() === b) {
        return true;
    }else{
        return false;
    }


}


const result = compare(15, 15);
console.log("result = ", result);


console.log("123" + 123);


let a = "hi";
let b = "there";

console.log(a+b);


for(let i=5; i<=100; i++){
    console.log(i);
}

let count = 0; 
console.log(parseInt("count"+1));

const pin = Math.pow(4, 0.5)+"spiderman"+"987"+Math.sqrt(9);
console.log(pin);

function generatePin(){
    return Math.floor(Math.random()*90000) + 10000;
}

const pin2 = generatePin();
console.log(pin2);

console.log(!isNaN("1OX"));

const product = 5;
const price = "7";
const subTotal = product * price;
const tax = subTotal/10;
const total = subTotal + tax;

console.log(total);


const category = "pen";
const performer = category + "-teller";
console.log(performer);



