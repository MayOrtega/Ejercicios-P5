const child_process = require("child_process");

let num1 = null;
let num2 = null;
let num3 = null;
let num4 = null;

function ejecutar (archivo){
    return new Promise((resolve) => {
        child_process.exec(`node ${archivo}`, function (err, result) {
            resolve(Number(result));
        });        
    });
}

    ejecutar("./primerNumero.js").then((numero1)=>{
        num1 = numero1;

        ejecutar("./segundoNumero.js").then((numero2) => {
            num2 = numero2;
           
            ejecutar("./tercerNumero.js").then((numero3) => {
                num3 = numero3;

                ejecutar("./cuartoNumero.js").then((numero4) => {
                    num4 = numero4;
                console.log(num1 * num2 *num3 * num4)
        })
    })
    })
})
