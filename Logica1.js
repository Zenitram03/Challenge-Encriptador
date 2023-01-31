/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function incriptar() {
  let entrada = String(document.getElementById("texto").value);

  let vocales = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };
  entrada = entrada.replaceAll(/a|e|i|o|u/g, function (matched) {
    return vocales[matched];
  });
  document.getElementById("Resultado").innerHTML = entrada;
};



function desecriptar() {
  let entrada = String(document.getElementById("texto").value);
  let vocales = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };
  entrada = entrada.replace(/ai|enter|imes|ober|ufat/g, function (matched) {
    return vocales[matched];
  });
  document.getElementById("Resultado").innerHTML = entrada;
};

function copiarTexto(){
  var contenido = document.getElementById('Resultado');
  var mensaje = document.getElementById('mensaje-copiado');
  contenido.select();
  var  accion =document.execCommand('copy');

  if(accion) mensaje.innerHTML='Mensaje copiado!';
};


function mostrar(valor) {
  document.getElementById("Resultado").innerHTML = valor;
};
