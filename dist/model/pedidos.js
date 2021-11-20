"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedidoModel = exports.Pedidos = void 0;
var mongoose_1 = require("mongoose");
var connection = (0, mongoose_1.createConnection)('mongodb+srv://Lucas:Salmeron1@cluster0.athzv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
var autoIncrement = require('mongoose-auto-increment');
var Pedidos = /** @class */ (function () {
    function Pedidos(pedidos, gramos, cliente, fecha) {
        this.pedidos = pedidos;
        this.gramos = gramos;
        if (fecha === undefined) {
            this.fecha = new Date();
        }
        else {
            this.fecha = fecha;
        }
        this.cliente = cliente;
    }
    Pedidos.prototype.mostrar = function (plantas, extractos, number) {
        var x = 0;
        var total = [];
        console.log("pedido " + number + ":");
        var _loop_1 = function (id) {
            var planta = plantas.find(function (a) { return a.id == id; });
            if (planta !== undefined) {
                console.log("su pedido contiene " + this_1.gramos[x] + " de " + planta.NombreProducto + " por un precio de: " + planta.totalprice(this_1.gramos[x]) + "\u20AC");
                total.push(planta.totalprice(this_1.gramos[x]));
            }
            else {
                var extracto = extractos.find(function (a) { return a.id == id; });
                if (extracto !== undefined) {
                    console.log("su pedido contiene " + this_1.gramos[x] + " de " + extracto.NombreProducto + " por un precio de: " + extracto.totalprice(this_1.gramos[x]) + "\u20AC");
                    total.push(extracto.totalprice(this_1.gramos[x]));
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.pedidos; _i < _a.length; _i++) {
            var id = _a[_i];
            _loop_1(id);
        }
        console.log("precio total = " + total.reduce(function (a, b) { return a + b; }) + "\u20AC");
    };
    Pedidos.prototype.tiempo = function (number) {
        var actualDate = new Date();
        if (this.fecha !== undefined) {
            var dateDifference = actualDate.getTime() - this.fecha.getTime();
            dateDifference = Math.round((dateDifference / (1000 * 60 * 60 * 24)));
            console.log("pedido " + number + ":");
            if (dateDifference < 12) {
                console.log("a su pedido le quedan " + (12 - dateDifference) + " para llegar");
            }
            else {
                console.log("su pedido esta retrasado por " + (dateDifference - 12) + " dias");
            }
        }
    };
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
