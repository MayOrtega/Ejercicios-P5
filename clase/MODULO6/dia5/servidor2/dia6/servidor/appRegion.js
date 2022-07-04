const { Client } = require('pg');
const express = require('express')
const app = express()
 
const conectionPG = {
    user: 'postgres',
    password: 'Jupiterx24',
    host: 'localhost',  // Localhost es MI COMPUTADOR
    database: 'postgres',
    port: '5432',
};
 
const bodyParser = require('body-parser')
 
//especificamos el subdirectorio donde se encuentran las páginas estáticas
app.use(express.static(__dirname + '/public'))
 
//extended: false significa que parsea solo string (no archivos de imagenes por ejemplo)
app.use(bodyParser.urlencoded({ extended: false }))
 
/* ENRUTAMIENTO */
 
// Ingresar una Región a la BBDD
app.post('/ingresarRegionAction', (req, res) => {
 
    let numRegion = req.body.numeroRegion;
    let nomRegion = req.body.nombreRegion;
 
    numRegion = parseInt(numRegion);
 
    let sqlIngreso = "insert into region (id, nombre) values (" + numRegion + ", '" + nomRegion + "')";
 
    const insertRegion = new Client(conectionPG);
    insertRegion.connect();
 
    insertRegion.query(sqlIngreso)
    .then( respuesta =>
        {
            console.log("Se ingresó la Región");
            insertRegion.end();
        })
    .catch( error =>
        {
            console.log("Hicimos la Morición");
            console.log(error);
            insertRegion.end();
        });
 
        let paginaExito = '<!doctype html><html><head></head><body>';
        paginaExito += '<h3>La región se ha grabado exitosamente</h3>';
        paginaExito += '<br>';
        paginaExito += '<br>';
        paginaExito += '<a href="http://localhost:8080/region.html"> Volver';
        paginaExito += '</body></html>';
 
        res.send(paginaExito);
 
  });
 
// Mostrar las Regiones
app.get('/mostrarRegionesAction', (req, res) => {  
 
    console.log("Entramos en mostrarRegionesAction");
    let sqlConsulta = "select * from region";
 
    const consultaRegiones = new Client(conectionPG);
    consultaRegiones.connect();
 
    consultaRegiones.query(sqlConsulta)
    .then( respuesta =>
        {
 
            let paginaExito = '<!doctype html><html><head></head><body>';
            paginaExito += '<h3>Las regiones son las siguientes:</h3>';
            paginaExito += '<br>';
            paginaExito += '<table border=1>';
            paginaExito +=      '<tr>';
            paginaExito +=          '<th>Id Región</th>';
            paginaExito +=          '<th>Nombre Región</th>';
            paginaExito +=          '<th>Acciones</th>';
            paginaExito +=      '</tr>';
 
            for (let i=0;i<respuesta.rows.length;i++) {
                paginaExito +=      '<tr>';
                paginaExito +=          '<th>' + respuesta.rows[i].id + '</th>';
                paginaExito +=          '<th>' + respuesta.rows[i].nombre + '</th>';
                paginaExito +=          '<th><a href=eliminarRegionAction?id=' + respuesta.rows[i].id +  '>Eliminar Región</th>';
                paginaExito +=      '</tr>';
            }  
            paginaExito += '</table>';
            paginaExito += '<br>';
            paginaExito += '<a href="http://localhost:8080/region.html"> Volver';
            paginaExito += '</body></html>';
 
            res.send(paginaExito);
 
            consultaRegiones.end();
        })
    .catch( error =>
        {
            console.log("Hicimos la Morición");
            console.log(error);
            consultaRegiones.end();
        });
});
 
 
// Eliminar una Región en la BBDD
app.get('/eliminarRegionAction', (req, res) => {
 
    const host = "localhost";
    let miURL = new URL(`http://${host}:${req.url}`);
    const parametros = miURL.searchParams.values;
 
    let idRegion = 0;
 
    miURL.searchParams.forEach( (id, nombre) =>
    {
        idRegion = id;
        console.log(`${id} ${nombre}`);
    });
 
    idRegion = parseInt(idRegion);
 
    let sqlDelete = "delete from region where id = "  + idRegion + "";
    console.log(sqlDelete);
    const deleteRegion = new Client(conectionPG);
    deleteRegion.connect();
 
    deleteRegion.query(sqlDelete)
    .then( respuesta =>
        {
            console.log("Se eliminó la Región");
            deleteRegion.end();
        })
    .catch( error =>
        {
            console.log("Hicimos la Morición");
            console.log(error);
            deleteRegion.end();
        });
 
        res.redirect('mostrarRegionesAction');
 
  });
 
 
/* INICIO DEL SERVIDOR */
 
var server = app.listen(7070, () => {
    console.log(server + 'Servidor web iniciado')
})