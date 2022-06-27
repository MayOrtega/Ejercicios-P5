const objeto1 = {
    lenguaje: 'Javascript',
    framework: 'React'
};

// const {lenguaje,framework} = objeto1;

const func1 = ( {lenguaje,framework} ) => lenguaje + ' '+ framework;

console.log(func1(objeto1));

//Ejemplo con array
const arr1 = [1,2,3,4,5]

const [uno, dos, tres, cuatro, cinco] = arr1;

console.log(dos);