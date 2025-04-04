class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        let result = `Nombre ${this._nombre} \n Sueldo: ${this._sueldo}`
        return result
    }
}


class Gerente extends Empleado{
    constructor(nombre,sueldo,departamento){
        super(nombre,sueldo)
        this._departamento = departamento;
    }

    obtenerDetalles(){
        let result = `${super.obtenerDetalles()} \n Departamento: ${this._departamento}`
        return result
    }
}

function imprimir(tipo){
    console.log(tipo.obtenerDetalles()); //polimorfismo
    if(tipo instanceof Gerente){
        console.log('Esta es de clase Gerente')
    }
}
let gerente = new Gerente('Maicol', 500, 'Riesgos');

imprimir(gerente);

let empleado = new Empleado('Manuel', 1000);

imprimir(empleado);