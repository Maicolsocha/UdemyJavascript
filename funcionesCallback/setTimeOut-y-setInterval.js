function funcionCallback(){
    console.log('Saludo asincrono despues de varios segundos')
}

setTimeout(funcionCallback, 3000);

setTimeout(function(){console.log('Saludo')}, 5000);

setTimeout(()=> console.log('Funcion Flecha Time Out'), 6000);




