// JavaScript Document
console.log("Howdy!");

var figureOne = document.querySelector("section:first-of-type > button");
var figureOneBody = document.querySelector("section:first-of-type button div:nth-of-type(4)");
var figureOneLegs = document.querySelector("section:first-of-type button div:nth-of-type(6)");
var figureOneFeet = document.querySelector("section:first-of-type button div:nth-of-type(7)");

var legoBrick = document.querySelector("ul li");

figureOne.addEventListener("click", function() {
    figureOneBody.classList.toggle("click");
    figureOneLegs.classList.toggle("click");
    figureOneFeet.classList.toggle("click");
}, false)

legoBrick.addEventListener("click", function() {
    legoBrick.classList.toggle("click");
    console.log("worked");
}, false)