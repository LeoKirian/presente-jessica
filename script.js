// Data configurada para 04 de Agosto de 2026 no formato Universal (Ano-Mês-Dia)
const targetDate = new Date("2026-08-04T00:00:00").getTime();

const timerElement = document.getElementById("countdown-timer");
const unlockBtn = document.getElementById("unlock-btn");
const secretMessage = document.getElementById("secret-message");
const countdownTitle = document.getElementById("countdown-title");

function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Se o dia chegou ou já passou
    if (distance <= 0) {
        timerElement.classList.add("hidden");
        countdownTitle.innerText = "A data chegou!";
        unlockBtn.classList.remove("hidden");
    } else {
        // Cálculos matemáticos
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Atualiza o HTML garantindo sempre 2 dígitos
        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    }
}

// Executa a função imediatamente ao carregar a página (evita mostrar os zeros iniciais)
updateTimer();

// Depois, continua atualizando a cada 1 segundo (1000 milissegundos)
setInterval(updateTimer, 1000);

// Ação do botão: quando clicado, mostra a mensagem
unlockBtn.addEventListener("click", function() {
    unlockBtn.classList.add("hidden");
    secretMessage.classList.remove("hidden");
});