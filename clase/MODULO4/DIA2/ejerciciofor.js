// IMPRIMIR POR PANTALLA, LAS TABLAS DE MULTIPLICAR, DE 1 A 10
// Y QUE TENGA UN ENCABEZADO DE ESTE TIPO

//************ TABLA 1 ***********/

for(let i=1; i<=10; i++){
    console.log('\n' + '******* Tabla del ' + i + '********')
    for(let j=1; j<=10; j++){
    console.log(i + '*' + j + '=' + i*j)
}
}