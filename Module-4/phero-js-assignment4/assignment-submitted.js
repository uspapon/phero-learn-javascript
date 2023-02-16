/** -----------------------------------------------
 * Function Description: Let user play a mind game,
   where user provides a number and the function 
   returns some other number following some internal
   rule.

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


/** -------------------------------------------
 * Function Description: Tells if certain text 
   input contains an even or odd number of character
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



/** -------------------------------------------------
 * Function Description: does certain job if an input 
   is Less or Greater than seven
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


/** -------------------------------------------
 * Function Description: counts the number of 
   bad data reading user input provided through
   an array.
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
 



/** -------------------------------------------------
 * Function Description: convert gems into diamond
   following some predefined instruction.
 * Number of parameters: 3 
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

