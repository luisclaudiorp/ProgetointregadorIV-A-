// Variavel criada para identificar o primeiro slide
var sIndex = 1;

// Chama a função para iniciar no primeiro item do slide
mostraDiv(sIndex);

// Função atribuida ao botao de troca de slides
function trocaDiv(n) {
  mostraDiv(sIndex += n);
}

// Função que pega o numero do slide (n) e faz a troca de um por outro toda vez que 
// o botao de troca é acionado.
function mostraDiv(n) {
  //definindo variavel i
  var i
  //variavel x é atribuida ao elemento com a classe "slides"
  var x = document.getElementsByClassName("slides")
  //se a variavel n for maior que o comprimento de x a variavel sIndex vai ser atribuida a 1
  if (n > x.length) { sIndex = 1 }
  //se a variavel n for menor que 1 a variavel sIndex vai ser tribuida ao comprimento da variavel x
  if (n < 1) { sIndex = x.length }
  //utilizando o laço for para aumentar o valor do comprimento de x e mostrar 
  //a proxima imagem dentro da div.
  for (i = 0; i < x.length; i++) { x[i].style.display = "none" }
  x[sIndex - 1].style.display = "block";
}