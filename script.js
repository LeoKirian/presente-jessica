// CONFIGURAÇÃO DA PALAVRA-CHAVE (Digite em letras minúsculas)
const KEYWORD_PASSWORD = "cacto"; 

// Variável para contar os erros
let wrongAttempts = 0;

// Data configurada para 04 de Agosto de 2026 no formato Universal
const targetDate = new Date("2026-08-04T00:00:00").getTime();

const timerElement = document.getElementById("countdown-timer");
const unlockBtn = document.getElementById("unlock-btn");
const secretMessage = document.getElementById("secret-message");
const countdownTitle = document.getElementById("countdown-title");

// Lógica de Verificação da Palavra-Chave
const passwordBtn = document.getElementById("password-btn");
const passwordInput = document.getElementById("password-input");
const passwordScreen = document.getElementById("password-screen");
const mainSite = document.getElementById("main-site");
const passwordError = document.getElementById("password-error");
const passwordHint = document.getElementById("password-hint"); // Puxando a dica do HTML

function checkPassword() {
    const enteredText = passwordInput.value.toLowerCase().trim();
    
    if (enteredText === KEYWORD_PASSWORD.toLowerCase().trim()) {
        passwordScreen.classList.add("hidden");
        mainSite.classList.remove("hidden");
        
        // Inicializa o cronômetro imediatamente após o acesso correto
        updateTimer();
        setInterval(updateTimer, 1000);
    } else {
        wrongAttempts++; // Soma 1 aos erros
        passwordError.classList.remove("hidden"); // Mostra o erro
        
        // Se já errou pelo menos 1 vez, mostra a dica
        if (wrongAttempts >= 1) {
            passwordHint.classList.remove("hidden");
        }

        passwordInput.value = "";
        passwordInput.focus();
    }
}

passwordBtn.addEventListener("click", checkPassword);
passwordInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        checkPassword();
    }
});

// Lógica Matemática do Contador
function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        timerElement.classList.add("hidden");
        countdownTitle.innerText = "A data chegou!";
        unlockBtn.classList.remove("hidden");
    } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    }
}

// Ação do botão interno do post secreto
unlockBtn.addEventListener("click", function() {
    unlockBtn.classList.add("hidden");
    secretMessage.classList.remove("hidden");
});