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
exports.plantModel = exports.ExtractModel = exports.ExtractFunc = exports.Extracto = exports.plantFunc = exports.Plantas = exports.Productos = void 0;
var mongoose_1 = require("mongoose");
var autoIncrement = require("mongoose-auto-increment");
var connection = (0, mongoose_1.createConnection)("mongodb+srv://Lucas:Salmeron1@cluster0.athzv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
var connectio = (0, mongoose_1.createConnection)("mongodb+srv://Lucas:Salmeron1@cluster0.athzv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
//Productos
var Productos = /** @class */ (function () {
    function Productos(Nombre, precio, thc, cbd, stock, cod_proveedor, Cosecha, type, id_p) {
        this.id_p = id_p;
        this.Nombre = Nombre;
        this.precio = precio;
        this.thc = thc;
        this.cbd = cbd;
        this.stock = stock;
        this.cod_proveedor = cod_proveedor;
        this.Cosecha = Cosecha;
        this.id_p = id_p;
        this.type = type;
    }
    Object.defineProperty(Productos.prototype, "NombreProducto", {
        get: function () {
            return this.Nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Productos.prototype, "id", {
        get: function () {
            return this.id_p;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Productos.prototype, "_precio", {
        get: function () {
            return this.precio;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Productos.prototype, "_stock", {
        get: function () {
            return this.stock;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Productos.prototype, "tipo", {
        get: function () {
            return this.type;
        },
        enumerable: false,
        configurable: true
    });
    Productos.prototype.get_products = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, exports.plantModel.find()];
                    case 1:
                        query = _a.sent();
                        if (query != null) {
                            resolve(query);
                        }
                        else {
                            reject(console.log("no hay ningun producto"));
                        }
                        return [2 /*return*/];
                }
            });
        }); });
        return promise;
    };
    Productos.prototype.totalprice = function (grams) {
        return this._precio * grams;
    };
    Object.defineProperty(Productos.prototype, "cosecha", {
        get: function () {
            var opciones = { year: 'numeric', month: 'short', day: 'numeric' };
            var fecha = new Date(this.Cosecha)
                .toLocaleDateString('es', opciones)
                .replace(/ /g, '-')
                .replace('.', '')
                .replace(/-([a-z])/, function (x) { return '-' + x[1].toUpperCase(); });
            return fecha;
        },
        enumerable: false,
        configurable: true
    });
    return Productos;
}());
exports.Productos = Productos;
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
}(Productos));
exports.Plantas = Plantas;
// Objeto vacio para ejecutar funciones.
var genetica = {
    tipo: "",
    Predominancia: "",
};
exports.plantFunc = new Plantas("", 0, 0, "", false, 0, genetica, 0, false, new Date());
//subclase de extracto
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
}(Productos));
exports.Extracto = Extracto;
//objeto vacio
exports.ExtractFunc = new Extracto("", 0, 0, "", false, 0, new Date(), 0, false, "");
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
PlantaSchema.plugin(autoIncrement.plugin, { model: "Plantas", field: "id_p" });
Extractoschema.plugin(autoIncrement.plugin, { model: "Extracto", field: "id_p" });
//modelos
exports.ExtractModel = connectio.model("productos", Extractoschema);
exports.plantModel = connection.model("productos", PlantaSchema);
