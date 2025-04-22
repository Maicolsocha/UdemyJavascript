function funcionCallback(){
    console.log('Saludo asincrono despues de varios segundos')
}

setTimeout(funcionCallback, 3000);

setTimeout(function(){console.log('Saludo')}, 5000);

setTimeout(()=> console.log('Funcion Flecha Time Out'), 6000);




let reloj = () =>{
    let fecha = new Date();
    console.log(`${fecha.getHours()} : ${fecha.getMinutes()} : ${fecha.getSeconds()}`)
}

setInterval(reloj, 1000);