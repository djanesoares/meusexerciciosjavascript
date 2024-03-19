<<<<<<< HEAD
const menu = document.querySelector(".menu");

menu.classList.add("ativo");
menu.classList.remove("azul");
menu.classList.toggle("azul");
menu.classList.toggle("azul");
menu.classList.toggle("azul");
menu.classList.toggle("azul");

// console.log(menu.classList);

if (menu.classList.contains("azul")) {
  menu.classList.add("possui-azul");
} else {
  menu.classList.add("não-possui-azul");
}

menu.className += " vermelho";

console.log(menu.className);

const animais = document.querySelector(".animais");

console.log(animais.attributes.class);

console.log(animais.attributes[0]);

console.log(animais.attributes.id);

console.log(animais.attributes["data-texto"]);

const img = document.querySelector("img");

const scrImg = img.getAttribute("alt");

console.log(scrImg);

const setImg = img.setAttribute("alt", "É uma Raposa");

const possuiAlt = img.hasAttribute("alt");

console.log(possuiAlt);
=======
const menu = document.querySelector(".menu");

menu.classList.add("ativo");
menu.classList.remove("azul");
menu.classList.toggle("azul");
menu.classList.toggle("azul");
menu.classList.toggle("azul");
menu.classList.toggle("azul");

// console.log(menu.classList);

if (menu.classList.contains("azul")) {
  menu.classList.add("possui-azul");
} else {
  menu.classList.add("não-possui-azul");
}

menu.className += " vermelho";

console.log(menu.className);

const animais = document.querySelector(".animais");

console.log(animais.attributes.class);

console.log(animais.attributes[0]);

console.log(animais.attributes.id);

console.log(animais.attributes["data-texto"]);

const img = document.querySelector("img");

const scrImg = img.getAttribute("alt");

console.log(scrImg);

const setImg = img.setAttribute("alt", "É uma Raposa");

const possuiAlt = img.hasAttribute("alt");

console.log(possuiAlt);
>>>>>>> 7eae2085d0a27874c835ee9438c8ff0e3c5642cc
