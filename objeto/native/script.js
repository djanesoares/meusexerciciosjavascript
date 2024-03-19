console.log(typeof Array.from);
// Liste 5 objetos nativos
Object;
String;
Array;
Function;
Number;
// Liste 5 objetos do browser
window;
history;
Document;
HTMLAllCollection;
NodeList;
// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

if(typeof document.webkitExitFullscreen !== 'undefined'){
  console.log('existe');
}else{
  console.log('não existe');
}