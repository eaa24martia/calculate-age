"use strict";


let birthYearInput = prompt("Hvilket år er du født?");

let currentYear = new Date().getFullYear();

let birthYear = parseInt(birthYearInput, 10);

let age = currentYear - birthYear;

console.log(`Du er ${age} år gammel!`);