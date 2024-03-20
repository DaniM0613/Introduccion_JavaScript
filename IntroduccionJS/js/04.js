// OBJETOS 
/* Un objeto es una colleciones de propiedades y una propiedad es una asociacion etre un valor y una clave */

// De esta manera es como generar objetos
/*const producto = {
   nombre : 'Tablet',
   precio : 300,
   disponible : false
}*/

// De esta manera es como accedemos a ellos (objetos)
/*console.log(producto)
console.table(producto)
console.log(producto.nombre)*/

// DESTRUCTURING
/*const { nombre, precio, disponible } = producto
console.log(nombre)
console.log(precio)
console.log(disponible)*/

// OBJECT LITERAL ENHACEMENT
const autenticado = true
const usuario = 'Juan'

const nuevoObjeto = {
    autenticado : autenticado,
    usuario : usuario
}
console.log(nuevoObjeto)