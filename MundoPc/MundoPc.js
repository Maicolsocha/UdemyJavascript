class DispositivoEntrada{
    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton: ${this._idRaton}
        -Tipo Entrada: ${this._tipoEntrada}
        -Marca: ${this._marca}
        --------------------------------------------------`
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }

    get idTeclado(){
        return  this._idTeclado;
    }

    toString(){
        return `Teclado: ${this._idTeclado}
        -Tipo Entrada: ${this._tipoEntrada}
        -Marca: ${this._marca}
        --------------------------------------------------`
    }
}

class Monitor{
    static contadorMonitor = 0;
    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitor;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }

    get tamaño(){
        return this._tamaño;
    }
    set tamaño(tamaño){
        this._tamaño = tamaño;
    }

    toString(){
        return `Monitor: ${this._idMonitor}
                Marca: ${this._marca}
                Tamaño: ${this._tamaño}`
    }
}

class Computadora{
    static contadorComputadora = 0;
    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadora;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get idComputadora(){
        return this._idComputadora;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    toString() {
        return `Computadora: ${this._idComputadora} /n Nombre: ${this._nombre} /n Monitor: ${this._monitor} /n Teclado: ${this._teclado} /n Raton: ${this._raton}`
    }

}

let raton1 = new Raton('USB', 'hyperX');
let raton2 = new Raton ('Bluetooth', 'Dell');

console.log(raton1.toString());
console.log(raton2.toString());

// --
let teclado1 = new Teclado('USB', 'RedDragon');
let teclado2 = new Teclado ('Bluetooth', 'HP');

console.log(teclado1.toString());
console.log(teclado2.toString());

// --
let monitor1 = new Monitor('Lg Ultragear', '28"');
let monitor2 = new Monitor ('Dell', '32"');

console.log(monitor1.toString());
console.log(monitor2.toString());

let computadora1 = new Computadora(1, monitor1, teclado1, raton1);

console.log(computadora1)
console.log(computadora1)
