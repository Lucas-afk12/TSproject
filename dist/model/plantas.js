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
exports.plantModel = exports.plantFunc = exports.Plantas = void 0;
var mongoose_1 = require("mongoose");
var productos_1 = require("./productos");
var connection = (0, mongoose_1.createConnection)("mongodb+srv://Lucas:Salmeron1@cluster0.athzv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
var autoIncrement = require("mongoose-auto-increment");
var Plantas = /** @class */ (function (_super) {
    __extends(Plantas, _super);
    function Plantas(Nombre, precio, thc, cbd, stock, cod_proveedor, Genetica, humedad, Apta_para_extracto, Cosecha, id_p, type) {
        var _this = _super.call(this, Nombre, precio, thc, cbd, stock, cod_proveedor, Cosecha, type, id_p) || this;
        _this.Genetica = Genetica;
        _this.humedad = humedad;
        _this.Apta_para_extracto = Apta_para_extracto;
        return _this;
    }
    Object.defineProperty(Plantas.prototype, "tipo", {
        get: function () {
            return this.Genetica.tipo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Plantas.prototype, "Predominancia", {
        get: function () {
            return this.Genetica.Predominancia;
        },
        enumerable: false,
        configurable: true
    });
    Plantas.prototype.creator = function (Nombre, precio, thc, cbd, stock, cod_proveedor, genetica, humedad, apta_para_extracto, Cosecha, id_p, type) {
        if (id_p == undefined) {
            return new Plantas(Nombre, precio, thc, cbd, stock, cod_proveedor, genetica, humedad, apta_para_extracto, Cosecha);
        }
        else {
            return new Plantas(Nombre, precio, thc, cbd, stock, cod_proveedor, genetica, humedad, apta_para_extracto, Cosecha, id_p, type);
        }
    };
    Plantas.prototype.mostrar = function () {
        console.log(this.id + ".-" + this.NombreProducto + " , precioG= " + this._precio + "\u20AC , stock= " + this._stock + " , genetica= " + this.tipo + " , " + this.Predominancia + " ,  Fecha = " + this.cosecha);
    };
    return Plantas;
}(productos_1.Productos));
exports.Plantas = Plantas;
// Objeto vacio para ejecutar funciones.
var genetica = {
    tipo: "",
    Predominancia: "",
};
exports.plantFunc = new Plantas("", 0, 0, "", false, 0, genetica, 0, false, new Date());
//esquemas
var PlantaSchema = new mongoose_1.Schema({
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
//plugin
autoIncrement.initialize(connection);
PlantaSchema.plugin(autoIncrement.plugin, { model: "Plantas", field: "id_p" });
//modelos
exports.plantModel = connection.model("productos", PlantaSchema);
