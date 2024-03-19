// const carro = {
//   marca: "Marca",
//   preco: 0,
// };
// function Carro() {
//  this.marca = 'Marca';
//  this.preco = 200;

// }

// function Carro(marcaAtribuido, precoAtribuido) {
//   this.marca = marcaAtribuido;
//   this.preco = precoAtribuido;
// }

// const honda = new Carro("Honda", 3000);
// const fiat = new Carro("Fiat", 4000);

// honda.andar = function(){
//   console.log('andou');
// };

function Carro(marca, precoInicial) {
  this.taxa = 1.2;
  const precoFinal = precoInicial * this.taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);
}

const fusca = new Carro('Fusca',2500);
const corolla = new Carro('Corolla',12500);