//Codigo del cuadrado

console.group("Cuadrados");
const ladoCuadrado = 5;

// console.log("Los lados del cuadrado miden : " + ladoCuadrado + " cm");

function perimetroCuadrado (lado){
    return lado * 4;
} 

//console.log("Los lados del perimetro miden : " + perimetroCuadrado + " cm");

function areaCuadrado (lado) {
    return lado * lado;
}

//console.log("Los lados del perimetro miden : " + areaCuadrado + " cm");
console.groupEnd()
//Codigo del triangulo
console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const ladoTriangulo3 = 4;
// const alturaTriangulo = 5.5;


// console.log("Los lados del triangulo miden : " 
//     + ladoTriangulo1 + "cm "
//     + ladoTriangulo2 + "cm "
//     + ladoTriangulo3 + "cm "
//);
// console.log("La altura del triangulo miden : " + alturaTriangulo + " cm");

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
}

//console.log("el perimetro del triangulo miden : " + perimetrTriangulo + " cm");

function areaTriangulo (altura, base){
    return (base * altura) / 2;
}


function alturaTriangulo (lado1, base){
    return (Math.sqrt(lado1**2 - (base**2/4)));
}
// const areaTriangulo = (alturaTriangulo * ladoCuadrado) / 2;

// console.log("El area del triangulo miden : " + areaTriangulo + " cm");
console.groupEnd()

//Codigo del circulo
console.group("Circulos");
// const radioCirculo =4;
// const diametro = radioCirculo * 2;
const pi = Math.PI;

// const perimetroCirculo = diametro * pi;
// const areaCirculo = (radioCirculo *radioCirculo)* pi;

function diametroCirculo (radio){
    return radio * 2;
}

function perimetroCirculo (radio){
    const diametro = radio * 2;
    return diametro * pi;
}

function areaCirculo (radio){
    return (radio * radio) * pi;
}

// console.log("el radio del circulo miden : " + radioCirculo + " cm");
// console.log("el diametro del circulo miden : " + diametro + " cm");
// console.log("PI es: " + pi);
// console.log("el perimetro del circulo miden : " + perimetroCirculo + " cm");
// console.log("el area del circulo miden : " + areaCirculo + " cm^2");
console.groupEnd()


// Aqui vamos a interactuar con HTML


//Calculo de cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert (perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert (area);
}

//Calculo de triangulo

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputLado1");
    const valueL1 = parseFloat(input1.value);
    const input2 = document.getElementById("InputLado2");
    const valueL2 = parseFloat(input2.value);
    const inputB = document.getElementById("InputBase");
    const valueB = parseFloat(inputB.value);

    const perimetro = perimetroTriangulo(valueL1, valueL2, valueB);
    alert (perimetro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputLado1");
    const valueL1 = parseFloat(input1.value);
    const inputB = document.getElementById("InputBase");
    const valueB = parseFloat(inputB.value);
    console.log(valueL1);
    console.log(valueB);

    const area = areaTriangulo(valueL1, valueB);
    alert (area);
    console.log(areaTriangulo);
    console.log(area);
}

//Reto : Altura de triangulo isoceles
function calcularAlturaTriangulo(){
    const input1 = document.getElementById("InputLado1");
    const valueL1 = parseFloat(input1.value);
    const input2 = document.getElementById("InputLado2");
    const valueL2 = parseFloat(input2.value);
    const inputB = document.getElementById("InputBase");
    const valueB = parseFloat(inputB.value);

    if (valueL1 == valueL2){
        const alturaT = alturaTriangulo(valueL1, valueB);
        alert (alturaT);
    }else if (valueL1 != valueL2){
        alert ("Si los lados son diferentes, este no es un triangulo isoceles. Intenta de nuevo")
    }
}

//Calculo de circulo

function calcularDiametroCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert (diametro);
}

function CalcularPerimetroCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert (perimetro);
}

function CalcularAreaCirculo(){
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const area = areaCirculo(value);
    alert (area);
}