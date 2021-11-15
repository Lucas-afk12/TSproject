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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.plantModel = exports.Plantas = exports.Productos = void 0;
var mongoose_1 = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');
var connection = (0, mongoose_1.createConnection)('mongodb+srv://Lucas:Salmeron1@cluster0.athzv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
//Productos 
var Productos = /** @class */ (function () {
    function Productos(Nombre, precio, thc, cbd, stock, cod_proveedor, id_p) {
        this.id_p = id_p;
        this.Nombre = Nombre;
        this.precio = precio;
        this.thc = thc;
        this.cbd = cbd;
        this.stock = stock;
        this.cod_proveedor = cod_proveedor;
        this.id_p = id_p;
    }
    return Productos;
}());
exports.Productos = Productos;
//subaclases de producto.
var Plantas = /** @class */ (function (_super) {
    __extends(Plantas, _super);
    function Plantas(Nombre, precio, thc, cbd, stock, cod_proveedor, genetica, humedad, Apta_para_extracto, id_p) {
        var _this = _super.call(this, Nombre, precio, thc, cbd, stock, cod_proveedor, id_p) || this;
        _this.type = "p";
        _this.genetica = genetica;
        _this.humedad = humedad;
        _this.Apta_para_extracto = Apta_para_extracto;
        return _this;
    }
    return Plantas;
}(Productos));
exports.Plantas = Plantas;
var PlantaSchema = new mongoose_1.Schema({
    planta: { type: String },
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
    type: { type: String }
});
autoIncrement.initialize(connection);
PlantaSchema.plugin(autoIncrement.plugin, 'Plantas');
exports.plantModel = connection.model('productos', PlantaSchema);
var aa = function () { return __awaiter(void 0, void 0, void 0, function () {
    var hola;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.plantModel.find()];
            case 1:
                hola = _a.sent();
                console.log(hola);
                return [2 /*return*/];
        }
    });
}); };
aa();
