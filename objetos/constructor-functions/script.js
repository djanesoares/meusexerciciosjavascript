// const Dom = {
//   seletor: "li",
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativo() {
//     this.element().classList.add("ativo");
//   },
// };

// Dom.ativo(); // adiciona ativo ao li
// Dom.seletor = 'ul';
// Dom.ativo(); // adiciona ativo ao ul


// transformando em contrutor

function Dom (seletor) {
  
  this.element = function() {
    return document.querySelector(seletor);
  }
  this.ativar = function() {
    this.element().classList.add('ativar');
  }
}

const li = new Dom('li');
const ul = new Dom('ul');


li.ativar();
ul.ativar()

const lastLi = new Dom('li:last-child');

lastLi.ativar();

