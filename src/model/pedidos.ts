import { Schema, model, createConnection } from 'mongoose';
import { Extracto, Plantas } from './productos';
const connection=createConnection('mongodb+srv://Lucas:Salmeron1@cluster0.athzv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
);
const autoIncrement = require('mongoose-auto-increment');

export class Pedidos {
    
    private pedidos : number[]
    private gramos: number[]
    private fecha?: Date
    private cliente: number

    constructor (pedidos : number[] , gramos: number[] , cliente: number , fecha?:Date){

        this.pedidos = pedidos;
        this.gramos = gramos; 
        if (fecha === undefined){
        this.fecha = new Date()
        }else{
            this.fecha = fecha
        }
        this.cliente = cliente
    }


    mostrar(plantas: Array<Plantas> , extractos : Array<Extracto> , number: number){
        let x=0
        let total = []
        console.log(`pedido ${number}:`)
        for (let id of this.pedidos){
            let planta : Plantas|undefined = plantas.find((a) => a.id == id);
            if (planta !== undefined){
                console.log(`su pedido contiene ${this.gramos[x]} de ${planta.NombreProducto} por un precio de: ${planta.totalprice(this.gramos[x])}€`)
                total.push(planta.totalprice(this.gramos[x]))
            }else{
                let extracto : Extracto | undefined = extractos.find(a => a.id == id)
                if (extracto !== undefined){
                    console.log(`su pedido contiene ${this.gramos[x]} de ${extracto.NombreProducto} por un precio de: ${extracto.totalprice(this.gramos[x])}€`)
                    total.push(extracto.totalprice(this.gramos[x]))
                }
            }
            
        }
        console.log(`precio total = ${total.reduce((a,b) => a+b)}€`)
    }

    tiempo(number: number){
        let actualDate = new Date()
        if (this.fecha !== undefined){
        let dateDifference =  actualDate.getTime() - this.fecha.getTime()
        dateDifference = Math.round((dateDifference / (1000*60*60*24)))
        console.log(`pedido ${number}:`)
        if (dateDifference < 12){
            console.log(`a su pedido le quedan ${12 - dateDifference} para llegar`)
        }else{
            console.log(`su pedido esta retrasado por ${dateDifference - 12} dias`)
        }
        }
    }
}

autoIncrement.initialize(connection);
 
const pedidoSchema = new Schema({
    pedidos:{type: Array},
    gramos:{type: Array},
    fecha:{type:Date},
    cliente:{type:Number}
}) 

pedidoSchema.plugin(autoIncrement.plugin, 'pedidos')
export const pedidoModel = connection.model('pedidos' , pedidoSchema)