//spreadOperator


//Antes
const numeros=[1,2,3]
const nuevosNumeros = numeros.concat([4,5,6])

console.log(nuevosNumeros);

//Ahora
const nuevosNumerosSugar=[...numeros,4,5,6,7]

//Destructuring Array

//Antes
const colores=['Rojo','Violeta','Verde']

const rojo=colores[0]

//ahora
const [primero,segundo,tercero]=colores;

//destructurin de objetos
//Antes
const persona={
    nombre:'Laura',
    ciudad:'Comodoro Rivadavia',
    mail:'lala@lala.com',
    edad:35
}

const nombre=persona.nombre;
const {nombre:userName,ciudad,edad}=persona;

//Operador Ternario
let mensaje;
if(edad>18){
    mensaje="Ya podes ir al casino"
}
else{
    mensaje="anda a la matine"
}

const mensajeSugar = edad > 18 ? "ya podes ir al casino" : "anda a la matine"

//ArrowFunction
function sumar(a,b){
    return a+b
}

const sumarArrow=(a,b)=>{
    return a+b
}
const sumarSugar= (a,b) => a+b
