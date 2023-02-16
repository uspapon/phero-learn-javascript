/*----------------------------- 
Option 2: add onclick function
* Important, We will use it 
------------------------------*/
function turnRed(){
    document.body.style.backgroundColor = "red";
}

// option 3: add onclick function
const turnBlueBtn = document.getElementById('turn-blue');
turnBlueBtn.onclick = turnBlue;

function turnBlue(){
    document.body.style.backgroundColor = "blue";
}

// option 3: another way to do option 3

const turnPurpleBtn = document.getElementById('turn-purple');
       turnPurpleBtn.onclick = function turnPurple(){
                document.body.style.backgroundColor = "purple";
       }

// Option 4 : add on click function
const turnPinkBtn = document.getElementById('turn-pink');
turnPinkBtn.addEventListener('click', turnPink);

function turnPink(){
    document.body.style.backgroundColor = "pink";
}

// option 4: another way to do option 4
const turnGreenBtn = document.getElementById('turn-green');
turnGreenBtn.addEventListener('click', function turnGreen(){
    document.body.style.backgroundColor='green';
})

/*----------------------------- 
Option 4 Final Version 
* Important, We will use it 
------------------------------*/
document.getElementById('turn-orange').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})