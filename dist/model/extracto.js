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
exports.ExtractModel = exports.ExtractFunc = exports.Extracto = void 0;
var productos_1 = require("./productos");
var mongoose_1 = require("mongoose");
var autoIncrement = require("mongoose-auto-increment");
var connection = (0, mongoose_1.createConnection)("mongodb+srv://Lucas:Salmeron1@cluster0.athzv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
var Extracto = /** @class */ (function (_super) {
    __extends(Extracto, _super);
    function Extracto(Nombre, precio, thc, cbd, stock, cod_proveedor, Cosecha, N_apaleo, mutable, variedad, id_p, type) {
        var _this = _super.call(this, Nombre, precio, thc, cbd, stock, cod_proveedor, Cosecha, type, id_p) || this;
        _this.N_apaleo = N_apaleo;
        _this.mutable = mutable;
        _this.variedad = variedad;
        return _this;
    }
    Object.defineProperty(Extracto.prototype, "_mutable", {
        get: function () {
            return this.mutable;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Extracto.prototype, "apaleo", {
        get: function () {
            return this.N_apaleo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Extracto.prototype, "_variedad", {
        get: function () {
            return this.variedad;
        },
        enumerable: false,
        configurable: true
    });
    Extracto.prototype.creator = function (Nombre, precio, thc, cbd, stock, cod_proveedor, Cosecha, N_apaleo, mutable, variedad, id_p, type) {
        if (id_p == undefined) {
            return new Extracto(Nombre, precio, thc, cbd, stock, cod_proveedor, Cosecha, N_apaleo, mutable, variedad);
        }
        else {
            return new Extracto(Nombre, precio, thc, cbd, stock, cod_proveedor, Cosecha, N_apaleo, mutable, variedad, id_p, type);
        }
    };
    Extracto.prototype.mostrar = function () {
        console.log(this.id + ".-" + this.NombreProducto + " , varieda=" + this._variedad + " , precioG= " + this._precio + "\u20AC , Potencia ={thc = " + this.thc + "% , cbd= " + this.cbd + "%} , mutable= " + this._mutable + " , N_apaleo= " + this.apaleo + " , stock= " + this._stock + " ,  Fecha = " + this.cosecha);
    };
    return Extracto;
}(productos_1.Productos));
exports.Extracto = Extracto;
//objeto vacio
exports.ExtractFunc = new Extracto("", 0, 0, "", false, 0, new Date(), 0, false, "");
var Extractoschema = new mongoose_1.Schema({
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
exports.ExtractModel = connection.model("productos", Extractoschema);
