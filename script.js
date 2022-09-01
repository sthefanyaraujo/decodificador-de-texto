const inputTexto = document.querySelector('#input-texto');
const mensagem = document.querySelector('#mensagem');
const img = document.querySelector("#img");
const btnCopiar = document.querySelector('#copiar')

function btnEncriptar() {
  const textoEncriptado = encriptar(inputTexto.value);
  mensagem.value = textoEncriptado;
  img.style.display = 'none'
  btnCopiar.style.display = 'block'

}

function encriptar(stringEncriptada) {
  let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
  stringEncriptada = stringEncriptada.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++) {
    if(stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
  }
  return stringEncriptada;
}

function btnDesencriptar() {
  const textoDesencriptado = Desencriptar(inputTexto.value);
  mensagem.value = textoDesencriptado;
  img.style.display = "none"
}

function Desencriptar(stringDesencriptada) {
  let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++) {
    if(stringDesencriptada.includes(matrizCodigo[i][0])) {
      stringDesencriptada = stringDesencriptada.replaceAll( matrizCodigo[i][1], matrizCodigo[i][0])
    }
  }
  return stringDesencriptada;
}

function copiar() {
  navigator.clipboard.writeText(mensagem.value)
}