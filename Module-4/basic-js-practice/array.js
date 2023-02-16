var studentsAge = [12, 18, 20, 23, 27, 30];
//var studentsResult = ['A', 'A+', 'B', 'A+', 'A-', 'C'];


/* -----------------------------------------------------------------------------
    find the array length
--------------------------------------------------------------------------------*/ 
var arrayCapacity = studentsAge.length;
// console.log("index of the student whos age was 27 is : ", arrayCapacity);

/* -----------------------------------------------------------------------------
    find the array index
--------------------------------------------------------------------------------*/
var studentsIndex = studentsAge.indexOf(27);  // !!! if age value 27 is not present in the array then it returns -1
// console.log("index of the student whos age was 27 is : ",studentsIndex);

/* -----------------------------------------------------------------------------
    change some specific index value and store it into a variable
--------------------------------------------------------------------------------*/
studentsAge[4] = 13;
var age27ChangeTo = studentsAge[4];
//console.log("studentsAge array index 4 value has been changed to : ", age27ChangeTo);


/* -----------------------------------------------------------------------------
    add a new element at the end of an array
--------------------------------------------------------------------------------*/
studentsAge.push(19);
//console.log("push an new age 19", studentsAge);


/* -----------------------------------------------------------------------------
    remove an element  from the end of an array
--------------------------------------------------------------------------------*/
studentsAge.pop();
//console.log("last element from the studentsAge array is being removed: ", studentsAge);


/* -----------------------------------------------------------------------------
    add a new element at the begining of an array
--------------------------------------------------------------------------------*/
studentsAge.unshift(22);
//console.log("Yaaa, I have added age:22 at the begining of studentsAge Array, See: ", studentsAge);


/* -----------------------------------------------------------------------------
    remove an element  from the begining of an array
--------------------------------------------------------------------------------*/
studentsAge.shift();
//console.log("the first element of the studentsAge Array has been removed, See here: ", studentsAge);

/* -----------------------------------------------------------------------------
    Slice an array
--------------------------------------------------------------------------------*/
let slicedStudentsAge = studentsAge.slice(2,5); //// where 5 means 5 items(0-4) not upto the array index-5
// console.log("the slice is here: ", slicedStudentsAge);
// console.log("the mother array after slicing is here : ", studentsAge);



/* -----------------------------------------------------------------------------
    Delete a number of item from an array
--------------------------------------------------------------------------------*/
studentsAge.splice(0,3); // where 3 means 3 items(0-2) not upto the array index-3
//console.log("3 items are deleted from the array named studentsAge", studentsAge);


/* -----------------------------------------------------------------------------
    Search some value exists into an array
    if exists returns true
    else returns false 
--------------------------------------------------------------------------------*/
let doesTheAgeExists = studentsAge.includes(23);
//console.log("is the value 23 exists into this array? -", doesTheAgeExists);

doesTheAgeExists = studentsAge.includes(27);
//console.log("is the value 23 exists into this array? -", doesTheAgeExists);


/* -----------------------------------------------------------------------------
    Joining two array
    use concat() function which returns a new array joing two array
--------------------------------------------------------------------------------*/
let arrayOne = [10, 20, 30, 40];
let arrayTwo = ['a', 'b', 'c', 'd'];

let newArray = arrayTwo.concat(arrayOne);

console.log("printing the concated array to see the joining result", newArray);
















/* -----------------------------------------------------------------------------
    XXXXXXXXXXXXXXX
--------------------------------------------------------------------------------*/