let url = "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";


const buscarEnApi = async () => {

const respuesta =   await fetch(url);

const commits = await respuesta.json()
    
alert(respuesta);
}

