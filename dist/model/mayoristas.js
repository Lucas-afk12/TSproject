"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MayoristModel = exports.MayoristaSchema = exports.MayoristtFunc = exports.Mayoristas = void 0;
var mongoose_1 = require("mongoose");
var clientes_1 = require("./clientes");
var autoIncrement = require('mongoose-auto-increment');
var connection = (0, mongoose_1.createConnection)('mongodb+srv://Lucas:Salmeron1@cluster0.athzv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
var Mayoristas = /** @class */ (function (_super) {
    __extends(Mayoristas, _super);
    function Mayoristas(_nombre, _apellido, _dni, _nombreUsuario, _Contraseña, _pedidos, _gramos, _recibo, _status, codigoEmpresa, id) {
        var _this = _super.call(this, _nombre, _apellido, _dni, _nombreUsuario, _Contraseña, _pedidos, _gramos, _recibo, _status, id) || this;
        _this.codigoEmpresa = codigoEmpresa;
        _this.type = "M";
        return _this;
    }
    Mayoristas.prototype.create = function (_nombre, _apellido, _dni, _nombreUsuario, _Contraseña, _pedidos, _gramos, _recibo, _status, codigoEmpresa, id) {
        if (id === undefined) {
            new Mayoristas(_nombre, _apellido, _dni, _nombreUsuario, _Contraseña, _pedidos, _gramos, _recibo, _status, codigoEmpresa);
        }
        else {
            new Mayoristas(_nombre, _apellido, _dni, _nombreUsuario, _Contraseña, _pedidos, _gramos, _recibo, _status, codigoEmpresa, id);
        }
    };
    return Mayoristas;
}(clientes_1.Cliente));
exports.Mayoristas = Mayoristas;
exports.MayoristtFunc = new Mayoristas('', '', '', '', '', [], [], false, false, "");
exports.MayoristaSchema = new mongoose_1.Schema({
    _nombre: { type: String, unique: true },
    _apellidos: { type: String },
    _dni: { type: String },
    _nombreUsuario: { type: String },
    _Contraseña: { type: String },
    _pedidos: { type: Array },
    _gramos: { type: Array },
    _recibo: { type: Boolean },
    _status: { type: Boolean },
    codigoEmpresa: { type: String },
    num_Empresa: { type: String }
});
//Exportamos el esquema aplicando el plugin
exports.MayoristaSchema.plugin(autoIncrement.plugin, 'Cliente');
exports.MayoristModel = connection.model('cliente', exports.MayoristaSchema);
