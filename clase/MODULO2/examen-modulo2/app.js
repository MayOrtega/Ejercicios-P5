const words = [
    'californication',
      'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
    ];

var palabraAleatoria = document.querySelector("#randomWord");
var randomWord;
var time = 11;
var score = 0;



function randomWords () {
    let i = Math.floor(Math.random()*words.length);
    randomWord = words[i];
}

function addToDom () {
    randomWords ();
    palabraAleatoria.innerHTML = randomWord;
}

addToDom ();

var palabraIngresada = document.querySelector("#text")


palabraIngresada.addEventListener("keypress", function (e) { 
     if (e.key == "Enter") 
    {if (palabraIngresada.value == palabraAleatoria) {
    (time += 3); 
    $('#text').val(""); 
    addToDom();
    updateScore();
    } else { 
    (palabraIngresada.value = ""); 
    addToDom()}} 
    }
);

function actualizarTiempo () {
    if (time === 0) {
        clearInterval(timeInterval);
        finalTime = totalScore.innerHTML;
        gameOver();
    } else {
    time -=1;
    timeSpan.innerHTML = time;
    }
};

let timeInterval = setInterval (actualizarTiempo, 1500);

var totalScore = document.querySelector("#score");
totalScore.innerHTML = score;


function updateScore () {
  score += 1;
  totalScore.innerHTML = score; 
};

var gameContainer = document.querySelector("#end-game-container");


function gameOver () {
    var finalTime = totalScore.innerHTML;
     gameContainer.innerHTML = "Se acabó el tiempo. Tu puntaje fue" + finalTime;    
};

var btnReinicio = document.querySelector('#reiniciar')
btnReinicio.addEventListener('click', () => {
 window.location.reload();
        
 })
