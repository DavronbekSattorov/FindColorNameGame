'use strict'
/*
const show = document.querySelector('.show');
const row1 = document.querySelector('.row1');
const row2 = document.querySelector('.row2');
const row3 = document.querySelector('.row3');
const container = document.querySelector('.container');

let letter = [];
let newDiv;
let divList = [];
let tab = [];
let index;

let check = 0;



console.log(check);


let colors = ['WHITE', 'BLACK', 'RED', 'BLUE','ORANGE','BROWN'];
// random word generate
const randomWord = Math.trunc(Math.random() * colors.length);

let selected = colors[randomWord];
let items = document.querySelectorAll('#list li');

let score = selected.length + 4;
console.log(score);

show.textContent = score;

for(var i=0; i<items.length; i++){
    tab.push(items[i].innerHTML);
}

let choosen = [];

let pressed = function(){
    
    for(var i=0; i<tab.length; i++){
        items[i].addEventListener('click', function(){
            check = 0;
            index = tab.indexOf(this.innerHTML);
            // guess
            if (score != 0){
                for (let i = 0; i < letter.length; i++) { 
                    // If guess is true
                    if (this.innerHTML === letter[i] && choosen.length < letter.length ){
                        choosen.push(this.innerHTML);
                        console.log('they are same');
                        
                        let index = letter.indexOf(letter[i]);
                        divList[index].style.color = 'green';
                        console.log(choosen);
                        if (choosen.length == letter.length){
                            container.classList.remove('end');
                        }
                    }
                    else{
                        //decrease score
                        check = check +1;
                        //console.log('here');
                       
                    }   
                }
            }
            
            
            //decrease score
            if (check === letter.length){
                if (score != 0){
                    score = score -1;
                }
                show.textContent = score;
            }
            
        })
    }
    
}

console.log(choosen);

pressed();




// Create Box function
let createBoxs = function(i)
{
        newDiv = document.createElement("div");
        //newDiv.style.position = 'fixed';
        //newDiv.style.justifyContent = 'center';
        //newDiv.style.alignItems = 'center';
        newDiv.style.backgroundColor = 'bisque';
        newDiv.style.top = 0 + 'px';
        newDiv.style.left = 0 + 'px';
        newDiv.style.width = 50 + 'px';
        newDiv.style.height = 50 + 'px';
        newDiv.style.float = 'left';
        newDiv.style.margin = '10px';
        newDiv.style.borderRadius = '15px';
        newDiv.style.textAlign = 'center';
        newDiv.style.fontSize = '40px';
        newDiv.textContent = selected[i-1];
        newDiv.style.color = 'transparent';
        row1.append(newDiv); 
        
        // push to letter array
        letter.push(selected[i-1]); 
        // push to divList array
        divList.push(newDiv);     
      
}



// Create boxes
for (var i = 1; i < selected.length+1; i++) {
        createBoxs(i);
}    

*/

/* ----------------------------- Used ones ---------------------------
//const buttonLetter = document.querySelectorAll('.btn');
//const ul = document.querySelector('ul');
//const list = document.querySelector('li');
//console.log(ul[8]);
//console.log(list);
const audio = new Audio('buttonClickSound.mp3');


const b = document.querySelector('.b1');
b.addEventListener('click', function() {
    console.log(b.textContent);
    console.log("click");
})


replayButton.addEventListener('click', function(){
    console.log('it is working');
    colorBox.style.opacity = 0;
})

//console.log(buttonLetter[5].textContent);

buttonLetter[0].addEventListener('click', function(){
    console.log("buttonLetter");
})

//console.log(ul[1]);
//console.log(list[5]);

<div class="box">
                 <p class="pelement">${item}</p>
            </div>
*/



/*---------------------- Current project ------------------------*/

//Arrays
const lettersArray = [
    'A','B','C','D','E','F','G','H','I','J',
    'K','L','M','N','O','P','Q','R','S','T',
    'U','V','W','X','Y','Z',' '
];

const colorsName = [
    'white','yellow','blue','red','green','black','brown',
    'azure','ivory','teal','silver','purple','navy blue',
    'pea green','gray','orange','maroon','charcoal','aquamarine',
    'coral','fuchsia','wheat','lime','crimson','khaki','hot pink',
    'magenta','olden','plum','olive','cyan'
];

//Getting elements
const lettersContainer = document.querySelector('.letters');
const colorNameContainer = document.querySelector('.colorNameFind');
const colorBox = document.querySelector('.pelement');
const replayButton = document.querySelector('.replay');
const unOrderedList = document.querySelector('.letterUnOrderedList');
const unOrderedColorName = document.querySelector('.box');
const chanceBox = document.querySelector('.time');
const resultBox = document.querySelector('.result');




const displayLetters = function (letterArray) {
    unOrderedList.innerHTML = '';
    letterArray.forEach(function (item,index){
        const html = `<li>${item}</li>`;
        unOrderedList.insertAdjacentHTML('beforeend', html);
    });
}

displayLetters(lettersArray);



//Random select
const randomFromList = colorsName[Math.floor(Math.random() * colorsName.length)];
const selectedColorList = randomFromList.split('');
console.log(randomFromList);

const displayColorName = function (color){
    unOrderedColorName.innerHTML = '';
    
    selectedColorList.forEach(function (item, index){
        const html = `<li class="colorNameBox"><p class="pelement">${item}</p></li> `;
        unOrderedColorName.insertAdjacentHTML('beforeend', html);
    })
}

displayColorName(randomFromList);


//Chance
var chance;
if(randomFromList.length <= 3) {
    chance = 3;
} else if(randomFromList.length > 3 && randomFromList.length <= 5) {
    chance = 5;
} else if(randomFromList.length > 5) {
    chance = 6;
}
console.log(chance);
chanceBox.textContent = chance;

var trueFalse = false;
var wasPressed = true;
var matches = false;
var checkWin = 0;
//randomFromList.toLowerCase();

const getLetter = function myFunction(pressed) {
    var list = document.getElementsByClassName("box")[0];
    
    for (let i = 0; i < randomFromList.length; i++) { 
        //var list = document.getElementsByClassName("box")[0];
        
        if (pressed.toLowerCase() === list.getElementsByClassName("colorNameBox")[i].textContent){
            console.log("It is same it is!");
            console.log(list.length);
            list.getElementsByClassName("pelement")[i].style.opacity = 1;
            trueFalse = true;
            console.log(trueFalse);
            console.log('It is pressed: ' + pressed);
            matches = true;
            checkWin ++;
        } 
    }
    
    
    console.log(list.getElementsByClassName("colorNameBox")[0].textContent);
   
    
  }

    unOrderedList.onclick = function(e) {
        var e = e || window.event,
            li = e.target || e.srcElement,
            i = unOrderedList.start || 1;
        
        while ( li.previousSibling ) {
            li = li.previousSibling;
            if ( li.nodeType === 1 ) { i += 1; }   
        }
        
        const pressedLetter = lettersArray[i-1];
        console.log(i);
        console.log("Pressed Letter: " + pressedLetter);
        
        
        if (chance !== 0 && checkWin < randomFromList.length + 1) {
            console.log("Win " + checkWin);
            getLetter(pressedLetter);
            if(wasPressed === true) {
                if(matches === true) {
                    const a = document.querySelectorAll('.letterUnOrderedList li')[i-1];
                    a.style.backgroundColor = '#00fbff';
                    //a.style.borderColor = '#eeff00';
                    //a.style.color = '#e6e1dc';
                    a.style.pointerEvents = 'none';
                    matches = false;
                }else {
                    const a = document.querySelectorAll('.letterUnOrderedList li')[i-1];
                    //a.style.backgroundColor = '#FFBEC0';
                    a.style.borderColor = '#e6e1dc';
                    a.style.color = '#e6e1dc';
                    a.style.pointerEvents = 'none';
                }
                
            } 
        
            if (trueFalse === false){
                chance --;
                chanceBox.textContent = chance;
            }else {
                trueFalse = false;
            }


            if (checkWin === randomFromList.length) {

                resultBox.innerHTML = '';
    
                const html = `
                    <h2>Result</h2>
                    <h3> Congratulations</h3>
                    <p class="resultp">You have found the hidden color</p>
                    <p class="colorBox" style="background-color: ${randomFromList};"></p>
    
                `
    
                resultBox.insertAdjacentHTML('beforeend', html);
            }
        
        } else if (chance === 0 && checkWin !== randomFromList.length){
            resultBox.innerHTML = '';

            const html = `
                <h2>Result</h2>
                <h3> You have lost the game </h3>
                <p class="resultp"> Name of the color was --> ${randomFromList}</p>
                <p class="colorBox" style="background-color: ${randomFromList};"></p>

            `
            
            resultBox.insertAdjacentHTML('beforeend', html);
        }
        
    };
    
    function sampleFunction() {
        location.reload(true);
      }
    