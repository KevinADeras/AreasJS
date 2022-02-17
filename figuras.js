//Código de cuadrado

const perimetroCuadrado = (lado)=> lado * 4;
const areaCuadrado = (lado) => lado ** 2;

//Código del triángulo

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * alturaT)/2;

//Código del circulo

const pi = Math.PI;
const circunferencia = (radio) => radio * 2 * pi;
const areaCirculo = (radio) => (radio ** 2) * pi;

//--------------------------------------------
//Interacción con HTML

function cPerimetroCuadrado(){
    const valorInput = document.getElementById("inputCuadrado").value;
    alert(perimetroCuadrado(valorInput));
}

function cAreaCuadrado(){
    const valorInput = document.getElementById("inputCuadrado").value;
    alert(areaCuadrado(valorInput));
}

