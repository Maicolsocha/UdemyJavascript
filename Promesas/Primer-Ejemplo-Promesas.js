let promesa = new Promise((resolve, rejected)=>{
    let expresion = true;
    if(expresion)
        resolve('Correcto')
    else
        rejected('Se producjo un error')
});

// promesa.then(valor => console.log(valor), error => console.log(error));
// promesa.then(valor => console.log(valor)).catch(error => console.log(error))

let nuevaPromesa = new Promise((resolve) => {
    setTimeout(()=> resolve('saludos Con promesa'),3000)
});
// nuevaPromesa.then(valor => console.log(valor));

//async indica que una funcion, regresa una promesa

async function miFuncionConPromesa(){
    return 'Promesa con async'
}

//miFuncionConPromesa().then(valor => console.log(valor))

// async/await

async function funcionConPromesaYAwait(){
    let miPromesa = new Promise( resolver => {
        resolver('Promesa con await')
    });

    console.log(await miPromesa);
}


funcionConPromesaYAwait();

//Promesas, await, async y setTimeout

async function funcionConPromesaAwaitTimeout() {

    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver('Promesa con await y timeout'), 3000);
    });

    console.log(await miPromesa);
    console.log('fin funcion');
}

funcionConPromesaAwaitTimeout()