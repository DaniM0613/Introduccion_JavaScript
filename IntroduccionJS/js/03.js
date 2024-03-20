// Tipo de datos

// Undefined 
// typeof nos ayuda a saber que tipo de dato es la variable que estamos escribiendo
//let cliente 
//console.log( typeof cliente)

// STRINGS o Cadenas de texto
//const alumno = 'Juan'
// console.log(alumno)
// console.log(typeof alumno)

// const producto = 'Monito 49 Pulgadas'
// console.log(producto)
// console.log(typeof producto)

/* NUMBER
 const numero = 20.20
 const numero1 = 30
 const numero2 = -100

/*console.log(typeof numero)
console.log(typeof numero1)
console.log(typeof numero2)

console.log(numero + numero1)*/

// BigInt
/*const numeroGrande = BigInt(5865268615984651)
 console.log(numeroGrande)*/

// Boolean
/*const descuento = false 
console.log(typeof descuento)*/

// Null
// null se requiere que se asigne 
/*const descuento = null 
console.log(descuento)

// undefined esta creada pero no tiene ningun valor
let precio 
console.log(precio)*/

// SYMBOL
// Caracteriztica de los symbols que todos son iguales, ni auque los compares y tienen el mismo valor siempre retorna que son iguales. 
const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)
console.log(primerSymbol === segundoSymbol)
