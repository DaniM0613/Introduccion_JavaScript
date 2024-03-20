// OBJETOS - Manipulacion

const producto = {
   nombre : 'Tablet',
   precio : 300,
   disponible : false
}

// No te permite añadir, eliminar, modificar ninguna propiedad dentro del objeto
Object.freeze(producto)


// Te permite modificar las propiedades existentes, pero no te perminte agregar o eliminar ninguna propiedad
Object.seal(producto)


 // Reescribir un valor
producto.disponible = true

// Sino existe una propiedad lo va a añadir
producto.imagen = 'imagen.jpg'

// Eliminar una propiedad
delete producto.precio

 console.log(producto)