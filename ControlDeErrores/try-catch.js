'use strict'

// try{
//    let x = 10
//    throw 'Mi error'
// }catch(error){
//     console.log(error);
// }
// finally{     //Siempre se ejecuta
//     console.log('Termina la revision del error');
// }


let resultado = '8';

try{
    if(isNaN(resultado)) throw 'No es un numero'
    else if(resultado === '') throw 'Es una cadena vacia'
    else if(resultado >= 0) throw 'Es un numero positivo'

}catch(error){
    console.log(error)
    // console.log(error.name)
    // console.log(error.message)
}