// Função para validar CNPJ
function validarCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos

    if (cnpj.length !== 14) return false;

    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    
    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != digitos.charAt(0)) return false;

    tamanho += 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }
    
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != digitos.charAt(1)) return false;

    return true;
}

// Função para validar email
function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

// Função para verificar se o texto possui menos de 3 caracteres
function validarTexto(texto) {
    if (texto.length < 3) {
        alert("O texto é inválido. Deve conter pelo menos 3 letras.");
        return false;
    }
    return true;
}

// Função para validar os campos no evento onClick do botão Enviar
function validarFormulario() {
    const cnpj = document.getElementById("cnpj").value;
    const email = document.getElementById("email").value;
    const empresa = document.getElementById("empresa").value;
    const telefone = document.getElementById("telefone").value;

    // Validação CNPJ
    if (!validarCNPJ(cnpj)) {
        alert("CNPJ inválido.");
        return false;
    }

    // Validação Email
    if (!validarEmail(email)) {
        alert("Email inválido.");
        return false;
    }

    // Validação de textos (empresa, telefone)
    if (!validarTexto(empresa) || !validarTexto(telefone)) {
        return false;
    }

    return true;
}

// Eventos onBlur para validação dos campos
document.getElementById("cnpj").onblur = function() {
    if (!validarCNPJ(this.value)) alert("CNPJ inválido.");
};

document.getElementById("email").onblur = function() {
    if (!validarEmail(this.value)) alert("Email inválido.");
};

document.getElementById("empresa").onblur = function() {
    validarTexto(this.value);
};

document.getElementById("telefone").onblur = function() {
    validarTexto(this.value);
};