// JavaScript Document
console.log("Howdy!");

var figureOne = document.querySelector("section:first-of-type > button");
var figureOneBody = document.querySelector("section:first-of-type button div:nth-of-type(4)");
var figureOneLegs = document.querySelector("section:first-of-type button div:nth-of-type(6)");
var figureOneFeet = document.querySelector("section:first-of-type button div:nth-of-type(7)");

var figureTwo = document.querySelector("section:nth-of-type(2) > button");

var figureThree = document.querySelector("section:nth-of-type(3) > button");

var figureFour = document.querySelector("section:nth-of-type(4) > button");
var main = document.querySelector("main");
var hoed = document.querySelector("section:nth-of-type(4) button>div:first-of-type");

var figureFive = document.querySelector("section:nth-of-type(5) > button");

var legoBrick = document.querySelectorAll("ul li");

var audioBrick = new Audio("./assets/audio/legoclick.mp3");
var audioWizard = new Audio("./assets/audio/sparkle.mp3");
var audioPirate = new Audio("./assets/audio/piratesound.mp3");
var audioYoda = new Audio("./assets/audio/yodalaugh.mp3");
var audioHey = new Audio("./assets/audio/hey.mp3");

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

figureTwo.addEventListener("click", function() {
    audioHey.play();
}, false)

figureThree.addEventListener("click", function() {
    audioPirate.play();
}, false)

figureFour.addEventListener("click", function() {
    main.classList.toggle("click");
    audioWizard.play();
}, false)

figureFour.addEventListener("focus", function() {
    hoed.classList.toggle("click");
}, false)

figureFive.addEventListener("click", function() {
    audioYoda.play();
}, false)