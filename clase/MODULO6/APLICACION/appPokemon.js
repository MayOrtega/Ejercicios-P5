const { Client } = require('pg');
const express = require('express');
const app = express();


//Paso2
const conectionPG = {
    user: 'postgres',
    password: 'Jupiterx24',
    host: 'localhost',  // Localhost es MI COMPUTADOR
    database: 'postgres',
    port: '5432',
};

//Paso 1
const bodyParser = require('body-parser')

//especificamos el subdirectorio donde se encuentran las páginas estáticas
app.use(express.static(__dirname + '/public'))


//Especificar ubicación de la carpeta pública
 app.use(bodyParser.urlencoded({extended: false}))



 //Continuación paso2
 app.post('/ingresarPokemonAction', (req, res) => {
 console.log('Entré a ingresarPokemonAction')
    let idPokemon = req.body.idPokemon;
    let nombrePokemon = req.body.nombrePokemon;
    let tipoPokemon = req.body.tipoPokemon;
 
    idPokemon = parseInt(idPokemon);
        let sqlIngresoPokemon = "insert into pokemon (id_pokemon, nombre, tipo) values (" + idPokemon + ", '" + nombrePokemon + "' , '" + tipoPokemon + "')";
        console.log(sqlIngresoPokemon)

    const insertPokemon = new Client(conectionPG);
    insertPokemon.connect();
 
    insertPokemon.query(sqlIngresoPokemon)
    .then( respuesta =>
        {
            console.log("Se ingresó el Pokemon");
            insertPokemon.end();
        })
    .catch( error =>
        {
            console.log("Hicimos la Morición");
            console.log(error);
            insertPokemon.end();
        });

        


        let paginaExito = '<!doctype html><html><head></head><body>';
        paginaExito += '<h3>El pokemon se ha grabado exitosamente</h3>';
        paginaExito += '<br>';
        paginaExito += '<br>';
        paginaExito += '<a href="http://localhost:8080/index.html"> Volver';
        paginaExito += '</body></html>';
 
        res.send(paginaExito);
 
  });


// Mostrar los pokemones
app.get('/mostrarPokemonAction', (req, res) => {  
 
    console.log("Entramos en mostrarPokemonAction");
    let sqlConsulta = "select * from Pokemon";
 
    const mostrarPokemones = new Client(conectionPG);
    mostrarPokemones.connect();
 
    mostrarPokemones.query(sqlConsulta)
    .then( respuesta =>
        {
 
            let paginaExito = '<!doctype html><html><head></head><body>';
            paginaExito += '<h3>Los pokemones son los siguientes:</h3>';
            paginaExito += '<br>';
            paginaExito += '<table border=1>';
            paginaExito +=      '<tr>';
            paginaExito +=          '<th>Id Pokemon</th>';
            paginaExito +=          '<th>Nombre Pokemon</th>';
            paginaExito +=          '<th>Tipo Pokemon</th>';
            paginaExito +=      '</tr>';
 
            for (let i=0;i<respuesta.rows.length;i++) {
                paginaExito +=      '<tr>';
                paginaExito +=          '<th>' + respuesta.rows[i].id_pokemon + '</th>';
                paginaExito +=          '<th>' + respuesta.rows[i].nombre + '</th>';
                paginaExito +=          '<th><a href=eliminarPokemonAction?id=' + respuesta.rows[i].id_pokemon +  '>Eliminar Pokemon</th>';
                paginaExito +=      '</tr>';
            }  
            paginaExito += '</table>';
            paginaExito += '<br>';
            paginaExito += '<a href="http://localhost:8080/index.html"> Volver';
            paginaExito += '</body></html>';
 
            res.send(paginaExito);
 
            mostrarPokemones.end();
        })
    .catch( error =>
        {
            console.log("Hicimos la Morición");
            console.log(error);
            mostrarPokemones.end();
        });
});
 
 
// Eliminar un Pokemon en la BBDD
app.get('/eliminarPokemonAction', (req, res) => {
 
    const host = "localhost";
    let miURL = new URL(`http://${host}:${req.url}`);
    const parametros = miURL.searchParams.values;
 
    let idPoke = 0;
 
    miURL.searchParams.forEach( (id, nombre, tipo) =>
    {
        idPoke = id;
        console.log(`${id} ${nombre} ${tipo}`);
    });
 

 
    let sqlDelete = "delete from Pokemon where id_pokemon = "  + idPoke + "";
    console.log(sqlDelete);
    const deletePokemon = new Client(conectionPG);
    deletePokemon.connect();
 
    deletePokemon.query(sqlDelete)
    .then( respuesta =>
        {
            console.log("Se eliminó el pokemon");
            deletePokemon.end();
        })
    .catch( error =>
        {
            console.log("Hicimos la Morición");
            console.log(error);
            deletePokemon.end();
        });
 
        res.redirect('mostrarPokemonAction');
 
  });
 



 //Incio del servidor
var server = app.listen(8080, () => {
    console.log('Servidor Web Inciado')
})