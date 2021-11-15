import { Schema , createConnection} from "mongoose";
const autoIncrement = require('mongoose-auto-increment');
const connection = createConnection(
	'mongodb+srv://Lucas:Salmeron1@cluster0.athzv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
);

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
    planta: { type:String },
	precio: { type: Number },
	thc: { type: Number },
	cbd: { type: String },
	cosecha: { type: Date },
	stock: { type: Boolean },
	cod_proveedor: { type: Number },
	genetica: { type: Object },
	humedad: { type: Number },
    apta_para_extracto: { type: Boolean },
	id_p: { type: Number },
    type: {type:String}

})
autoIncrement.initialize(connection);

PlantaSchema.plugin(autoIncrement.plugin, 'Plantas');

export const plantModel: Plantas | any = connection.model<Plantas>(
	'productos',
	PlantaSchema
);

const aa = async() => {

let hola = await  plantModel.find() 
console.log(hola)
}

aa()