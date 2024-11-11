function validarCampos(input) {
    const valor = input.value.trim(); //trim() remove caracteres indesejados (como espaços digitados antes ou depois do texto que realmente importa)
    const tipo = input.type;

    if (tipo === "text" || tipo === "email") {
        // Verificar campos de texto
        if (valor.length < 3) {
            input.style.borderColor = "red";  // Indicar erro visualmente
            alert("Este campo deve ter pelo menos 3 caracteres.");
        } else {
            input.style.borderColor = "green";  // Indicar sucesso visualmente
        }
    }

    if (input.id === "emailContato") {
        // Verificar o campo de e-mail
        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!regexEmail.test(valor)) {
            input.style.borderColor = "red";
            alert("Por favor, insira um e-mail válido.");
        } else {
            input.style.borderColor = "green";
        }
    }
}