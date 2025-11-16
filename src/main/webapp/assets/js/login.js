document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".login-form");
    const togglePassword = document.getElementById('togglePassword');
    const senhaInput = document.getElementById("senha");

    if (togglePassword && senhaInput) {
        togglePassword.addEventListener('click', function() {
            const type = senhaInput.getAttribute('type') === 'password' ? 'text' : 'password';
            senhaInput.setAttribute('type', type);
            
            if (type === 'password') {
                this.src = 'assets/imagens/eye-closed.png';  
                this.alt = 'Mostrar Senha';
            } else {
                this.src = 'assets/imagens/Eye-open.png'; 
                this.alt = 'Esconder Senha';
            }
        });
    }

    form.addEventListener("submit", function (event) {
        const emailInput = document.getElementById("email");
        let isValid = true;

        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach((msg) => msg.remove());

        if (emailInput.value.trim() === "") {
            displayError(emailInput, "O campo Email é obrigatório.");
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
             displayError(emailInput, "Por favor, insira um email válido.");
             isValid = false;
        }

        if (senhaInput.value.trim() === "") {
            displayError(senhaInput, "O campo Senha é obrigatório.");
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    function displayError(inputElement, message) {
        const errorMessage = document.createElement("p");
        errorMessage.className = "error-message";
        errorMessage.style.color = "red";
        errorMessage.style.fontSize = "0.85rem";
        errorMessage.style.marginTop = "5px";
        errorMessage.textContent = message;

        inputElement.closest(".input-group").appendChild(errorMessage);
    }
    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});