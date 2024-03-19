const frase = "A melhor linguagem é";
const palavra = "JavaScript";

const frasefinal = frase + " " + palavra;

// console.log(frasefinal);

const frases = frase.concat(" sempre " + palavra);

// console.log(frases);

const fruta = "Banana";
const listaFrutas = "Melancia, Banana, Laranja";

listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas); // false

// console.log(listaFrutas.includes(fruta, 14));

// console.log(fruta.startsWith("Ba"));
// console.log(fruta.endsWith("Ba"));

const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";

// console.log(transacao1.slice(0, 3)); // Dep
// console.log(transacao2.slice(0, 3)); // Dep
// console.log(transacao3.slice(0, 3)); // Tax

// console.log(transacao1.slice(12)); // cliente
// console.log(transacao1.slice(-4)); // ente
// console.log(transacao1.slice(3, 6)); // ósi

// console.log(fruta.indexOf("B"));
// console.log(fruta.lastIndexOf("na"));

// const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

// listaPrecos.forEach((preco) => {
//   console.log(preco.padStart(10, '.'));
// })

// console.log(listaPrecos[0].padStart(10, '.')); // .....R$ 99
// console.log(listaPrecos[0].padEnd(10, '.'));   // R$ 99.....

const listaPrecos = ["R$ 99,00", "R$ 199,00", "R$ 1299,00"];

listaPrecos.forEach((item) => {
  // console.log(item.padStart(20,'.'));
});

const repetir = "Tá";

// console.log(repetir.repeat(10), 'e tá');

let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";

listaItens = listaItens.replace(/[ ]+/g, ", ");

// console.log(listaItens)

const arrayLista = listaItens.split(", ");

console.log(arrayLista);
