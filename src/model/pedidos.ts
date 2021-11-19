import { Schema, model, createConnection } from 'mongoose';
const connection=createConnection('mongodb+srv://Lucas:Salmeron1@cluster0.athzv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
);
const autoIncrement = require('mongoose-auto-increment');

export class Pedidos {
    
    private pedidos : number[]
    private gramos: number[]
    private fecha: Date
    private cliente: number

    constructor (pedidos : number[] , gramos: number[] , cliente: number){

        this.pedidos = pedidos;
        this.gramos = gramos; 
        this.fecha = new Date()
        this.cliente = cliente
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