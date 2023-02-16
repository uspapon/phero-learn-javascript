/* ----------------------------------------------------
    object declaration and print function examples
-------------------------------------------------------*/

let student = {
    id: 17,
    name : "papon",
    class: "17",
    marks: 99
}

console.log(student.name);

// set a value into an object
student.name = "Salma";
console.log(student);


/* ----------------------------------------------------
    Exploring Object Property
-------------------------------------------------------*/
var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

/* Get property value in 3 ways
when you know the property name
_________________________________ */
// first way
let penCount = shoppingCart.pen;

// a second way to access object value
let penCount2ndWay = shoppingCart['pen'];

// a third way to access object value
let propertyName = 'pen';
let propertyValue = shoppingCart[propertyName];
// to read all the property of an object
let properties = Object.keys(shoppingCart); // returns an array of all the object key/property name

// to read all the property values of an object
let propertyValues = Object.values(shoppingCart); // returns an array which includes all the values of that object property 


/* Set property value in 3 ways
when you know the property name
_________________________________ */
//first way
shoppingCart.pen = 12;

// a second way
shoppingCart['pen'] = 9;

// a third way 
shoppingCart[propertyName] = 5;


/* -------------------------
    Looping through object
----------------------------*/
var shoppingCart2 = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2,
    bottle: 1
}

const keys = Object.keys(shoppingCart2);

// for loop
for(let i=0; i < keys.length; i++ ) {
    const propertyNameOfCart2 = keys[i];
    const propertyValueOfCart2 = shoppingCart2[propertyNameOfCart2];
    //console.log(propertyNameOfCart2, propertyValueOfCart2);
}

// for in loop
for(var myPropertyName in shoppingCart2){
    const value = shoppingCart2[myPropertyName];
    
    //console.log(myPropertyName, value);
}


// for in loop2
let shoppingCart3 = {
    weight: 33,
    hight: 11,
    bmi: 55,
    hit: 31,
    metabolic: 25
}
for(cart3key in shoppingCart3 ){
    value = shoppingCart3[cart3key];

    console.log(cart3key, "has", value);
}




