//los primeros dos términos de la secuencia son 0 y 1
//si x es mayor a 1, es el resultado de x-1 + x-2

function fibonacci(num){
    const initNum = [0,1]

    for(let i = 2; i <= num; i++){
        initNum[i] = initNum[i-1] + initNum[i-2]
    }
    return initNum(x)

}

fibonacci(2)


