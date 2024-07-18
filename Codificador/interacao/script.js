// Função para criptografar o texto
function criptografar() {
    const inputText = document.getElementById("inputText").value.toUpperCase();
    let outputText = "";

    // Cifra de César com deslocamento de 3 posições
    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);
        
        // Apenas letras maiúsculas A-Z
        if (charCode >= 65 && charCode <= 90) {
            charCode = ((charCode - 65 + 3) % 26) + 65;
        }
        
        outputText += String.fromCharCode(charCode);
    }

    document.getElementById("outputText").value = outputText;
}

// Função para descriptografar o texto
function descriptografar() {
    const inputText = document.getElementById("inputText").value.toUpperCase();
    let outputText = "";

    // Decifra de César com deslocamento de 3 posições
    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);
        
        // Apenas letras maiúsculas A-Z
        if (charCode >= 65 && charCode <= 90) {
            charCode = ((charCode - 65 - 3 + 26) % 26) + 65;
        }
        
        outputText += String.fromCharCode(charCode);
    }

    document.getElementById("outputText").value = outputText;
}

// Função para limpar os campos de texto
function limpar() {
    document.getElementById("inputText").value = "";
    document.getElementById("outputText").value = "";
}