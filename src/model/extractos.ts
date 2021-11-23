import { Productos } from "./productos";
import { Schema, createConnection } from "mongoose";
const connectio=createConnection('mongodb+srv://Lucas:Salmeron1@cluster0.athzv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
);
const autoIncrement = require("mongoose-auto-increment");

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

  autoIncrement.initialize(connectio);
  Extractoschema.plugin(autoIncrement.plugin, {model:"Extracto" , field:"id_p"});
  
  export const ExtractModel: Extracto | any = connectio.model<Extracto>(
    "productos",
    Extractoschema
  );
  