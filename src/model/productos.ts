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
  protected id_p?: number;
  protected Nombre: string;
  protected precio: number;
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

export class Extracto extends Productos {
  private N_apaleo: number;
  private mutable: boolean;
  private variedad: string;

  constructor(
    Nombre: string,
    precio: number,
    thc: number,
    cbd: string,
    stock: boolean,
    cod_proveedor: number,
    Cosecha: Date,
    N_apaleo: number,
    mutable: boolean,
    variedad: string,
    id_p?: number,
    type?: string
  ) {
    super(Nombre, precio, thc, cbd, stock, cod_proveedor, Cosecha, type, id_p);
    this.N_apaleo = N_apaleo;
    this.mutable = mutable;
    this.variedad = variedad;
  }

  get _mutable(){
    return this.mutable
  }

  get apaleo() {
    return this.N_apaleo
  }

  get _variedad(){
    return this.variedad
  }

  creator(
    Nombre: string,
    precio: number,
    thc: number,
    cbd: string,
    stock: boolean,
    cod_proveedor: number,
    Cosecha: Date,
    N_apaleo: number,
    mutable: boolean,
    variedad: string,
    id_p?: number,
    type?: string
  ) {
    if (id_p == undefined) {
      return new Extracto(
        Nombre,
        precio,
        thc,
        cbd,
        stock,
        cod_proveedor,
        Cosecha,
        N_apaleo,
        mutable,
        variedad
      );
    } else {
      return new Extracto(
        Nombre,
        precio,
        thc,
        cbd,
        stock,
        cod_proveedor,
        Cosecha,
        N_apaleo,
        mutable,
        variedad,
        id_p,
        type
      );
    }
  }
  mostrar(){
    console.log(
      `${this.id}.-${this.NombreProducto} , varieda=${this._variedad} , precioG= ${this._precio}€ , Potencia ={thc = ${this.thc}% , cbd= ${this.cbd}%} , mutable= ${this._mutable} , N_apaleo= ${this.apaleo} , stock= ${this._stock} ,  Fecha = ${this.cosecha}`
    );
  }
}

//objeto vacio

export const ExtractFunc = new Extracto(
  "",
  0,
  0,
  "",
  false,
  0,
  new Date(),
  0,
  false,
  ""
);

//esquemas

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

const Extractoschema = new Schema({
  Nombre: { type: String },
  precio: { type: Number },
  thc: { type: Number },
  cbd: { type: String },
  cosecha: { type: Date },
  stock: { type: Boolean },
  cod_proveedor: { type: Number },
  N_apaleo: { type: Number },
  mutable: { type: Boolean },
  variedad: { type: String },
  id_p: { type: Number },
  type: { type: String },
});

//plugin

autoIncrement.initialize(connection);

PlantaSchema.plugin(autoIncrement.plugin, {model:"Plantas" , field:"id_p"});
Extractoschema.plugin(autoIncrement.plugin, {model:"Extracto" , field:"id_p"});

//modelos

export const ExtractModel: Plantas | any = connectio.model<Extracto>(
  "productos",
  Extractoschema
);

export const plantModel: Plantas | any = connection.model<Plantas>(
  "productos",
  PlantaSchema
);


