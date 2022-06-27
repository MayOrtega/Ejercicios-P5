const { Client } = require('pg');

const conectionPG = {
    user: 'postgres',
    password: 'Jupiterx24',
    host: 'localhost',  
    database: 'postgres',
    port: '5432',
};

const crudPG = new Client(conectionPG);
crudPG.connect();

// Confección de una consulta general

crudPG.query('select * from prestamo')
    .then(respuesta => {
        console.log(respuesta.rows)
        // crudPG.end();
    })
    .catch( error => {
        console.log("Hicimos la morición")
        console.log(error)
        // crudPG.end()
    });
//Confección delete
crudPG.query("delete from pacientes where id_paciente ='4'")
    .then(respuesta => {
        console.log(respuesta.rows)
        crudPG.end();
    })
    .catch( error => {
        console.log("Hicimos la morición")
        console.log(error)
        crudPG.end()
    });