const saldo = 1000
const pagar = 500
const tarjeta = false

/**
 * Logical Or y Logical And
 * || Or - Revisa que al menos una se cumpla
 * && And - Revisa que todas se cumplan
 */

if(saldo > pagar && tarjeta){
    console.log('Si, puedes pagar')
} else {
    console.log('No, no puedes pagar')
}