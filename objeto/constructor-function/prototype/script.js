// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
//   this.abracar = function () {
//     return "Abraçou";
//   };
//   this.andar = function () {
//     return "andou pelo objeto";
//   };
// }

// const djane = new Pessoa("Djane", 46);

// Pessoa.prototype.andar = function () {
//   return this.nome + " A pessoa andou";
// };

// Pessoa.prototype.nadar = function () {
//   return this.nome + " A pessoa nandou";
// };

// console.log(Pessoa.prototype);
// console.log(djane.prototype); incorreto

// const pais = "Brasil";
// const cidade = new String("Rio");

// const listaAnimais = ["cachorro", "gato", "cavalo"];

// const lista = document.querySelectorAll("li");

//Transforma em um Array

// const listaArray = Array.prototype.slice.call(lista);

// const listaArray2 = Array.from(lista);

// const propObj = Object.getOwnPropertyNames(Array);

const Carro = {
  marca: "Ford",
  preco: 2000,
  andar() {
    return true;
  },
};
