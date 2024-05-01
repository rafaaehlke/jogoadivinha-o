const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const inputElement = document.querySelector('#inputNumber')

let randomNumber = Math.round(Math.random() * 15);
let xAtttempts = 1;


function tryAgain(event) {
  event.preventDefault(); //faz com que nao faça o padrão, enviar o formulário
  const inputNumber = document.querySelector("#inputNumber");
  
  if (!inputNumber.value) {
    alert("Por favor, digite um número antes de tentar novamente");
    return; // Retorna imediatamente se o campo estiver vazio
  }

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector("h2").innerText = `Acertou em ${xAtttempts} Tentativas`;
  } else if(Number(inputNumber.value) < 0 || Number(inputNumber.value) > 15) {
     alert(`Digite um numero entre 0 a 15`)
  }

  inputNumber.value = ""  //faz com que suma o valor digitado, no input caso não acertado
  xAtttempts++
}

function btnAgainClick(){
  toggleScreen()
  xAtttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function keyDown(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    btnAgainClick()
  }
}

function inputClick(e) {
  if (e.key === 'Enter') {
    if (inputElement.value === "") {
      e.preventDefault()
      alert("Por favor, digite um número entre 0 a 15")
      tryAgain()
    } 
  }
}


//Eventos 
const btnTry = document.querySelector("#btnTry");
const btnAgain = document.querySelector("#btnAgain");

//elementos
btnTry.addEventListener("click", tryAgain);
btnAgain.addEventListener("click", btnAgainClick);
document.addEventListener("keydown", keyDown)
inputElement.addEventListener("keypress", inputClick)

