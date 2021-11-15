import { leerTeclado } from '../vistas/lecturaTeclado'

export const menuLogin = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Crear Usuario')
    console.log('2.- login')
    console.log('3- Salir.')
    n = parseInt( await leerTeclado('--OPCIÓN--') )
    return n
}

export const sessionMenu = async () => {
    let n: string
    console.log('¿Deseas continuar con la sesion?')
    console.log('s/n')
    n = await leerTeclado('--OPCIÓN--') 
    return n
}

export const UserActive = async () => {
    let n: number
    console.log('\n')
    console.log('0.- ver lista de productos')
    console.log('1.- Añadir Producto al carro')
    console.log('2.- eliminar productos del carro')
    console.log('3.- ver los productos del carro')
    console.log('4.- ¿Cuanto falta para que llegue mi pedido?')
    console.log('5.- ¿ver todos mis pedidos hasta el momento?')
    console.log('6.- Finalizar compra')
    console.log('7- Salir.')
    n = parseInt( await leerTeclado('--OPCIÓN--') )
    return n
}

