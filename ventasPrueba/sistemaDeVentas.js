class Producto{

    static contadorProductos = 0;
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }
    toString(){
        return `ID:${this._idProducto}.  ${this._nombre} Precio: ${this._precio}`
    }
}


class Orden{
    static contadorIdOrden = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorIdOrden;
        this._productos = [];
        //this._contadorProductosAgregados = 0;
        
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(productos){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(productos);
            //this._productos[this._contadorProductosAgregados++] = productos;     //Otra forma de resolver el problema
        }else{
            console.log("El maximo de productos por orden son " + MAX_PRODUCTOS);
        }
    }



    

    calcularTotal(){
        let totalVenta = 0;
        for(let productos of this._productos){
            totalVenta += productos.precio;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += '\n {' + producto.toString() + '} ';
        }
        console.log(`Orden: ${this._idOrden}  `)
    }

   
}

let producto1 = new Producto('Pantalon',25000);
let producto2 = new Producto('Pantalon',25000);


let orden1 = new Orden();
orden1.agregarProducto(producto1);
console.log(orden1)