const words = [
  "californication",
  "black",
  "summer",
  "flea",
  "aeroplane",
  "peppers",
  "unlimited",
  "arcadium",
  "love",
  "getaway",
  "stadium",
  "quixoticelixer",
  "quarter",
  "snow",
  "dylan",
  "zephyr",
  "funky",
  "chili",
];

var palabraAleatoria = document.querySelector("#randomWord");
var randomWord;
var time = 11;
var score = 0;

//Aleatorización palabras del array
function randomWords() {
  let i = Math.floor(Math.random() * words.length);
  randomWord = words[i];
}

//Imprimir palabra aleatoria en la pantalla

function addToDom() {
  randomWords();
  palabraAleatoria.innerHTML = randomWord;
}

addToDom();

//Ingreso palabra del usuario y comparación

var palabraIngresada = document.querySelector("#text");
palabraIngresada.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    if (palabraIngresada.value == palabraAleatoria) {
      time += 3;
      $("#text").val("");
      addToDom();
      updateScore();
    } else {
      palabraIngresada.value = "";
      addToDom();
    }
  }
});

//Cuenta regresiva
function actualizarTiempo() {
  if (time === 0) {
    clearInterval(timeInterval);
    finalScore = totalScore.innerHTML;
    gameOver();
  } else {
    time -= 1;
    timeSpan.innerHTML = time;
  }
}

var totalScore = document.querySelector("#score");
let timeInterval = setInterval(actualizarTiempo, 1500);

totalScore.innerHTML = score;

//Actualización puntaje
function updateScore() {
  score++;
  totalScore.innerHTML = score;
}

//Función fin del tiempo
var gameContainer = document.querySelector("#end-game-container");
function gameOver() {
  var finalScore = totalScore.innerHTML;
  alert(
    "Se acabó el tiempo. Tu puntaje fue: " +
      finalScore +
      "\n Presiona Start para volver a jugar"
  );
}
 //Botón restart
var btnReinicio = document.querySelector("#reiniciar");
btnReinicio.addEventListener("click", () => {
  window.location.reload();
});
