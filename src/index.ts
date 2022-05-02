/*3- Escriba un programa que pida al usuario 
dos numeros enteros, y luego retorne la suma 
de todos los numeros que estan entre ellos 
 */
//En este espacio declaro algunas variables
let i: number;
let suma: number = 0;
let valor: number = 0;
let intercambio: number = 0;
let rango: number = 0;
//En este espacio desarrollo mi funcion

function suma_entre_numeros(entero1: number, rango: number) {
  for (i = 0; i <= rango; i++) {
    suma = suma + entero1;
    entero1 = entero1 + 1;
  }
  return suma;
}

function evaluar_numero_entero() {
  while (valor % 1 !== 0 || valor <= 0) {
    valor = Number(prompt("El numero ingresado no es válido. REINGRESAR: "));
  }

  return valor;
}

//Ingreso el primer numero y evaluo si es entero
let entero1: number = Number(prompt("Ingrese el primer numero: "));

valor = entero1;

evaluar_numero_entero();
entero1 = valor;

//Ingreso el segundo numero
let entero2: number = Number(prompt("Ingrese el segundo numero numero: "));
valor = entero2;

evaluar_numero_entero();
entero2 = valor;

//comparo los numeros para definir cual va a ser mi limite inferior
if (entero1 > entero2) {
  intercambio = entero2;
  entero2 = entero1;
  entero1 = intercambio;
}
rango = entero2 - entero1;

suma_entre_numeros(entero1, rango);
console.log(
  "La suma de los numeros entre " + entero1 + " y " + entero2 + " es " + suma
);
