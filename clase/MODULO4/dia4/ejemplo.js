const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
 
// *************************
// *** SEND HTTP REQUEST ***
// *************************
const sendHttpRequest = (method, url, data) =>
    {
        const promise = new Promise( (resolve, reject) =>
        {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.responseType = 'json';
 
            if (data) {
                xhr.setRequestHeader('Content-type', 'application/json');
            }
 
            xhr.onload = () =>
                {
                    if(xhr.status >= 400 ) {
                        reject(xhr.response);
                    } else {
                        resolve(xhr.response);
                    }
                };
 
            xhr.onerror = () =>
                {
                    reject("Hicimos la morición!!!");
                };
           
            xhr.send(JSON.stringify(data));
 
        } );
       
        return promise;
    };
 
// *************************
// ******* GET DATA ********
// *************************
const getData = () =>
    {
        // llamar a un api, con un método, una url y eventualmente datos
        sendHttpRequest('GET', 'https://reqres.in/api/users')
            .then( (responseData) =>
                {
                    console.log(responseData);
                });
    };
 
// *************************
// ******* SEND DATA *******
// *************************
const sendData = () =>  // El propósito de esta función es REGISTRARSE
    {
        // llamar a un api, con un método, una url y eventualmente datos
        sendHttpRequest('POST', 'https://reqres.in/api/register',
            {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            })
    
 .then( (responseData) => {
     console.log(responseData)
 })
 .catch((err) => {
     console.log(err)
 });
};
// *************************
// *************************
// Este botón me permitirá recibir información
getBtn.addEventListener('click', getData);
// Este botón me permitirá registrarme, enviando datos para ello
postBtn.addEventListener('click', sendData);