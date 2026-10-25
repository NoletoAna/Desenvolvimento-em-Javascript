function validarEmail() {
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem");

    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regexEmail.test(email)) {
        mensagem.textContent = "E-mail válido e registrado com sucesso!";
        mensagem.className = "sucesso";
    } else {
        mensagem.textContent = "Formato de e-mail inválido. O e-mail deve conter o nome do usuário, o símbolo '@' e um domínio válido, como usuario@dominio.com";
        mensagem.className = "erro";
    }
}
