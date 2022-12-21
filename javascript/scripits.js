var textInput = document.querySelector("#input-text");
var outInput = document.querySelector("#output");

function criptografar() {
  var texto = textInput.value;

  var resultCripto = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  if (texto === "") {
    alert("Precisa inserir um texto");
  }

  document.getElementById("output").innerHTML =
    '<textearea readonly id="input-text">' +
    resultCripto +
    "</textearea>" +
    '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button';
}

function descriptografar() {
  var texto = textInput.value;

  var resultDescripto = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  if (texto === "") {
    alert("Precisa inserir um texto");
  }

  document.getElementById("output").innerHTML =
    '<textarea readonly id="input-text">' +
    resultDescripto +
    "</textarea>" +
    '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
  var textoCopy = document.getElementById("input-text");

  textoCopy.select();
  document.execCommand("copy");
  alert("Para copiar o Texto, por favor adiquira a versão paga");
}
