"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedidoModel = exports.Pedidos = void 0;
var mongoose_1 = require("mongoose");
var connection = (0, mongoose_1.createConnection)('mongodb+srv://Lucas:Salmeron1@cluster0.athzv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
var autoIncrement = require('mongoose-auto-increment');
var Pedidos = /** @class */ (function () {
    function Pedidos(pedidos, gramos, cliente) {
        this.pedidos = pedidos;
        this.gramos = gramos;
        this.fecha = new Date();
        this.cliente = cliente;
    }
    return Pedidos;
}());
exports.Pedidos = Pedidos;
autoIncrement.initialize(connection);
var pedidoSchema = new mongoose_1.Schema({
    pedidos: { type: Array },
    gramos: { type: Array },
    fecha: { type: Date },
    cliente: { type: Number }
});
pedidoSchema.plugin(autoIncrement.plugin, 'pedidos');
exports.pedidoModel = connection.model('pedidos', pedidoSchema);
