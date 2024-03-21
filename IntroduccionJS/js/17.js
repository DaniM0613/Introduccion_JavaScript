

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
const numeros = [10, 20, 30]

// FILTER = Nos sirve para sacar un elemento de un arreglo y tambien funciona en Strings y Numeros


/*// Ejemplo con arrow function 
const nuevoArray = tecnologias.filter((tech) => tech !== 'HTML')
console.log(nuevoArray)*/



/*// Ejemplo con function y un condicion
const tecnologias2 = tecnologias.filter(function(tech){
    if(tech !== 'HTML'){
        return tech 
    }
    console.log(tecnologias2)
})*/

// INCLUDES 
/*const resultado = tecnologias.includes('CSS')
console.log(resultado)*/

// SOME - Devuelve si al menos una cumple la condicion
//const resultado = numeros.some(numero => numero > 15)


// FIND = Devuelve el primer elemnto que cumple una condicion
//const resultado = numeros.find(numero => numero > 15)

// EVERY = Retorna true o false si todos cumple la condicion
//const resultado = numeros.every(numero => numero > 15)

// REDUCE = Retorna un acumulado del total
const resultado = numeros.reduce((total, numero) =>  total + numero, 0)

/*const numeros = [10, 20, 30]
const resultado = numeros.filter(numero => numero !== 10)*/

console.log(resultado)


