<<<<<<< HEAD
// Adicione a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll(".menu a");
console.log(itensMenu);

itensMenu.forEach((item) => {
  item.classList.add("ativo");
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
  item.classList.remove("ativo");
});

itensMenu[0].classList.add("ativo");
// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll("img");

imgs.forEach((img) => {
  const possuiAtributo = img.hasAttribute("alt");
  console.log(img, possuiAtributo);
});

// Modifique o href do link externo no menu

const link = document.querySelector('a[href^="http"]');

link.setAttribute('href','http://www.google.com.br/');

=======
// Adicione a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll(".menu a");
console.log(itensMenu);

itensMenu.forEach((item) => {
  item.classList.add("ativo");
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
  item.classList.remove("ativo");
});

itensMenu[0].classList.add("ativo");
// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll("img");

imgs.forEach((img) => {
  const possuiAtributo = img.hasAttribute("alt");
  console.log(img, possuiAtributo);
});

// Modifique o href do link externo no menu

const link = document.querySelector('a[href^="http"]');

link.setAttribute('href','http://www.google.com.br/');

>>>>>>> 7eae2085d0a27874c835ee9438c8ff0e3c5642cc
console.log(link);