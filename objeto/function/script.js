// const carro = {
//   marca:'Ford',
//   ano: 2018
// };

// function descricaoCarro(){

//   console.log(this);
//   console.log(this.marca + ' ' + this.ano);
// }

// descricaoCarro();
// descricaoCarro.call();
// descricaoCarro.call(carro);

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }

// const ul = new Dom("ul");

// console.log(ul);

// const li = document.querySelectorAll("li");

// const filtro = Array.prototype.filter.call(li, (item) => {

//   return item.classList.contains("ativo");
// });

// console.log(filtro);

// console.log(li);

const carro = {
  marca: "Ford",
  ano: 2018,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  },
};

carro.acelerar(100, 20);

const honda = {
  marca: "Honda",
};

const acelerarHonda = carro.acelerar.bind(honda);

acelerarHonda(200, 10);
