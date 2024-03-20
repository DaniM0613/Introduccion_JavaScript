

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']


/*// AGREGA NUEVOS ELEMENTOS A NUESTRO ARREGLO
const nuevoArreglo = [...tecnologias, 'Next.js']
console.table(nuevoArreglo)*/



/*// ELIMINA UN ELEMENTO A NUESTRO ARREGLO
const tecnologias2 = tecnologias.filter(function(tech){
    if(tech !== 'HTML'){
        return tech
    }
})*/



//MODIFICA LOS ELEMENTOS DE UN ARREGLO
const tecnologias2 = tecnologias.map(function(tech) {
    if(tech === 'Node.js'){
        return 'Nest.js'
    } else {
        return tech
    }
})

console.log(tecnologias2)