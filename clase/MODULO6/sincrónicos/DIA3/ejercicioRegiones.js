const fbd = require('./conectionRegiones');

// Confección de una consulta general
function consultarRegiones() {
    const cone = fbd.conectarBBDD();
    cone.query('select * from region')
        .then(respuesta => {
            console.log(respuesta.rows)
            fbd.desconectarBBDD(cone);
        })
        .catch( error => {
            console.log("Hicimos la morición")
            console.log(error)
            fbd.desconectarBBDD(cone);
        });
}


// Confección de un insert para una tabla determinada
function insertarRegion(id, nombre) {
    const cone = fbd.conectarBBDD();
    let sqlConsulta = "insert into region (id, nombre) values ("+ id + ", " + "'" + nombre + "')";
    console.log(sqlConsulta);
    cone.query(sqlConsulta)
        .then(respuesta => {
            console.log("Se ingresó correctamente")
            fbd.desconectarBBDD(cone);
        })
        .catch( error => {
            console.log("Hicimos la morición")
            console.log(error)
            fbd.desconectarBBDD(cone);
        });
}
consultarRegiones