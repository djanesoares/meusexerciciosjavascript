<<<<<<< HEAD
// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInterno = document.querySelectorAll('a[href^="#"]');

// function adicionar(evento){
//   evento.
// }

function handleLink(event) {
  event.preventDefault();

  linksInterno.forEach((link) => {
    link.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
  //  this.classList.add('ativo');
}

linksInterno.forEach((link) => {
  link.addEventListener("click", handleLink);
});

console.log(linksInterno);

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todoselementos = document.querySelectorAll("body *");

function handleElemento(event) {
  // console.log(event.currentTarget);
  event.currentTarget.remove();
}

// todoselementos.forEach((elemento) => {
//   elemento.addEventListener("click", handleElemento);
// });

// console.log(todoselementos);

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleclickT(event){
  console.log(event.key);
  if(event.key==='t'){
    document.documentElement.classList.toggle('textomaior');
  }
}

=======
// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInterno = document.querySelectorAll('a[href^="#"]');

// function adicionar(evento){
//   evento.
// }

function handleLink(event) {
  event.preventDefault();

  linksInterno.forEach((link) => {
    link.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
  //  this.classList.add('ativo');
}

linksInterno.forEach((link) => {
  link.addEventListener("click", handleLink);
});

console.log(linksInterno);

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todoselementos = document.querySelectorAll("body *");

function handleElemento(event) {
  // console.log(event.currentTarget);
  event.currentTarget.remove();
}

// todoselementos.forEach((elemento) => {
//   elemento.addEventListener("click", handleElemento);
// });

// console.log(todoselementos);

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleclickT(event){
  console.log(event.key);
  if(event.key==='t'){
    document.documentElement.classList.toggle('textomaior');
  }
}

>>>>>>> 7eae2085d0a27874c835ee9438c8ff0e3c5642cc
window.addEventListener('keydown',handleclickT)