// const carros = ["Ford", "Fiat", "Honda"];

// carros.forEach(function (item, index, array) {
//   console.log(item, index, array);
// });

// carros.forEach((item, index, array) => {
//   console.log(item, index, array);
// });

// carros.forEach((item, index, array)=>{
//   array[index]='teste';

//   console.log(item, index, array);

// });

// carros.forEach((item, index, array)=>{

//   console.log(item.toUpperCase(), index, array);

// });

// const li = document.querySelectorAll("li");

// li.forEach(i => i.classList.add('ativa'));

// li.forEach(function(item) {
//   item.classList.add('ativa');
// });

// const lista = li.forEach((item, index) => {
//   item.classList.add("ativa" + index);
// });
// console.log(lista);

// const novaArray = carros.map((item, index, array) => {
//   console.log(item.toUpperCase(), index, array);
//   return index;
// });

// const novaArray1 = carros.map((item, index, array)=>{
//   return item.toUpperCase();
// });

// console.log(novaArray);
// console.log(novaArray1);

// const numeros = [2, 4, 25, 75, 9, 5];

// const numerosx2 = numeros.map((n) => n * 2);

// console.log(numerosx2);

// const aulas = [10, 25, 30, 5];

// const total1 = aulas.reduce((acumulador, atual) => {
//   return acumulador + atual;
// });

// console.log(total1);

// const aulas2 = [10, 25, 30];

// const reduceAulas = aulas2.reduce((acumulador, item, index, array) => {
//   console.log(acumulador, item, index);
//   return acumulador + item;
// },0);

// const numeros = [10, 25, 60, 5, 35, 10];

// const maiorValor = numeros.reduce((anterior, atual) => {
//   return anterior < atual ? atual : anterior;
// });

// console.log(maiorValor);

// const frutas = ["banana", "pera", "uva"];

// const every = frutas.every((fruta) => {
//   console.log(fruta);
//   return fruta;
// });

// const indexUva = frutas.findIndex((item) => {
//   return item === "uva";
// });

// console.log(indexUva);

const frutas = ["banana", "pera", "uva"];

const buscaUva = frutas.findIndex((fruta) => {
  return fruta === "uva";
});

console.log(buscaUva);

const numeros = [6, 43, 22, 88, 101, 29];
const buscarMaior45 = numeros.find((x) => x > 45);

console.log(buscarMaior45);

const frutas1 = ["", "banana", undefined, "pera", null, "uva"];

const arrayFrutas1 = frutas1.filter((item) => {
  console.log(item);
  return true;
});

console.log(arrayFrutas1);
