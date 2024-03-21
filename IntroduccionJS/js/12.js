

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Nest.js', 'TypeScript']

/*for(let i = 0; i < tecnologias.length; i++){
    console.log(tecnologias [i])
}*/

// FOREACH = no te genera un arreglo nuevo (solo ejecuta una funcion dada por la cantidad de vece que tiene un arreglo nuevo)
tecnologias.forEach(function(teach){
    console.log(teach)
})



// MAP = Te genera un nuevo arreglo si itera pero su caracteriztica principal es que genera un nuevo arreglo (Te genera un arreglo nuevo en base condicion o funcion que le estamos dando)
 const arrayMap = tecnologias.map(function(tech) {
    return tech
})



// FOR ...  OF
for(let tech of tecnologias){
    console.log(tech)
}

// console.log(arrayMap)