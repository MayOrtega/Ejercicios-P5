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

    
    var palabraAleatoria = words[Math.floor(Math.random() * words.length)]
    var time = 10;
    var score = 0;
    
     
   
          
       function randomWords () {
       console.log(palabraAleatoria)
      
    }
    
    randomWords()  

    function addToDom (){
        var wordRamdom = document.querySelector("#randomWord")
        wordRamdom.innerHTML=palabraAleatoria;
    }
    
    addToDom()

 
    //contador de tiempo
    window.onload = actualizarTiempo;
    function actualizarTiempo() {
        document.querySelector('#timeSpan').innerHTML = time;
        if(time==0){
          
        }else{
          time-=1;
          setTimeout("actualizarTiempo()",1500);
        }
      }


      function updateScore(){
        var totalScore = document.querySelector('#score').innerHTML = score+=1;
        
      }

      function gameOver(){
        document.querySelector('#end-game-container').innerHTML = 'Fin de la partida. Su puntaje total es: ' + totalScore;
        

        //version 2.0
  
    var input = document.querySelector('#text')

    input.addEventListener('keypress', e => {
      if(e.key == "Enter"){
      var palabraIngresada = document.querySelector('#text').value
      
      
       console.log(palabraIngresada)
      }
      
      if(palabraIngresada == palabraAleatoria){

       time+=4 
       updateScore()
       
       

                  
     }else if(e.key == "Enter" && palabraAleatoria !==palabraIngresada ){
       alert('Escriba bien')
     }
    
  })
  }
    
    