//Código de cuadrado
console.group("Cuadrados")
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} unidades`);

const perimetro = ladoCuadrado * 4;
console.log(`El perimetro del cuadrado es: ${perimetro} unidades`);

const area = ladoCuadrado * ladoCuadrado;
console.log(`El área del cuadrado es: ${area} unidades cuadradas`);

console.groupEnd()
//Código del triángulo

console.group("Triángulo")
const lado1T = 6;
const lado2T = 6;
const baseT = 4;
const alturaT = 5.5;
console.log(`Los lados del triángulo son: \n lado1: ${lado1T} unidades \n lado2: ${lado2T} unidades \n base: ${baseT} unidades `);

const perimetroTriangulo = lado1T + lado2T + baseT;
console.log(`El perimetro del triángulo son: ${perimetroTriangulo} unidades`);

const areaT = (baseT * alturaT)/2;
console.log(`El área del triángulo es: ${areaT} unidades cuadradas`);

console.groupEnd();

//Código del circulo

console.group("Circulo")

const radio = 3;
const diametro = 2 * radio;
const pi = 3.1416

console.log(`El radio del circulo es: radio: ${radio} unidades `);
console.log(`El diámetro del circulo es: radio: ${diametro} unidades `);

const circunferencia = 2*radio*pi;
console.log(`El circunferencia del circulo son: ${perimetroTriangulo} unidades`);

const areaC = 2 * (radio * radio * pi);
console.log(`El área del circulo es: ${areaC} unidades cuadradas`);

console.groupEnd();