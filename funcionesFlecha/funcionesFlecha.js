let funcion = () =>{
    console.log('Saludos funcion flecha');
}

let funcionredu = () => console.log('Funcion Flecha')

const funcionReturn = () => {
    return 'Hola Return'
}

const funcionReturnRedu = () => 'Hola Return Reducido'

console.log(funcionReturn());

const regresaObjeto = () => ({nombre: 'Maicol'});
console.log(regresaObjeto());

const funcionParametro = mensaje => console.log(mensaje);
funcionParametro('Hola como vamos');