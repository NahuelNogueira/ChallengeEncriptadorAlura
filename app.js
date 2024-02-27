const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const munieco = document.querySelector(".contenedormunieco");
const contenedor = document.querySelector(".contenedor-parrafo");
const resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".cajatexto")
    return cajatexto.value
}

function ocultarAdelante(){
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensajeEncriptado){
    let matrizTexto = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"],]
    mensajeEncriptado = mensajeEncriptado.toLowerCase()

    for(let i = 0; i < matrizTexto.length; i++){
        if(mensajeEncriptado.includes(matrizTexto[i][0])){
            mensajeEncriptado = mensajeEncriptado.replaceAll(matrizTexto[i][0], matrizTexto[i][1])
        }
    }
    return mensajeEncriptado;
}

function desencriptarTexto(mensajeDesencriptado){
    let matrizTexto = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"],]
    mensajeDesencriptado = mensajeDesencriptado.toLowerCase()

    for(let i = 0; i < matrizTexto.length; i++){
        if(mensajeDesencriptado.includes(matrizTexto[i][1])){
            mensajeDesencriptado = mensajeDesencriptado.replaceAll(matrizTexto[i][1], matrizTexto[i][0])
        }
    }
    return mensajeDesencriptado;

}

const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
});