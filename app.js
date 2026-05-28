// Pedir 3 numeros al usuario
let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));
let num3 = parseInt(prompt("Ingrese el tercer número:"));

// Guardarlos en un array
let numeros = [num1, num2, num3];

// Verificar si todos son iguales
if (num1 === num2 && num2 === num3) {
    console.log("Los tres números son iguales.", numeros);
} else {
    // Ordenar de mayor a menor 
    let mayorMenor = [...numeros].sort((a, b) => b - a);
    console.log("De mayor a menor:", mayorMenor);
    // Ordenar de menor a mayor
    let menorMayor = [...numeros].sort((a, b) => a - b);
    console.log("De menor a mayor:", menorMayor);
}