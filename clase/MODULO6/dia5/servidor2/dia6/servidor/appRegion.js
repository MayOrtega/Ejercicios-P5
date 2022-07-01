const { Client } = require ('pg');
const express = require('express');
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
 
app.post('/ingresarRegionAction', (req, res) => {
 
    let numRegion = req.body.numeroRegion;
    let nomRegion = req.body.nombreRegion;
 
    numRegion = parseInt(numRegion);
 
    let sqlIngreso = "insert into region (id, nombre) values (" + numRegion + ", \'" + nomRegion + "\')";
 
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

 
    /*
    let pagina = \'<!doctype html><html><head></head><body>\'
    for (let x = num1; x <= num2; x++)
      pagina += `<a href="/mostrartabla?valor=${x}">${x}</a> - `
    pagina += \'</body></html>\'
    res.send(pagina)
    */
 
  })
 
/* INICIO DEL SERVIDOR */
 
var server = app.listen(8080, () => {
    console.log('Servidor web iniciado')
})