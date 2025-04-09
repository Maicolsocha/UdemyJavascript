function imprimir(mensaje){
    console.log(mensaje)
}

function sumar(opr1, opr2, callback){
    let res = opr1 + opr2;
    callback(res);
}

sumar(1, 2, imprimir);