let ultimoTextoConvertido = ""

const specialChars = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ àáâãäåçčćèéêëìíîïñòóôõöøßùúûüÿæ]/;
const capitalLetters = /[A-Z]/;

const cifrasParaCriptografar = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
}

const cifrasParaDescriptografar = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
}

function encriptar() {
    let texto = document.querySelector(".text-area").value;

    if(specialChars.test(texto) == true || capitalLetters.test(texto) == true) {
        alert('Apenas letras minúsculas e sem acento.')
        return
    }

    if(texto != '') {
        let novoTexto = texto;

        Object.keys(cifrasParaCriptografar).forEach(function(cifra) {
            novoTexto = novoTexto.replaceAll(cifra, cifrasParaCriptografar[cifra])
        });
        
        ultimoTextoConvertido = novoTexto

        document.querySelector(".retorno-texto p").textContent = novoTexto

        document.querySelector(".retorno-texto").style.display = 'block'
        document.querySelector(".sem-texto").style.display = 'none'
    } else {
        document.querySelector(".retorno-texto").style.display = 'none'
        document.querySelector(".sem-texto").style.display = 'block'
    }
}

function desencriptar() {
    let texto = document.querySelector(".text-area").value;

    if(specialChars.test(texto) == true || capitalLetters.test(texto) == true) {
        alert('Apenas letras minúsculas e sem acento.')
        return
    }

    if(texto != '') {
        let novoTexto = texto;
    
        Object.keys(cifrasParaDescriptografar).forEach(function(cifra) {
            novoTexto = novoTexto.replaceAll(cifra, cifrasParaDescriptografar[cifra])
        });
        
        ultimoTextoConvertido = novoTexto

        document.querySelector(".retorno-texto p").textContent = novoTexto

        document.querySelector(".retorno-texto").style.display = 'block'
        document.querySelector(".sem-texto").style.display = 'none'
    } else {
        document.querySelector(".retorno-texto").style.display = 'none'
        document.querySelector(".sem-texto").style.display = 'block'
    }
}

function copiar() {
    navigator.clipboard.writeText(ultimoTextoConvertido);
    alert("Texto copiado");
}