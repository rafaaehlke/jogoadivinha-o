const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const randomNumber = Math.round(Math.random() * 10);
let xAtttempts = 1;

function tryAgain(event) {
  event.preventDefault(); //faz com que nao faça o padrão, enviar o formulário

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    screen1.classList.add("hide");
    screen2.classList.remove("hide");

    screen2.querySelector("h2").innerText = `Acertou em ${xAtttempts} Tentativas`;
  }

  inputNumber.value = ""  //faz com que suma o valor digitado, no input caso não acertado
  xAtttempts++;
}


//Eventos 
const btnTry = document.querySelector("#btnTry");
const btnAgain = document.querySelector("#btnAgain");

btnTry.addEventListener("click", tryAgain);
btnAgain.addEventListener("click", function () {
  screen1.classList.remove("hide");
  screen2.classList.add("hide");
  xAtttempts = 1
});
