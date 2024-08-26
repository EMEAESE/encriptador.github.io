const TextArea = document.querySelector(".Text-Area");
const TextArea2 = document.querySelector(".Text-Area2");
alert("¡bienvenido! no ingreses letras mayusculas y acentos");
// variables y función

//boton encriptar
function Btnenc(){
    const textoEncriptado = encriptar(TextArea.value);
    TextArea2.value = textoEncriptado;
    TextArea.value = "";
    TextArea2.style.backgroundImage = "none"
}
//funcion encriptar
function encriptar(stringEncriptado){
    let Mcodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();
    
    for(let i = 0; i < Mcodigo.length; i++){
        stringEncriptado = stringEncriptado.replaceAll(Mcodigo[i][0], Mcodigo[i][1]);
    }
    return stringEncriptado;
}
//funcion desencriptar
function desencriptar(stringDesencriptado) {
    let Mcodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();
    
    for (let i = Mcodigo.length - 1; i >= 0; i--) {
        stringDesencriptado = stringDesencriptado.replaceAll(Mcodigo[i][1], Mcodigo[i][0]);
    }
    
    return stringDesencriptado;
}
//desencriptar boton
function BtnDesc(){
    const textoDesencriptado = desencriptar(TextArea.value);
    TextArea2.value = textoDesencriptado;
    TextArea.value = "";
}

// Función para copiar el texto 
function copiarTexto() {
    
    TextArea2.select();
    TextArea2.setSelectionRange(0, 99999);

    // Copia el texto 
    document.execCommand("copy");

   
    alert("Texto copiado al portapapeles");
}