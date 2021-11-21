import { Schema, createConnection } from "mongoose";
const autoIncrement = require("mongoose-auto-increment");
const connection = createConnection(
  "mongodb+srv://Lucas:Salmeron1@cluster0.athzv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

const connectio = createConnection(
  "mongodb+srv://Lucas:Salmeron1@cluster0.athzv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);
//Productos

export class Productos {
  private id_p?: number;
  private Nombre: string;
  private precio: number;
  protected thc: number;
  protected cbd: string;
  protected stock: boolean;
  protected cod_proveedor: number;
  protected type?: string;
  protected Cosecha: Date;

  constructor(
    Nombre: string,
    precio: number,
    thc: number,
    cbd: string,
    stock: boolean,
    cod_proveedor: number,
    Cosecha: Date,
    type?: string,
    id_p?: number
  ) {
    this.id_p = id_p;
    this.Nombre = Nombre;
    this.precio = precio;
    this.thc = thc;
    this.cbd = cbd;
    this.stock = stock;
    this.cod_proveedor = cod_proveedor;
    this.Cosecha = Cosecha;
    this.id_p = id_p;
    this.type = type;
  }
  get NombreProducto() {
    return this.Nombre;
  }

  get id() {
    return this.id_p;
  }

  get _precio() {
    return this.precio;
  }

  get _stock() {
    return this.stock;
  }

  get tipo() {
    return this.type;
  }

  get_products() {
    const promise = new Promise<Array<any>>(async (resolve, reject) => {
      let query : Array<any> = await plantModel.find();
      if (query != null) {
        resolve(query);
      } else {
        reject(console.log("no hay ningun producto"));
      }
    });
    return promise;
  }

  totalprice (grams : number){
    return this._precio * grams}

  get cosecha() {
    var opciones :any = { year: 'numeric', month: 'short', day: 'numeric' };
    var fecha = new Date(this.Cosecha)
      .toLocaleDateString('es',opciones)
      .replace(/ /g,'-')
      .replace('.','')
      .replace(/-([a-z])/, function (x) {return '-' + x[1].toUpperCase()});
    return fecha
  }
}

//subaclases de producto.

interface Genetica {
  tipo: string;
  Predominancia: string;
}

export class Plantas extends Productos {
  private Genetica: Genetica;
  private humedad: Number;
  private Apta_para_extracto: boolean;

  constructor(
    Nombre: string,
    precio: number,
    thc: number,
    cbd: string,
    stock: boolean,
    cod_proveedor: number,
    Genetica: Genetica,
    humedad: Number,
    Apta_para_extracto: boolean,
    Cosecha: Date,
    id_p?: number,
    type?: string
  ) {
    super(Nombre, precio, thc, cbd, stock, cod_proveedor, Cosecha, type, id_p);
    this.Genetica = Genetica;
    this.humedad = humedad;
    this.Apta_para_extracto = Apta_para_extracto;
  }

  get tipo() {
    return this.Genetica.tipo;
  }

  get Predominancia() {
    return this.Genetica.Predominancia;
  }

  creator(
    Nombre: string,
    precio: number,
    thc: number,
    cbd: string,
    stock: boolean,
    cod_proveedor: number,
    genetica: Genetica,
    humedad: number,
    apta_para_extracto: boolean,
    Cosecha: Date,
    id_p?: number,
    type?: string
  ): Plantas {
    if (id_p == undefined) {
      return new Plantas(
        Nombre,
        precio,
        thc,
        cbd,
        stock,
        cod_proveedor,
        genetica,
        humedad,
        apta_para_extracto,
        Cosecha
      );
    } else {
      return new Plantas(
        Nombre,
        precio,
        thc,
        cbd,
        stock,
        cod_proveedor,
        genetica,
        humedad,
        apta_para_extracto,
        Cosecha,
        id_p,
        type
      );
    }
  }
  mostrar(){
  console.log(
    `${this.id}.-${this.NombreProducto} , precioG= ${this._precio}€ , stock= ${this._stock} , genetica= ${this.tipo} , ${this.Predominancia} ,  Fecha = ${this.cosecha}`
  );
}
totalprice(gramos: number){
  if(this.Apta_para_extracto){
return ((this._precio * gramos)*1.25)
  }else{
return this._precio * gramos
  }
}
}

// Objeto vacio para ejecutar funciones.

const genetica: Genetica = {
  tipo: "",
  Predominancia: "",
};

export const plantFunc = new Plantas(
  "",
  0,
  0,
  "",
  false,
  0,
  genetica,
  0,
  false,
  new Date()
);

//subclase de extracto

const PlantaSchema = new Schema({
  Nombre: { type: String },
  precio: { type: Number },
  thc: { type: Number },
  cbd: { type: String },
  cosecha: { type: Date },
  stock: { type: Boolean },
  cod_proveedor: { type: Number },
  genetica: { type: Object },
  humedad: { type: Number },
  Apta_para_extracto: { type: Boolean },
  N_apaleo: { type: Number },
  mutable: { type: Boolean },
  variedad: { type: String },
  id_p: { type: Number },
  type: { type: String },
});

//plugin

autoIncrement.initialize(connection);

PlantaSchema.plugin(autoIncrement.plugin, {model:"Plantas" , field:"id_p"});

//modelos

export const plantModel: Plantas | any = connection.model<Plantas>(
  "productos",
  PlantaSchema
);


