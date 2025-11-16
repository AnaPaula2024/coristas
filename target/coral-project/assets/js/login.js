document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".login-form");

  form.addEventListener("submit", function (event) {
    const emailInput = document.getElementById("email");
    const senhaInput = document.getElementById("senha");
    let isValid = true;

    // Limpa mensagens de erro anteriores
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((msg) => msg.remove());

    // 1. Validação de Email
    if (emailInput.value.trim() === "") {
      displayError(emailInput, "O campo Email é obrigatório.");
      isValid = false;
    }

    // 2. Validação de Senha
    if (senhaInput.value.trim() === "") {
      displayError(senhaInput, "O campo Senha é obrigatório.");
      isValid = false;
    }

    // Se a validação falhar, impede o envio do formulário
    if (!isValid) {
      event.preventDefault();
    }
  });

  // Função utilitária para exibir a mensagem de erro
  function displayError(inputElement, message) {
    const errorMessage = document.createElement("p");
    errorMessage.className = "error-message";
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "0.85rem";
    errorMessage.style.marginTop = "5px";
    errorMessage.textContent = message;

    // Insere a mensagem de erro após o container do campo
    inputElement.closest(".input-group").appendChild(errorMessage);
  }
});
