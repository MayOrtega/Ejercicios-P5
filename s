[33mcommit 2e09534dcacc8624279dad3e953ec0bf21fdeae4[m[33m ([m[1;36mHEAD -> [m[1;32mmain[m[33m, [m[1;31morigin/main[m[33m, [m[1;31morigin/HEAD[m[33m)[m
Author: = <mayorlen.ortega@gmail.com>
Date:   Tue May 31 10:01:11 2022 -0400

    push ejercicios

[1mdiff --git a/clase/MODULO3/examen/Color-Game-Examen-Mod3-P5/index.html b/clase/MODULO3/examen/Color-Game-Examen-Mod3-P5/index.html[m
[1mindex a88425b..a847c2d 100644[m
[1m--- a/clase/MODULO3/examen/Color-Game-Examen-Mod3-P5/index.html[m
[1m+++ b/clase/MODULO3/examen/Color-Game-Examen-Mod3-P5/index.html[m
[36m@@ -4,7 +4,7 @@[m
     <meta charset="UTF-8" />[m
     <meta http-equiv="X-UA-Compatible" content="IE=edge" />[m
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />[m
[31m-    <meta http-equiv="cache-control" content="no-cache" />[m
[32m+[m[32m    <meta name="author" content="May Ortega" />[m
     <link rel="stylesheet" href="styles.css" />[m
     <title>The Great Guessing Game</title>[m
   </head>[m
[1mdiff --git a/clase/MODULO4/DIA5 b/clase/MODULO4/DIA5[m
[1mnew file mode 100644[m
[1mindex 0000000..e69de29[m
[1mdiff --git a/clase/MODULO4/ToDoList/app.js b/clase/MODULO4/ToDoList/app.js[m
[1mnew file mode 100644[m
[1mindex 0000000..e69de29[m
[1mdiff --git a/clase/MODULO4/ToDoList/img/cross.png b/clase/MODULO4/ToDoList/img/cross.png[m
[1mnew file mode 100644[m
[1mindex 0000000..77a3002[m
Binary files /dev/null and b/clase/MODULO4/ToDoList/img/cross.png differ
[1mdiff --git a/clase/MODULO4/ToDoList/img/eliminar.png b/clase/MODULO4/ToDoList/img/eliminar.png[m
[1mnew file mode 100644[m
[1mindex 0000000..4f8f25f[m
Binary files /dev/null and b/clase/MODULO4/ToDoList/img/eliminar.png differ
[1mdiff --git a/clase/MODULO4/ToDoList/img/plus.png b/clase/MODULO4/ToDoList/img/plus.png[m
[1mnew file mode 100644[m
[1mindex 0000000..0addc1c[m
Binary files /dev/null and b/clase/MODULO4/ToDoList/img/plus.png differ
[1mdiff --git a/clase/MODULO4/ToDoList/index.html b/clase/MODULO4/ToDoList/index.html[m
[1mnew file mode 100644[m
[1mindex 0000000..5a7da0a[m
[1m--- /dev/null[m
[1m+++ b/clase/MODULO4/ToDoList/index.html[m
[36m@@ -0,0 +1,25 @@[m
[32m+[m[32m<!DOCTYPE html>[m
[32m+[m[32m<html lang="en">[m
[32m+[m[32m<head>[m
[32m+[m[32m    <meta charset="UTF-8">[m
[32m+[m[32m    <meta http-equiv="X-UA-Compatible" content="IE=edge">[m
[32m+[m[32m    <meta name="viewport" content="width=device-width, initial-scale=1.0">[m
[32m+[m[32m    <link rel="stylesheet" href="styles.css">[m
[32m+[m[32m    <title>Document</title>[m
[32m+[m[32m    <h1>COSAS POR HACER</h1>[m
[32m+[m[32m    <div class="input-div">[m
[32m+[m[32m        <input type="text" class="input" placeholder="Tarea a agregar">[m
[32m+[m[32m        <button class="boton-agregar"><img src="./img/plus.png" value="Regar las plantas"  width="20px" height="20px"></button>[m
[32m+[m[32m    </div>[m
[32m+[m[32m    <!-- <div class="container">[m
[32m+[m[32m        <div class="item">[m
[32m+[m[32m            <input type="text" class="item-input" disabled>[m
[32m+[m[32m            <button class="boton-editar"><img src="img/cross.png" width="20px" height="20px"></button>[m
[32m+[m[32m            <button class="boton-remover"><img src="img/eliminar.png"  width="20px" height="20px"></button>[m
[32m+[m[32m        </div>[m
[32m+[m[32m    </div> -->[m
[32m+[m[32m</head>[m
[32m+[m[32m<body>[m
[32m+[m[32m <script src="app.js"></script>[m[41m   [m
[32m+[m[32m</body>[m
[32m+[m[32m</html>[m
\ No newline at end of file[m
[1mdiff --git a/clase/MODULO4/ToDoList/styles.css b/clase/MODULO4/ToDoList/styles.css[m
[1mnew file mode 100644[m
[1mindex 0000000..e69de29[m
[1mdiff --git a/clase/MODULO4/dia4/ejemplo.css b/clase/MODULO4/dia4/ejemplo.css[m
[1mnew file mode 100644[m
[1mindex 0000000..024a0d8[m
[1m--- /dev/null[m
[1m+++ b/clase/MODULO4/dia4/ejemplo.css[m
[36m@@ -0,0 +1,33 @@[m
[32m+[m[32mhtml {[m
[32m+[m[32m    font-family: sans-serif;[m
[32m+[m[32m  }[m
[32m+[m[41m [m
[32m+[m[32m  body {[m
[32m+[m[32m    margin: 0;[m
[32m+[m[32m  }[m
[32m+[m[41m [m
[32m+[m[32m  button {[m
[32m+[m[32m    font: inherit;[m
[32m+[m[32m    background: #5102ac;[m
[32m+[m[32m    border: 1px solid #5102ac;[m
[32m+[m[32m    color: white;[m
[32m+[m[32m    cursor: pointer;[m
[32m+[m[32m    padding: 1.25rem 2.5rem;[m
[32m+[m[32m    font-size: 1.5rem;[m
[32m+[m[32m  }[m
[32m+[m[41m [m
[32m+[m[32m  button:focus {[m
[32m+[m[32m    outline: none;[m
[32m+[m[32m  }[m
[32m+[m[41m [m
[32m+[m[32m  button:hover,[m
[32m+[m[32m  button:active {[m
[32m+[m[32m    background: #832ee4;[m
[32m+[m[32m    border-color: #832ee4;[m
[32m+[m[32m  }[m
[32m+[m[41m [m
[32m+[m[32m  #control-center {[m
[32m+[m[32m    border: 2px solid #ccc;[m
[32m+[m[32m    margin: 5rem;[m
[32m+[m[32m    padding: 2rem;[m
[32m+[m[32m  }[m
\ No newline at end of file[m
[1mdiff --git a/clase/MODULO4/dia4/ejemplo.html b/clase/MODULO4/dia4/ejemplo.html[m
[1mnew file mode 100644[m
[1mindex 0000000..8ff71d8[m
[1m--- /dev/null[m
[1m+++ b/clase/MODULO4/dia4/ejemplo.html[m
[36m@@ -0,0 +1,21 @@[m
[32m+[m[32m<!DOCTYPE html>[m
[32m+[m[32m<html lang="en">[m
[32m+[m[32m<head>[m
[32m+[m[32m    <meta charset="UTF-8">[m
[32m+[m[32m    <meta http-equiv="X-UA-Compatible" content="IE=edge">[m
[32m+[m[32m    <meta name="viewport" content="width=device-width, initial-scale=1.0">[m
[32m+[m[32m    <link rel="stylesheet" href="ejemploXHR.css">[m
[32m+[m[32m    <title>Document</title>[m
[32m+[m[32m</head>[m
[32m+[m[32m<body>[m
[32m+[m[32m    <section id="control-center">[m
[32m+[m[41m [m
[32m+[m[32m        <button id="get-btn">GET Data</button>[m
[32m+[m[32m        <button id="post-btn">POST Data</button>[m
[32m+[m[32m        <button id="get-btn">GET Data</button>[m
[32m+[m[32m        <button id="post-btn">POST Data</button>[m
[32m+[m[32m    </section>[m
[32m+[m[41m [m
[32m+[m[32m    <script src="ejemploXHR.js"></script>[m
[32m+[m[32m</body>[m
[32m+[m[32m</html>[m
\ No newline at end of file[m
[1mdiff --git a/clase/MODULO4/dia4/ejemplo.js b/clase/MODULO4/dia4/ejemplo.js[m
[1mnew file mode 100644[m
[1mindex 0000000..94309c2[m
[1m--- /dev/null[m
[1m+++ b/clase/MODULO4/dia4/ejemplo.js[m
[36m@@ -0,0 +1,77 @@[m
[32m+[m[32mconst getBtn = document.getElementById("get-btn");[m
[32m+[m[32mconst postBtn = document.getElementById("post-btn");[m
[32m+[m[41m [m
[32m+[m[32m// *************************[m
[32m+[m[32m// *** SEND HTTP REQUEST ***[m
[32m+[m[32m// *************************[m
[32m+[m[32mconst sendHttpRequest = (method, url, data) =>[m
[32m+[m[32m    {[m
[32m+[m[32m        const promise = new Promise( (resolve, reject) =>[m
[32m+[m[32m        {[m
[32m+[m[32m            const xhr = new XMLHttpRequest();[m
[32m+[m[32m            xhr.open(method, url);[m
[32m+[m[32m            xhr.responseType = 'json';[m
[32m+[m[41m [m
[32m+[m[32m            if (data) {[m
[32m+[m[32m                xhr.setRequestHeader('Content-type', 'application/json');[m
[32m+[m[32m            }[m
[32m+[m[41m [m
[32m+[m[32m            xhr.onload = () =>[m
[32m+[m[32m                {[m
[32m+[m[32m                    if(xhr.status >= 400 ) {[m
[32m+[m[32m                        reject(xhr.response);[m
[32m+[m[32m                    } else {[m
[32m+[m[32m                        resolve(xhr.response);[m
[32m+[m[32m                    }[m
[32m+[m[32m                };[m
[32m+[m[41m [m
[32m+[m[32m            xhr.onerror = () =>[m
[32m+[m[32m                {[m
[32m+[m[32m                    reject("Hicimos la morición!!!");[m
[32m+[m[32m                };[m
[32m+[m[41m           [m
[32m+[m[32m            xhr.send(JSON.stringify(data));[m
[32m+[m[41m [m
[32m+[m[32m        } );[m
[32m+[m[41m       [m
[32m+[m[32m        return promise;[m
[32m+[m[32m    };[m
[32m+[m[41m [m
[32m+[m[32m// *************************[m
[32m+[m[32m// ******* GET DATA ********[m
[32m+[m[32m// *************************[m
[32m+[m[32mconst getData = () =>[m
[32m+[m[32m    {[m
[32m+[m[32m        // llamar a un api, con un método, una url y eventualmente datos[m
[32m+[m[32m        sendHttpRequest('GET', 'https://reqres.in/api/users')[m
[32m+[m[32m            .then( (responseData) =>[m
[32m+[m[32m                {[m
[32m+[m[32m                    console.log(responseData);[m
[32m+[m[32m                });[m
[32m+[m[32m    };[m
[32m+[m[41m [m
[32m+[m[32m// *************************[m
[32m+[m[32m// ******* SEND DATA *******[m
[32m+[m[32m// *************************[m
[32m+[m[32mconst sendData = () =>  // El propósito de esta función es REGISTRARSE[m
[32m+[m[32m    {[m
[32m+[m[32m        // llamar a un api, con un método, una url y eventualmente datos[m
[32m+[m[32m        sendHttpRequest('POST', 'https://reqres.in/api/register',[m
[32m+[m[32m            {[m
[32m+[m[32m                "email": "eve.holt@reqres.in",[m
[32m+[m[32m                "password": "pistol"[m
[32m+[m[32m            })[m
[32m+[m[41m    [m
[32m+[m[32m .then( (responseData) => {[m
[32m+[m[32m     console.log(responseData)[m
[32m+[m[32m })[m
[32m+[m[32m .catch((err) => {[m
[32m+[m[32m     console.log(err)[m
[32m+[m[32m });[m
[32m+[m[32m};[m
[32m+[m[32m// *************************[m
[32m+[m[32m// *************************[m
[32m+[m[32m// Este botón me permitirá recibir información[m
[32m+[m[32mgetBtn.addEventListener('click', getData);[m
[32m+[m[32m// Este botón me permitirá registrarme, enviando datos para ello[m
[32m+[m[32mpostBtn.addEventListener('click', sendData);[m
\ No newline at end of file[m
[1mdiff --git a/clase/MODULO4/ejemploCanva.html b/clase/MODULO4/ejemploCanva.html[m
[1mnew file mode 100644[m
[1mindex 0000000..8099d9b[m
[1m--- /dev/null[m
[1m+++ b/clase/MODULO4/ejemploCanva.html[m
[36m@@ -0,0 +1,18 @@[m
[32m+[m[32m<!DOCTYPE html>[m
[32m+[m[32m<html lang="en">[m
[32m+[m[32m<head>[m
[32m+[m[32m    <meta charset="UTF-8">[m
[32m+[m[32m    <meta http-equiv="X-UA-Compatible" content="IE=edge">[m
[32m+[m[32m    <meta name="viewport" content="width=device-width, initial-scale=1.0">[m
[32m+[m[32m    <title>Document</title>[m
[32m+[m[32m</head>[m
[32m+[m[32m<body>[m
[32m+[m[41m    [m
[32m+[m[32m    <div id="contenedor" style="height: 300px; width: 100%;"></div>[m
[32m+[m
[32m+[m[41m       [m
[32m+[m[32m    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>[m
[32m+[m[32m    <script src = "https://canvasjs.com/assets/script/jquery.canvasjs.min.js"></script>[m
[32m+[m[32m    <script src="ejemploCanva.js"></script>[m
[32m+[m[32m</body>[m
[32m+[m[32m</html>[m
[1mdiff --git a/clase/MODULO4/ejemploCanva.js b/clase/MODULO4/ejemploCanva.js[m
[1mnew file mode 100644[m
[1mindex 0000000..5a70ce6[m
[1m--- /dev/null[m
[1m+++ b/clase/MODULO4/ejemploCanva.js[m
[36m@@ -0,0 +1,27 @@[m
[32m+[m[32mwindow.onload = function () {[m
[32m+[m[32m    var options = {[m
[32m+[m[32m            title: {[m
[32m+[m[32m            text: "Gráfico de columnas con jQuery CanvasJS",[m
[32m+[m[32m        },[m[41m [m
[32m+[m[32m            axisX: {[m
[32m+[m[32m            title: "Frutas Tropicales",[m
[32m+[m[32m            titleFontSize: 12[m
[32m+[m[32m        },[m
[32m+[m[32m            axisY: {[m
[32m+[m[32m            title: "Consumo Kg/persona/año", titleFontSize: 12[m
[32m+[m[32m        }, data: [[m
[32m+[m[32m            {[m
[32m+[m[32m                type: "column", dataPoints: [[m
[32m+[m[32m                    { label: "papaya", y: 23 },[m[41m [m
[32m+[m[32m                    { label: "naranja", y: 15 },[m[41m [m
[32m+[m[32m                    { label: "platano", y: 25 },[m[41m [m
[32m+[m[32m                    { label: "mango", y: 30 },[m[41m [m
[32m+[m[32m                    { label: "guayaba", y: 20 },[m
[32m+[m[32m                    { label: "coco", y: 30 },[m[41m [m
[32m+[m[32m                    { label: "maracuyá", y: 20 },[m
[32m+[m[32m                ],[m
[32m+[m[32m            },[m
[32m+[m[32m        ],[m
[32m+[m[32m    };[m
[32m+[m[32m    $("#contenedor").CanvasJSChart(options);[m
[32m+[m[32m};[m
[1mdiff --git a/clase/MODULO4/ejemploCanva2.html b/clase/MODULO4/ejemploCanva2.html[m
[1mnew file mode 100644[m
[1mindex 0000000..dbadc1b[m
[1m--- /dev/null[m
[1m+++ b/clase/MODULO4/ejemploCanva2.html[m
[36m@@ -0,0 +1,18 @@[m
[32m+[m[32m<!DOCTYPE html>[m
[32m+[m[32m<html lang="en">[m
[32m+[m[32m<head>[m
[32m+[m[32m    <meta charset="UTF-8">[m
[32m+[m[32m    <meta http-equiv="X-UA-Compatible" content="IE=edge">[m
[32m+[m[32m    <meta name="viewport" content="width=device-width, initial-scale=1.0">[m
[32m+[m[32m    <title>Document</title>[m
[32m+[m[32m</head>[m
[32m+[m[32m<body>[m
[32m+[m[41m    [m
[32m+[m[32m    <div id="contenedor" style="height: 300px; width: 100%;"></div>[m
[32m+[m
[32m+[m[41m       [m
[32m+[m[32m    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>[m
[32m+[m[32m    <script src = "https://canvasjs.com/assets/script/jquery.canvasjs.min.js"></script>[m
[32m+[m[32m    <script src="ejemploCanvas2.js"></script>[m
[32m+[m[32m</body>[m
[32m+[m[32m</html>[m
[1mdiff --git a/clase/MODULO4/ejemploCanvas2.js b/clase/MODULO4/ejemploCanvas2.js[m
[1mnew file mode 100644[m
[1mindex 0000000..304fc12[m
[1m--- /dev/null[m
[1m+++ b/clase/MODULO4/ejemploCanvas2.js[m
[36m@@ -0,0 +1,44 @@[m
[32m+[m[41m [m
[32m+[m[32m$(document).ready( function() {[m
[32m+[m[41m [m
[32m+[m[32m    // Una parte del código para traer los datos[m
[32m+[m[32m    // La otra, para pasarle los datos a Canvas[m
[32m+[m[41m [m
[32m+[m[32m    var datosDolar = [];[m
[32m+[m[32m    var options = {[m
[32m+[m[32m        animationEnabled: true,[m
[32m+[m[32m        theme: "light2",[m
[32m+[m[32m        title: {[m
[32m+[m[32m            text: "Valor del Dolor el último mes"[m
[32m+[m[32m        },[m
[32m+[m[32m        axisX: {[m
[32m+[m[32m            valueFormatString: "DD MMM YYYY",[m
[32m+[m[32m        },[m
[32m+[m[32m        axisY: {[m
[32m+[m[32m            title: "Precio Dolar",[m
[32m+[m[32m            titleFontSize: 24,[m
[32m+[m[32m        },[m
[32m+[m[32m        data: [{[m
[32m+[m[32m            type: "spline",[m
[32m+[m[32m            dataPoints: datosDolar[m
[32m+[m[32m        }][m
[32m+[m[32m    };[m
[32m+[m[32m    $.ajax({[m
[32m+[m[32m        type: "GET",[m
[32m+[m[32m        url: "https://mindicador.cl/api/dolar",[m
[32m+[m[32m        dataType: "json",[m
[32m+[m[32m        success: function(datos) {[m
[32m+[m[32m            let datosAPI = datos.serie;[m
[32m+[m[41m [m
[32m+[m[32m            for (var iterador=0;iterador<datosAPI.length;iterador++){[m
[32m+[m[32m                datosDolar.push({[m
[32m+[m[32m                    x: new Date(datosAPI[iterador].fecha),[m
[32m+[m[32m                    y: datosAPI[iterador].valor,[m
[32m+[m[32m                });[m
[32m+[m[32m            }[m
[32m+[m[32m            console.log(datosDolar);[m
[32m+[m[32m            $("#contenedor").CanvasJSChart(options);[m
[32m+[m[32m        }[m
[32m+[m[32m    });[m
[32m+[m[41m [m
[32m+[m[32m});[m
\ No newline at end of file[m
