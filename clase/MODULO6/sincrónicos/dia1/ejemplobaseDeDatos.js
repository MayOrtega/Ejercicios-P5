const { Client } = require('pg');

const conectionPG = 
{host: 'localhost',
user: 'postgres',
password: 'Jupiterx24',
database: 'postgres',
port: '5432',};

const insert =  
" insert into prestamo values (008,6,06,'20/01/20','27/01/20','30/01/20','111-1111111-111','1111111-1');";
const consultaPG = new Client(conectionPG);
consultaPG.connect();
consultaPG.query(insert).
then(respuesta => {console.log(respuesta.rows)
    consultaPG.end();
})
.catch(err => {console.log(err)
    consultaPG.end()})