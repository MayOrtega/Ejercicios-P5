//Aquí va el objeto del ejercicio anterior


const findPostId = (id) => {

    const posts.find((item) => item.id === id)

    //devolver la promesa
    return new Promise((resolve, reject) => {
        if (post) {
            resolve(post);
        }else{
            reject(" No se pudo encontrar el id" + id)
        }
    })
},
 findPostById(1)
 .then((post) => console.log(post))
 .catch((error) => console.log(error))
 .finally( () => console.log('Fin de la promesa'))