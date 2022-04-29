const words = [
    'californication',
    ,
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

    function randomWords () {

        var time = 10;
        var score = 0;            
   
        
        console.log(palabraAleatoria)

        
    }
    
    randomWords()  

    function addToDom (){
        var wordRamdom = document.querySelector("#randomWord")
        wordRamdom.innerHTML=palabraAleatoria;
    }

    addToDom()

    
    