// Manipular elementos HTML con JS

// puedes asignalor directamente
const heading = document.querySelector('.heading')

// tenemos que pasar la posicion o interar sobre los elementos para poder manipularlos
const enlaces = document.querySelectorAll('.navegacion a')

heading.textContent = 'Un nuevo heading...'

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Un nuevo valor...'

enlaces.forEach(enlace => enlace.textContent = 'Nuevo Enlace')