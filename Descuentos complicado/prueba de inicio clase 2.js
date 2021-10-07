//------- Valores y variables
// Responde las siguientes preguntas en la sección de comentarios:

// ¿Qué es una variable y para qué sirve?
    //Espacio en memoria que guarda un valor especifico
// ¿Cuál es la diferencia entre declarar e inicializar una variable?
    //Al inicial una variable le damos un valor, y al declararla motramos que existe
// ¿Cuál es la diferencia entre sumar números y concatenar strings?
    //Los strings son de tipo texto no pueden tener operaciones matematicas entre ellos
    // a diferencia de los numeros
// ¿Cuál operador me permite sumar o concatenar?
    // Lo hacemos con el signo de suma +

    // Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

    // Nombre = string
    // Apellido = string
    // Nombre de usuario en Platzi = string
    // Edad = numero 
    // Correo electrónico = string
    // Mayor de edad = bolean
    // Dinero ahorrado = numero
    // Deudas = numero


//Traduce a código JavaScript las variables del ejemplo anterior y deja tu 
//código en los comentarios.

let Nombre = Nicolas;
let Apellido = Quinn;
let NombreDeUsuarioEnPlatzi = nicolexdigital;
let Edad = 4;
let CorreoElectrónico = nicolexdigital;
let MayorDeEdad = true ;
let DineroAhorrado = 456;
let Deudas = 212;

// Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
//Nombre completo (nombre y apellido)
let miNombre = () => {
    let nombre = "Nicolás Quiñonez";
    let apellidos = "Quiñonez Fernandez";
    console.log (`Hola! Mi nombre es ${nombre} ${apellidos}`)
}
miNombre ();
//Resultado: Hola! Mi nombre es Nicolás Quiñonez Quiñonez Fernandez

//Dinero real (dinero ahorrado menos deudas)
let dineroDisponible = () => {
    let balance = 540;
    let deuda = 320;
    let dineroReal = balance - deuda;
    console.log ("Cuento con un capital de " + (dineroReal) + " despues de pagar mis deudas");
}
dineroDisponible();
//Resultado: Cuento con un capital de 220 despues de pagar mis deudas

//------- Funciones

// Responde las siguientes preguntas en la sección de comentarios:

// ¿Qué es una función?
    // es un procedimiento que correspone a instrucciones y parametros
// ¿Cuándo me sirve usar una función en mi código?
    //cuando quiero ejecutar una tarea con parametros determinados
// ¿Cuál es la diferencia entre parámetros y argumentos de una función?
    //Los parametros son los lineamientos de mi funcion, mientras que los argumenos son 
    //variables que puedo introducir a mi funcion para que los tome en cuenta, pero no son
    //permanentes ni determinantes en esta


// Convierte el siguiente código en una función, pero, cambiando cuando sea necesario 
//las variables constantes por parámetros y argumentos en una función:

//Ejemplo 
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

//Mi ejercicio
const llamame = () => {
    const name = "Juan David";
    const lastname = "Castro Gallego";
    const nickname = "juandc";
    const completeName = name + lastname;
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}
llamame ();
//Resultado: Mi nombre es Juan DavidCastro Gallego, pero prefiero que me digas juandc.

//------- Condicionales

// Responde las siguientes preguntas en la sección de comentarios:

// ¿Qué es una condicional?
    //una instruccion que se ejecutara solo si una condicion se cumple
// ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
    //If, else if, switch.
// ¿Puedo combinar funciones y condicionales?
    //Por supuesto que si. Suele haber mucha conbinacion de estas

    //Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

    const tipoDeSuscripcion = "Basic";
    
    switch (tipoDeSuscripcion) {
       case "Free":
           console.log("Solo puedes tomar los cursos gratis");
           break;
       case "Basic":
           console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
           break;
       case "Expert":
           console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
           break;
       case "ExpertPlus":
           console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
           break;
    }

//Mi ejemplo
alert ("¿Cual es tu suscripcion en Platzi?");
var suscripcion = prompt ("Free es 1, Basic es 2, Expert es 3, ExpertPlus es 4");

tipoDeSuscripcion (suscripcion); 

function tipoDeSuscripcion () {
    let free = 1;
    let basic = 2;
    let expert = 3;
    let expertPlus = 4;
        
    if (suscripcion==free){
        console.log("Solo puedes tomar los cursos gratis");
    }else if (suscripcion==basic){
        console.log("Puedes tomar todos los cursos por un mes");
    }else if (suscripcion==expert){
        console.log("Puedes tomar todos los cursos durante un año");
    }else if(suscripcion==expertPlus){
        console.log("Tu y tu amigo toman todos los cursos por un año");    
    }
}
tipoDeSuscripcion (suscripcion); 
// Comprobable en: https://jsconsole.com/

//------- Ciclos

//--
function perritoSumador (i) {
    while (i < 5) {
        i = i+1;
        console.log("El valor de i es: " + i);
    }
}
perritoSumador(2); 

//--
function avispero (i){
    while (i >= 2){
        i = i-1;
        console.log("El valor de i es: " + i);
    }
}

avispero(40)
//--

let pregunta = prompt ("Cuanto es 2 + 2")

respondeBien(pregunta)

function respondeBien (){
    if (!(pregunta == 4)){
        while (pregunta != 4){
            console.log("trata de nuevo");
            return respondeBien(pregunta);
        } 
    }else if(pregunta == 4){
        console.log("Muy bien! Sabes sumar");
    }
}

let solucion = 0
do{
    solucion = Number(prompt('Cuanto es 2+2?'))
    console.log("Intenta de nuevo");
}while(solucion!==4)
if (solucion == 4){
    console.log("Sabes sumar!");
}

//------- Listas


// Crea una función que pueda recibir cualquier 
//array como parámetro e imprima su primer elemento.

const perritos = ["Abril", "Avellana", "Tomas", "Pipi"]

miPrimerPerrito(perritos);

function miPrimerPerrito () {
    console.log(`Tengo ` + perritos.length + ` perritos`)
    console.log(`Mi primer perrito es ` + perritos[0])
}
//Resultado: Tengo 4 perritos. Mi primer perrito es Abril

//Crea una función que pueda recibir cualquier array 
//como parámetro e imprima todos sus elementos uno por uno 
//(no se vale imprimir el array completo).

console.log("Estos son mis perritos");

const perritos = ["Abril", "Avellana", "Tomas", "Pipi"]

function todosMisPerritos () {
    for (let i = 0; i < perritos.length; i++ ){
        let posicion = i + 1;
        console.log(`Mi perrito numero ` + posicion + ` se llama ` + perritos[i]);
    }
}
todosMisPerritos (); 
//Resultado: Estos son mis perritos
// Mi perrito numero 1 se llama Abril
// Mi perrito numero 2 se llama Avellana
// Mi perrito numero 3 se llama Tomas
// Mi perrito numero 4 se llama Pipi

//Crea una función que pueda recibir cualquier objeto como parámetro 
//e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

console.log("Estos son mis pokemones");

const picachu = {
    nombre : "picachu",
    años: 4,
    tipo: "electro",
    color: "amarillo"
}

const torino = {
    nombre : "torino",
    años: 7,
    tipo: "tierra",
    color: "cafe"
}
const pecueca = {
    nombre : "pecueca",
    años: 2,
    tipo: "oloroso",
    color: "verde"
}

function llamaMiPokemon (i) {
    console.log("mi pokemon se llama " + i.nombre + " tiene " + i.años + 
    " años, es de tipo " + i.tipo + " y su color es " + i.color);
}

llamaMiPokemon(picachu);
llamaMiPokemon(pecueca);
llamaMiPokemon(torino);

//Resultado: Estos son mis pokemones
// mi pokemon se llama picachu tiene 4 años, es de tipo electro y su color es amarillo
// mi pokemon se llama pecueca tiene 2 años, es de tipo oloroso y su color es verde
// mi pokemon se llama torino tiene 7 años, es de tipo tierra y su color es cafe