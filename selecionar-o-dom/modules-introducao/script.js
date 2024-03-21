<<<<<<< HEAD
const animais = document.getElementById("animais");

console.log(animais);

const gridSection = document.getElementsByClassName("grid-section");

console.log(gridSection[2]);

// seletor

const primeiraLi = document.querySelector("li");

console.log(primeiraLi);

const primeiraUl = document.querySelector("ul");

console.log(primeiraUl);

// const linkInterno = document.querySelector('[href^="#"]');

// console.log(linkInterno.href);

// const animaisImg = document.querySelectorAll(".animais img");

// console.log(animaisImg[0]);

const gridSectionHTML = document.getElementsByClassName('grid-section')





const gridSectionNode = document.querySelectorAll('.grid-section');




primeiraUl.classList.add('grid-section')

console.log(gridSectionHTML[1]);
console.log(gridSectionNode[0]);

gridSectionNode.forEach(function(item,index){
  console.log(index,item)
});


const arrayGrid = Array.from(gridSectionHTML);


arrayGrid.forEach(function(item,index){
  console.log(item,index);
=======
const animais = document.getElementById("animais");

console.log(animais);

const gridSection = document.getElementsByClassName("grid-section");

console.log(gridSection[2]);

// seletor

const primeiraLi = document.querySelector("li");

console.log(primeiraLi);

const primeiraUl = document.querySelector("ul");

console.log(primeiraUl);

// const linkInterno = document.querySelector('[href^="#"]');

// console.log(linkInterno.href);

// const animaisImg = document.querySelectorAll(".animais img");

// console.log(animaisImg[0]);

const gridSectionHTML = document.getElementsByClassName('grid-section')





const gridSectionNode = document.querySelectorAll('.grid-section');




primeiraUl.classList.add('grid-section')

console.log(gridSectionHTML[1]);
console.log(gridSectionNode[0]);

gridSectionNode.forEach(function(item,index){
  console.log(index,item)
});


const arrayGrid = Array.from(gridSectionHTML);


arrayGrid.forEach(function(item,index){
  console.log(item,index);
>>>>>>> 7eae2085d0a27874c835ee9438c8ff0e3c5642cc
});