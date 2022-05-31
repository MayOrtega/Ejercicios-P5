 
$(document).ready( function() {
 
    // Una parte del código para traer los datos
    // La otra, para pasarle los datos a Canvas
 
    var datosDolar = [];
    var options = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Valor del Dolor el último mes"
        },
        axisX: {
            valueFormatString: "DD MMM YYYY",
        },
        axisY: {
            title: "Precio Dolar",
            titleFontSize: 24,
        },
        data: [{
            type: "spline",
            dataPoints: datosDolar
        }]
    };
    $.ajax({
        type: "GET",
        url: "https://mindicador.cl/api/dolar",
        dataType: "json",
        success: function(datos) {
            let datosAPI = datos.serie;
 
            for (var iterador=0;iterador<datosAPI.length;iterador++){
                datosDolar.push({
                    x: new Date(datosAPI[iterador].fecha),
                    y: datosAPI[iterador].valor,
                });
            }
            console.log(datosDolar);
            $("#contenedor").CanvasJSChart(options);
        }
    });
 
});