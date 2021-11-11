import { Schema } from "mongoose";
const autoIncrement = require('mongoose-auto-increment');
import { connection } from "./clientes";

//Productos 

export class Productos {
    private id_p?: number;
    private Nombre: string;
    private precio: number;
    private thc: number;
    private cbd: string;
    private stock: boolean;
    private cod_proveedor: number;

    constructor( Nombre:string, precio: number, thc:number ,cbd:string , stock: boolean , cod_proveedor:number , id_p?:number){
        this.id_p=id_p;
        this.Nombre=Nombre;
        this.precio=precio;
        this.thc=thc;
        this.cbd=cbd;
        this.stock=stock;
        this.cod_proveedor=cod_proveedor;
        this.id_p=id_p;
    }   
}

//subaclases de producto.

export class Plantas extends Productos {

    private genetica:Genetica;
    private humedad:Number;
    private Apta_para_extracto: boolean;
    private type = "p";

    constructor(Nombre:string, precio: number, thc:number ,cbd:string , stock: boolean , cod_proveedor:number,genetica:Genetica,humedad:Number,Apta_para_extracto:boolean,id_p?:number){
        super(Nombre,precio,thc,cbd,stock,cod_proveedor,id_p)
        this.genetica=genetica;
        this.humedad=humedad;
        this.Apta_para_extracto=Apta_para_extracto
    }

}

interface Genetica {
    tipo: string;
    predominancia:string;
    }

    
const PlantaSchema = new Schema({
	_nombre: { type: String, unique: true },
	_apellidos: { type: String },
	_dni: { type: String },
	_nombreUsuario: { type: String },
	_Contraseña: { type: String },
	_pedidos: { type: Array },
	_gramos: { type: Array },
	_recibo: { type: Boolean },
	_status: { type: Boolean },
    type: {value:"p"}
})

PlantaSchema.plugin(autoIncrement.plugin, 'Plantas');
export const clientModel: Plantas | any = connection.model<Plantas>(
	'productos',
	PlantaSchema
);