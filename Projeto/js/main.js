// Variavel criada para identificar o primeiro slide
var sIndex = 1;

// Chama a função para iniciar no primeiro item do slide
mostraDiv(sIndex);

// Função atribuida ao botao de troca de slides
function trocaDiv(n) {
  mostraDiv(sIndex += n);
}

// Função que pega o numero do slide e faz a troca de um por outro toda vez que 
// o botao de troca é acionado.
function mostraDiv(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  if (n > x.length) {sIndex = 1}
  if (n < 1) {sIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[sIndex-1].style.display = "block";  
}