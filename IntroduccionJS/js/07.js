// Objetos = Destructuring de dos o mas objetos

const producto = {
    nombre : 'Tablet',
    precio : 300,
    disponible : false
 }

 const cliente = {
    nombre : 'Hugo',
    premium : true
    
}

 /*const carrito = {
    cantidad: 1,
    ...producto  // Spread Operator
 }
console.log(carrito)*/

const nuevoObjeto = {
    producto, 
    cliente
}
console.log(nuevoObjeto)

const nuevoObjeto2 = Object.assign(producto, cliente)
console.log(nuevoObjeto2)