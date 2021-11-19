"use strict";
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
exports.clientModel = exports.ClienteSchema = exports.ClientFunc = exports.Cliente = void 0;
var mongoose_1 = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');
var connection = (0, mongoose_1.createConnection)('mongodb+srv://Lucas:Salmeron1@cluster0.athzv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
//Clase cliente con sus funcionalidades
var Cliente = /** @class */ (function () {
    function Cliente(_nombre, _apellido, _dni, _nombreUsuario, _Contraseña, _pedidos, _gramos, _recibo, _status, id) {
        this._pedidos = [];
        this._gramos = [];
        this._id = id;
        this._nombre = _nombre;
        this._apellidos = _apellido;
        this._dni = _dni;
        this._nombreUsuario = _nombreUsuario;
        this._Contraseña = _Contraseña;
        this._pedidos = _pedidos;
        this._gramos = _gramos;
        this._recibo = _recibo;
        this._status = _status;
    }
    Object.defineProperty(Cliente.prototype, "Contrase\u00F1a", {
        get: function () {
            return this._Contraseña;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "username", {
        get: function () {
            return this._nombreUsuario;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "pedidos", {
        get: function () {
            return this._pedidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "gramos", {
        get: function () {
            return this._gramos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "addpedido", {
        set: function (data) {
            this._pedidos.push(data);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "changepedido", {
        set: function (data) {
            this._pedidos = data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "addgrams", {
        set: function (data) {
            this._gramos.push(data);
        },
        enumerable: false,
        configurable: true
    });
    //funciones de datos.
    Cliente.prototype.verCarrito = function (plantas, extractos) {
        var pedidos = this.pedidos;
        var gramos = this.gramos;
        var x = 0;
        var total = 0;
        if (pedidos.length !== 0) {
            var gram = gramos.reduce(function (a, b) { return a + b; });
            var _loop_1 = function (pedido) {
                var temp = (plantas.find(function (planta) { return planta.id == pedido; }));
                if (temp !== undefined) {
                    console.log(x + ".- " + gramos[x] + " gramos de " + temp.NombreProducto + " por un precio total de " + temp.totalprice(gramos[x]) + "\u20AC");
                    total = temp.totalprice(gramos[x]) + total;
                }
                else {
                    var temp_1 = extractos.find(function (extracto) { return extracto.id == pedido; });
                    if (temp_1 !== undefined) {
                        console.log(x + ".- " + gramos[x] + " gramos de " + temp_1.NombreProducto + " por un precio total de " + temp_1.totalprice(gramos[x]) + "\u20AC");
                        total = temp_1.totalprice(gramos[x]) + total;
                    }
                }
                x++;
            };
            for (var _i = 0, pedidos_1 = pedidos; _i < pedidos_1.length; _i++) {
                var pedido = pedidos_1[_i];
                _loop_1(pedido);
            }
            console.log("un total de " + gram + " gramos por " + total + "\u20AC");
        }
        else {
            console.log("el carrito esta vacio");
            return false;
        }
    };
    //funciones tecnicas.
    Cliente.prototype.creator = function (_nombre, _apellido, _dni, _nombreUsuario, _Contraseña, _pedidos, _gramos, _recibo, _status, id) {
        if (id === undefined) {
            return new Cliente(_nombre, _apellido, _dni, _nombreUsuario, _Contraseña, _pedidos, _gramos, _recibo, _status);
        }
        return new Cliente(_nombre, _apellido, _dni, _nombreUsuario, _Contraseña, _pedidos, _gramos, _recibo, _status, id);
    };
    Cliente.prototype.Exist = function (user) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var exist;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        exist = 'a';
                        if (!(user != undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, exports.clientModel.findOne({ _nombreUsuario: user })];
                    case 1:
                        exist = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, exports.clientModel.findOne({
                            _nombreUsuario: this._nombreUsuario,
                        })];
                    case 3:
                        exist = _a.sent();
                        _a.label = 4;
                    case 4:
                        if (exist != null) {
                            resolve(true);
                        }
                        else {
                            resolve(false);
                        }
                        return [2 /*return*/];
                }
            });
        }); });
        return promise;
    };
    Cliente.prototype.conected = function () {
        return __awaiter(this, void 0, void 0, function () {
            var promise;
            var _this = this;
            return __generator(this, function (_a) {
                promise = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var conected;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, exports.clientModel.findOne({ _status: true })];
                            case 1:
                                conected = _a.sent();
                                if (conected != null) {
                                    resolve(conected);
                                }
                                else {
                                    resolve(false);
                                }
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, promise];
            });
        });
    };
    Cliente.prototype.errorchecker = function () {
        var _this = this;
        var solution = [];
        var x = this._nombre;
        var promise = new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._nombreUsuario == '' ||
                            this._nombre == '' ||
                            this._apellidos == '' ||
                            this._dni == '' ||
                            this._Contraseña == '') {
                            solution.push('No puedes dejar ningun elemento vacio');
                        }
                        return [4 /*yield*/, this.Exist()];
                    case 1:
                        if (_a.sent()) {
                            solution.push('Ese nombre de usuario ya existe');
                        }
                        resolve(solution);
                        return [2 /*return*/];
                }
            });
        }); });
        return promise;
    };
    Cliente.prototype.comprar = function (_producto) { };
    return Cliente;
}());
exports.Cliente = Cliente;
//inizializamos una variable para ejecutar las funciones de administracion de los clientes.
exports.ClientFunc = new Cliente('', '', '', '', '', [], [], false, false);
//Al crear la conexion inizializamos el plugin para tener id autoincrementables
autoIncrement.initialize(connection);
exports.ClienteSchema = new mongoose_1.Schema({
    _nombre: { type: String, unique: true },
    _apellidos: { type: String },
    _dni: { type: String },
    _nombreUsuario: { type: String },
    _Contraseña: { type: String },
    _pedidos: { type: Array },
    _gramos: { type: Array },
    _recibo: { type: Boolean },
    _status: { type: Boolean },
});
//Exportamos el esquema aplicando el plugin
exports.ClienteSchema.plugin(autoIncrement.plugin, 'Cliente');
exports.clientModel = connection.model('cliente', exports.ClienteSchema);
