<<<<<<< HEAD
// Retorne no console todas as imagens do site
const todasimg = document.querySelectorAll("img");

console.log(todasimg);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const comecarImagem = document.querySelectorAll("img[src^='img/imagem']");

console.log(comecarImagem);

// Selecione todos os links internos (onde o href começa com #)

const comecarLink = document.querySelectorAll("[href^='#']");
console.log(comecarLink);

// Selecione o primeiro h2 dentro de .animais-descricao

const primeiro = document.querySelector(".animais-descricao h2");
console.log(primeiro);

// Selecione o último p do site

const ultimo = document.querySelectorAll("p");

=======
// Retorne no console todas as imagens do site
const todasimg = document.querySelectorAll("img");

console.log(todasimg);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const comecarImagem = document.querySelectorAll("img[src^='img/imagem']");

console.log(comecarImagem);

// Selecione todos os links internos (onde o href começa com #)

const comecarLink = document.querySelectorAll("[href^='#']");
console.log(comecarLink);

// Selecione o primeiro h2 dentro de .animais-descricao

const primeiro = document.querySelector(".animais-descricao h2");
console.log(primeiro);

// Selecione o último p do site

const ultimo = document.querySelectorAll("p");

>>>>>>> 7eae2085d0a27874c835ee9438c8ff0e3c5642cc
console.log(ultimo[--ultimo.length]);