const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnAgain = document.querySelector("#btnAgain");

let randomNumber = Math.round(Math.random() * 10);
let xAtttempts = 1;

//Função callback
function tryAgain(event) {
  event.preventDefault(); //faz com que nao faça o padrão, enviar o formulário

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    toogleScreen()
    screen2.querySelector("h2").innerText = `Acertou em ${xAtttempts} Tentativas`;
  }

  inputNumber.value = ""  //faz com que suma o valor digitado, no input caso não acertado
  xAtttempts++;
}

function btnAgainClick() {
  toogleScreen()
  screen2.classList.add("hide");
  xAtttempts = 1
  randomNumber = Math.round(Math.random() * 10);
}

function toogleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
  xAtttempts = 1
}

//Eventos
btnTry.addEventListener("click", tryAgain);
btnAgain.addEventListener("click", btnAgainClick)
document.addEventListener("keydown", function(e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
      tryAgain()
  }
})