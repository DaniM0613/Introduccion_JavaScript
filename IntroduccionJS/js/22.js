// Optional chaining ( ? )
const alumno = {
    nombre: 'Simonne',
    clase: 'Programacion 1',
    aprobado: true,
    examenes: {
        examen1: 90
    }
}
console.log(alumno.examenes?.examen1)
console.log('Despues de ALUMNO')

// Nullish coolescing operator ( ?? ) Es un operador logico que retorna el operando del lado derecho cuando el del lado izquiero es null o undefinde

const pagina = 10 ?? 1
console.log(pagina)

