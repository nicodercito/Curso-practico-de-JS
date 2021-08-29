//Codigo del cuadrado

console.group("Cuadrados");
const ladoCuadrado = 5;

console.log("Los lados del cuadrado miden : " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;

console.log("Los lados del perimetro miden : " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("Los lados del perimetro miden : " + areaCuadrado + " cm");
console.groupEnd()
//Codigo del triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTriangulo3 = 4;
const alturaTriangulo = 5.5;


console.log("Los lados del triangulo miden : " 
    + ladoTriangulo1 + "cm "
    + ladoTriangulo2 + "cm "
    + ladoTriangulo3 + "cm "
);
console.log("La altura del triangulo miden : " + alturaTriangulo + " cm");

const perimetrTriangulo = ladoCuadrado * 4;

console.log("el perimetro del triangulo miden : " + perimetrTriangulo + " cm");

const areaTriangulo = (alturaTriangulo * ladoCuadrado) / 2;

console.log("El area del triangulo miden : " + areaTriangulo + " cm");
console.groupEnd()

//Codigo del circulo
console.group("Circulos");
const radioCirculo =4;
const diametro = radioCirculo * 2;
const pi = Math.PI;

const perimetroCirclo = diametro * pi;
const areaCirculo = (radioCirculo *radioCirculo)* pi;

console.log("el radio del circulo miden : " + radioCirculo + " cm");
console.log("el diametro del circulo miden : " + diametro + " cm");
console.log("PI es: " + pi);
console.log("el perimetro del circulo miden : " + perimetroCirclo + " cm");
console.log("el area del circulo miden : " + areaCirculo + " cm^2");
console.groupEnd()