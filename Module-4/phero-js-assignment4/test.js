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


// console.log(mindGame(5));
// console.log(mindGame(50));
// console.log(mindGame(33));
// console.log(mindGame(-3));
// console.log(mindGame(true));
// console.log(mindGame("this is a string"));


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

//  console.log(evenOdd('Phero'));
// console.log(evenOdd('Batch7'));
// console.log(evenOdd('chatgpt'));
// console.log(evenOdd("this is a string"));
// console.log(evenOdd(-85));
// console.log(evenOdd(123));
// console.log(evenOdd(true));

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

// console.log(isLGSeven(6));
// console.log(isLGSeven(-15));
// console.log(isLGSeven(15));
// console.log(isLGSeven(0));
// console.log(isLGSeven(true));
// console.log(isLGSeven("this is a string"));


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

    if(Array.isArray(numberArrayFound)){
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

    }else {
        return "please provide an array, thank you!";
    }

 }
 
    //  console.log(findingBadData([ 1,2,5 ]));
    //  console.log(findingBadData([ 2, -5, -7, -13 ]));
    //  console.log(findingBadData([ -4, -9, -5, -33, -55 ]));
    //  console.log(findingBadData(555));
    //  console.log(findingBadData(true));
    //  console.log(findingBadData("this is a string"));


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

// console.log(gemsToDiamond(1, 1, 'hi'));
// console.log(gemsToDiamond(1, 1, 1));
// console.log(gemsToDiamond(20, 200, 50));
// console.log(gemsToDiamond(100, 5, 1));
// console.log(gemsToDiamond(true));
// console.log(gemsToDiamond("this is a string"));
// console.log(gemsToDiamond(55));