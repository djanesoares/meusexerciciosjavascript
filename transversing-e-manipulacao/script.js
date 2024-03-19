// const h1 = document.querySelector("h1");

// h1.innerHTML;

// const listaAnimais = document.querySelector(".animais-lista");
// const animaisDescricao = document.querySelector(".animais-descricao");

// console.log(listaAnimais.innerHTML);
// console.log(animaisDescricao.innerText);
// console.log(animaisDescricao.innerHTML);

// console.log(h1.innerHTML);

// console.log(h1.outerHTML);

// h1.innerHTML = "<p>Novo Título</p>";

// h1.outerHTML = "<p>Novo Título</p>";

// const lista = document.querySelector(".animais-lista");

// console.log(lista.parentElement);
// console.log(lista.nextElementSibling);
// console.log(lista.previousElementSibling);

// console.log(lista.children);

// console.log(lista.children[0]);

// console.log(lista.children[lista.children.length - 1]);

// console.log(lista.children[--lista.children.length]);

// console.log(lista.querySelector("li:last-child"));

// console.log(lista.childNodes);

// console.log(lista.previousSibling);

// const lista = document.querySelector(".animais-lista");

// const contato = document.querySelector(".contato");

// const titulo = contato.querySelector(".titulo");

// const animais = document.querySelector(".animais");

// const mapa = document.querySelector(".mapa");

// console.log(lista);
// console.log(contato);
// console.log(titulo);
// console.log(animais);
// console.log(mapa);

// lista.appendChild(titulo);

// animais.appendChild(titulo);

// contato.insertBefore(animais, titulo);

// contato.removeChild(titulo);

// contato.insertBefore(animais,mapa);

// contato.replaceChild(lista, titulo);

// const novoh1 = document.createElement("h1");

// novoh1.innerText= 'Novo Título';
// novoh1.classList.add('titulo');

// mapa.appendChild(novoh1);
// console.log(novoh1);

const h1 = document.querySelector("h1");
const faq = document.querySelector(".faq");

const cloneH1 = h1.cloneNode(true);


cloneH1.classList.add('azul');

faq.appendChild(cloneH1);
