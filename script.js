const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".pause");
const deleteButton = document.querySelector(".reset");

const secondsId = document.querySelector("#seconds");
const minutesId = document.querySelector("#minutes");
const hoursId = document.querySelector("#hours");

let seconds = 0;
let minutes = 0;
let hours = 0;
let timerInterval = null; // Controla o intervalo único do cronômetro

// Função auxiliar para formatar números menores que 10 com zero à esquerda
function formatTime(value) {
  return value < 10 ? "0" + value : value;
}

// Atualiza os três elementos na tela de uma vez
function updateDisplay() {
  secondsId.innerHTML = formatTime(seconds);
  minutesId.innerHTML = formatTime(minutes);
  hoursId.innerHTML = formatTime(hours);
}

function startChrono() {
  // Evita criar vários cronômetros se clicar mais de uma vez em iniciar
  if (timerInterval !== null) return;

  timerInterval = setInterval(() => {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    updateDisplay();

  }, 1000);
}

function stopChrono() {
  clearInterval(timerInterval);
  timerInterval = null; // Libera a variável para poder iniciar novamente depois
}

function resetChrono() {
  stopChrono();
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}

startButton.addEventListener("click", startChrono);
stopButton.addEventListener("click", stopChrono);
deleteButton.addEventListener("click", resetChrono);

