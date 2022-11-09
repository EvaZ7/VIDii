// JavaScript Document
console.log("Howdy!");

var figureOne = document.querySelector("section:first-of-type > button");
var figureOneBody = document.querySelector("section:first-of-type button div:nth-of-type(4)");
var figureOneLegs = document.querySelector("section:first-of-type button div:nth-of-type(6)");
var figureOneFeet = document.querySelector("section:first-of-type button div:nth-of-type(7)");

var legoBrick = document.querySelectorAll("ul li");

var audioBrick = new Audio("../assets/audio/legoclick.mp3");

for(let blok = 0; blok < legoBrick.length; blok++){
    legoBrick[blok].addEventListener('click', ()=>{
        console.log('heeeeyyy :D')
        legoBrick[blok].classList.toggle('change')
        audioBrick.play()
    });
} // jeff made the for loop https://stackoverflow.com/questions/50643302/addeventlistener-on-a-queryselectorall-with-classlist

figureOne.addEventListener("click", function() {
    figureOneBody.classList.toggle("click");
    figureOneLegs.classList.toggle("click");
    figureOneFeet.classList.toggle("click");
}, false)

// legoBrick.addEventListener("click", function() {
//     console.log(this)
//     legoBrick.classList.toggle("click");
//     console.log("worked");
// }, false)