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

let gerente = new Gerente('Maicol', 500, 'Riesgos');

console.log(gerente.obtenerDetalles());