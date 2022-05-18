var Contador = (
    function(){
        var llevoLaCuenta = 0;

        function sumarValor(valor){
            llevoLaCuenta += valor;
        }
        return {
            incrementar: function(){   //Funciones que comparten el mismo Entorno
                sumarValor(1)
            },
            decrementar: function(){  //Funciones en un Return es Encapsulación
                sumarValor(-1);
            },
            devuelveElValor: function(){
                return llevoLaCuenta;
            }
        }
    }
)();

console.log(Contador.devuelveElValor());
Contador.incrementar();
console.log(Contador.devuelveElValor());
Contador.decrementar();
console.log(Contador.devuelveElValor())

console.log(Contador.sumarValor(5));
console.log(Contador.devuelveElValor())