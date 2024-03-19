// const pessoa = new Object({
//   nome:'Andre'
// });

// console.log(pessoa);

// const carro = {
//   marca: "Marca",
//   roda: 4,

//   acelerar() {
//     return this.marca + " " + "Acelerou";
//   },

//   businar() {
//     return this.marca + " " + "Businou";
//   },
// };

// const honda = Object.create(carro);

// honda.marca = "Honda";

// console.log(honda.acelerar());
// console.log(honda.businar());

// const carro = {
//   roda: 4,

//   init(marca) {
//     this.marca = marca;
//     return this;
//   },
//   acelerar() {
//     return `${this.marca} acelerou as ${this.roda} rodas`;
//   },
//   buzinar() {
//     return this.marca + " " + "Buzinou";
//   },
// };

// const honda = Object.create(carro).init('Honda');

// console.log(honda.acelerar());

// console.log(honda.buzinar());

// const ferrari = Object.create(carro).init("Ferrari");

// console.log(ferrari.acelerar());
// console.log(ferrari.buzinar());

// const funcaoAutomovel = {
//   acelerar() {
//     return "acelerou";
//   },

//   buzinar() {
//     return "buzinou";
//   },
// };

// const moto = {
//   rodas: 2,
//   capacete: true,
// };

// const carro = {
//   rodas: 4,
//   portamala: true,
// };

// Object.assign(moto, funcaoAutomovel);
// Object.assign(carro, funcaoAutomovel);

// moto.rodas = 3;

// console.log(moto);

// console.log(carro);

// Object.defineProperties(moto,{
//   rodas:{
//     value: 2,
//     configurable: false, // impede deletar e mudança de valor
//     writable:false // impede mudança de valor
//    enumerable: true // torna enumeravel
//   }
// });

// Object.defineProperties(moto, {
//   rodas: {
//     value: 2,
//   },
// });

// console.log(moto);

// const moto = {
//   capacete: true,
// };

// Object.defineProperties(moto, {
//   rodas: {
//     get() {
//       return this._rodas;
//     },
//     set(valor) {
//       this._rodas = valor * 4 + " Total de rodas";
//     },
//   },
// });

// moto.rodas = 2;
// console.log(moto);

// console.log(Object.getOwnPropertyDescriptors(Array));// Lista com métodos e propriedades e Array
// console.log(Object.getOwnPropertyDescriptors(Array.prototype));// Lista com métodos e propriedades do protótipo de Array
// console.log(Object.getOwnPropertyDescriptors(window));

// console.log(Object.getOwnPropertyDescriptors(moto));

// console.log(Object.getOwnPropertyDescriptor(window, "innerHeight"));// Puxa de uma única propriedade

// Object.keys(Array);
// [] vazia, pois não possui propriedades enumeráveis

// const carro = {
//   marca: "Ford",
//   ano: 2018,
// };

// Object.keys(carro);

// console.log(carro);

// Object.values(carro);

// console.log(carro);

// Object.entries(carro);

// console.log(carro);

// console.log(moto);

const moto = {
  capacete: true,
};

Object.defineProperties(moto, {
  rodas: {
    get() {
      return this._rodas;
    },
    set(valor) {
      this._rodas = valor * 4 + " Total de rodas";
    },
  },
});

moto.rodas = 2;

// console.log(moto);

const innerHeightConfig = Object.getOwnPropertyDescriptor(
  window,
  "innerHeight"
);
// console.log(innerHeightConfig);

// const propriedades = Object.getOwnPropertyNames(moto);

// console.log(propriedades);

// const propriedades = Object.getOwnPropertyNames(Array);

// console.log(propriedades);

// const propriedades = Object.getOwnPropertyNames(Array.prototype);

// console.log(propriedades);

// const frutas = ["banana", "maçã", "mexerica", "uva"];

// console.log(Object.getPrototypeOf(frutas));
// console.log(Object.getPrototypeOf(""));
// console.log(Array.prototype);

// const fruta1 = ["banana", "pêra"];
// const fruta2 = ["banana", "pêra"];

// console.log(Object.is(fruta1,fruta2));

const carro = {
  marca: "Ford",
  ano: 2018,
};

// console.log(carro);

// Object.freeze(carro);

// carro.marca = "Honda";

// console.log(carro);
carro.portas = 4;

// Object.freeze(carro); // congelado não pode fazer nada
// Object.seal(carro); // impede adição e exclusão de novas proprieddes
// Object.preventExtensions(carro); // permite excluir mas não permite adicionar propriedades

// carro.portasmala = 1; // não permitiu adicionar propriedades

// delete carro.marca; // por causa do seal não permite deletar

// console.log(carro);

// console.log(Object.isFrozen());
// console.log(Object.isSealed());
// console.log(Object.isExtensible());

const frutas = ["banana", "uva"];

// console.log(frutas.constructor);

const frase = "Isto é uma String";

// console.log(frase.constructor)

const somar = function (a, b) {
  return a + b;
};

// console.log(frutas.hasOwnProperty("map")); // é falsa poi essa propriedade não é da fruta em si e sim do Array.prototype

// console.log(Array.prototype.hasOwnProperty("map")); // true

// console.log(Array.prototype.propertyIsEnumerable("map")); //false

// console.log(window.propertyIsEnumerable("innerHeight"));

// console.log(Array.prototype.isPrototypeOf(frutas));// true is prototypeOf e prototype de Arrays

console.log(frutas.toString());

console.log(typeof frutas);

console.log(Object.prototype.toString.call(frutas));
console.log(Object.prototype.toString.call(frase));
console.log(Object.prototype.toString.call(somar));
