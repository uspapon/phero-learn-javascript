/** -----------------------------------------------
 * Function Description: Let user play a mind game
 * Function Name: mindGame(); 
 * Number of parameter: 1 
 * Type of Parameter: number
 * return: a number or a validation error
 * 
 --------------------------------------------------*/

function mindGame(number){
    const numberFound = number;

    if(typeof(numberFound) === 'number') {
        const numberInMind = (((numberFound * 3) + 10) /2) - 5 ;
        return numberInMind;
        
    }else{
        
        return "can not assume what is in your mind until you provide a number"
    }

}

/* let input = 50;
const foundInMindIs = mindGame(input); 
console.log(foundInMindIs); */


/** -------------------------------------------
 * Function Description: Tells if certain text 
   input contains an even or odd number of character
 * Function Name: evenOdd(string); 
 * Number of parameter: 1 
 * Type of Parameter: string
 * return: a number or a validation error
 * 
 ----------------------------------------------*/

 function evenOdd(inputString){
    const stringFound = inputString;

    if(typeof(stringFound) === 'string'){

        const streingLength = stringFound.length;
        
        if ((streingLength % 2) === 0){
            return "even";
        }else {
            return "odd";
        }

    }else{
        return "can not identify wheather its length is even or odd until you provide a string"
    }


 }

//  const inputString = 5;
//  const stringLengthFound = evenOdd(inputString);
//  console.log(stringLengthFound);


/** -------------------------------------------------
 * Function Description: does certain job if an input 
   is Less or Greater than seven
 * Function Name: isLGSeven(); 
 * Number of parameter: 1 
 * Type of parameter: number
 * Return: a number or a validation error
 * 
 ----------------------------------------------------*/

function isLGSeven(number){
    const numberFound = number;
    const difference = numberFound - 7; 

   if(typeof(numberFound) === 'number'){

        if(difference < 7){
            return difference;
        }else {
            return numberFound * 2; 
        }

   }else{
        return "Please enter a number";
   }
}

// const inputAnyNumber = 'hello';
// const comparativeResult = isLGSeven(inputAnyNumber);

// console.log(comparativeResult);




/** -------------------------------------------
 * Function Description: counts the number of 
   bad data reading user input
 * Function Name: findingBadData(); 
 * Number of parameter: 1 
 * Type of parameter: Array
 * Return: a number or a validation error
 * 
 ----------------------------------------------*/

function findingBadData(numbers){
   const numberArrayFound = numbers;
   const hasNumbersOnly = !numberArrayFound.some(i => !Number.isInteger(i));
   
   if(hasNumbersOnly){
        let numberOfBadData = 0;
        for(let i=0; i<numberArrayFound.length; i++){
            
            if(numberArrayFound[i] < 0){
                numberOfBadData++;
            }
            
        }

        return numberOfBadData;
    
   }else{ 
        return "please provide an array which contains only numbers, Thank You!";
   }
}

const numberArray = [-4, -9, -5, -33, -55];
const numberOfBadDataFound = findingBadData(numberArray);

console.log(numberOfBadDataFound);


/** -------------------------------------------------
 * Function Description: convert gems into diamond
 * Function Name: gemsToDiamond(); 
 * Number of parameter: 3 
 * Type of parameter: number
 * Return: a number or a validation error
 * 
 ----------------------------------------------------*/
function gemsToDiamond(number1, number2, number3){
    const friend1NumberOfGemFound = number1;
    const friend2NumberOfGemFound = number2;
    const friend3NumberOfGemFound = number3;
    
    if((typeof(friend1NumberOfGemFound) === 'number') && (typeof(friend2NumberOfGemFound) === 'number') && (typeof(friend3NumberOfGemFound) === 'number')){

        const friend1GemPower = 21;
        const friend2GemPower = 32;
        const friend3GemPower = 43;

        const friend1ProducedNoOfDiamond = friend1NumberOfGemFound * friend1GemPower;
        const friend2ProducedNoOfDiamond = friend2NumberOfGemFound * friend2GemPower;
        const friend3ProducedNoOfDiamond = friend3NumberOfGemFound * friend3GemPower;

        const totalNumberOfDiamond = friend1ProducedNoOfDiamond + friend2ProducedNoOfDiamond + friend3ProducedNoOfDiamond;
            
        if(totalNumberOfDiamond > 2000){
            const obtainedNoOfDiamond = totalNumberOfDiamond - 2000;
            return obtainedNoOfDiamond;
        }else {
            return totalNumberOfDiamond;
        }
    
    }else{
        return "Please enter only a number for each gem input"
    }

}

const numberOfGemforCandidate1 = 100;
const numberOfGemforCandidate2 = 5;
const numberOfGemforCandidate3 = 1;

const numberOfGemsToDiamondFound = gemsToDiamond(numberOfGemforCandidate1, numberOfGemforCandidate2, numberOfGemforCandidate3);
//console.log(numberOfGemsToDiamondFound);


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







