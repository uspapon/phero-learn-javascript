/* ------------------------------------------
    Convert feet to inch
---------------------------------------------*/
function feetToInch(feet){
    const unitConverter = 12;
    const unitFoundInFeet = feet;

    const convertFeetToInch = unitFoundInFeet * 12;
    return convertFeetToInch;
}


let feet = 60;
const resultInInch = feetToInch(feet);

//console.log("60 feet equal to", resultInInch, "inch");


/* ----------------------------------------------------------------------------------------------
    Convert centimeter  to meter
    since meter is greater than centimeter and we are converting a small unit into a bigger unit
    we know 1cm = 1/100 = 0.01 Meter and 100cm makes 1meter. 
--------------------------------------------------------------------------------------------------*/
function centimeterToMeter(centimeter){
    const unitFound = centimeter;
    const unitInCentimeterConvertedToMeter = 1/100;                                                  
    const convertCentimeterToMeter = unitFound * unitInCentimeterConvertedToMeter;

    return convertCentimeterToMeter;

}

let centimeter = 1000;
const resultInMeter = centimeterToMeter(centimeter);

//console.log("given centimeter is equal to ", resultInMeter, 'meter');


/* -----------------------------------------------
    Calculate paper requirements to print 3 books
    where book1 requires 100 papers to print
          book2 requires 200 papers to print
          book3 requires 300 papers to print
--------------------------------------------------*/

function paperRequirements(qtyforBook1, qtyforBook2, qtyforBook3 ){
    const paperUnitReqForBook1 = 100;
    const paperUnitReqForBook2 = 200;
    const paperUnitReqForBook3 = 300;

    const numberOfBook1ToPrint = qtyforBook1;
    const numberOfBook2ToPrint = qtyforBook2;
    const numberOfBook3ToPrint = qtyforBook3;

    const totalNumberOfPaperReqToPrintBook1 = paperUnitReqForBook1 * numberOfBook1ToPrint;
    const totalNumberOfPaperReqToPrintBook2 = paperUnitReqForBook2 * numberOfBook2ToPrint;
    const totalNumberOfPaperReqToPrintBook3 = paperUnitReqForBook3 * numberOfBook3ToPrint;

    //console.log("book1:", totalNumberOfPaperReqToPrintBook1, "book2:", totalNumberOfPaperReqToPrintBook2, "book3:", totalNumberOfPaperReqToPrintBook3);

    const paperReqInTotal = totalNumberOfPaperReqToPrintBook1 + totalNumberOfPaperReqToPrintBook2 + totalNumberOfPaperReqToPrintBook3;

    
    return paperReqInTotal;
}

let qtyforBook1 = 1;
let qtyforBook2 = 1;
let qtyforBook3 = 1;

const totalNumberOfPaperRequirementFor3Books = paperRequirements(qtyforBook1, qtyforBook2, qtyforBook3);
//console.log("Total number of papers which will require to print book1, book2 and book3 are:", totalNumberOfPaperRequirementFor3Books, "pages");

/* ------------------------------------------
    Find out the bigges name from an array
    and declare that name as best friend
---------------------------------------------*/

function bestFriend(names) {

    const namesFound = names;
    let longestName = namesFound[0];


    for(let name of names){
        
        if(name.length > longestName.length){
            longestName = name;
        }       
    }

    return longestName + "to be the best friend";

}

let names = ["maryam", "Zayra", "Alish", "Amatullah", "Inaya", "Rida", "Faysal Abbas", "Umme Salma Papon"];
const bestFriendToBe = bestFriend(names);

//console.log(bestFriendToBe);

/* ----------------------------------------------------------------------------------
    Print the number untill the positive values are found
    if nagetive values found break and print the positive numbers found so far.
-------------------------------------------------------------------------------------*/

function onlyPositive(numbers){
    const numbersFound = numbers;
    let numbersUntilNegative = [];

    for (let number of numbers){
        
        if(number > 0){
            numbersUntilNegative.push(number);
            
        }else {
            break;
        }
    }

    // console.log(numbersUntilNegative);

    return numbersUntilNegative;

}

let numbers = [23, 34, 21, 17, 19, 22, 33, 87, -34, 55, 98, 100];
const positiveNumbersUntilNagetive = onlyPositive(numbers);

console.log("Numbers until negative input found are the following", positiveNumbersUntilNagetive);

