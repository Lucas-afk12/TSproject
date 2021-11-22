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
exports.MayoristFunc = exports.Mayoristas = void 0;
var clientes_1 = require("./clientes");
var Mayoristas = /** @class */ (function (_super) {
    __extends(Mayoristas, _super);
    function Mayoristas(_nombre, _apellido, _dni, _nombreUsuario, _Contraseña, _pedidos, _gramos, _recibo, _status, numEmpresa, id) {
        var _this = _super.call(this, _nombre, _apellido, _dni, _nombreUsuario, _Contraseña, _pedidos, _gramos, _recibo, _status, id) || this;
        _this.numEmpresa = numEmpresa;
        _this.type = 'M';
        return _this;
    }
    Mayoristas.prototype.create = function (_nombre, _apellido, _dni, _nombreUsuario, _Contraseña, _pedidos, _gramos, _recibo, _status, numEmpresa, id) {
        if (id == undefined) {
            return new Mayoristas(_nombre, _apellido, _dni, _nombreUsuario, _Contraseña, _pedidos, _gramos, _recibo, _status, numEmpresa);
        }
        return new Mayoristas(_nombre, _apellido, _dni, _nombreUsuario, _Contraseña, _pedidos, _gramos, _recibo, _status, numEmpresa, id);
    };
    Mayoristas.prototype.errorchecker = function () {
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
                            this._Contraseña == '' ||
                            this.numEmpresa == '') {
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
    Mayoristas.prototype.verCarrito = function (plantas, extractos) {
        var pedidos = this.pedidos;
        var gramos = this.gramos;
        var x = 0;
        var total = 0;
        var totalIva = 0;
        console.log("descuento del 25% en cada compra Modo Mayorista.");
        if (pedidos.length !== 0) {
            var gram = gramos.reduce(function (a, b) { return a + b; });
            var _loop_1 = function (pedido) {
                var temp = plantas.find(function (planta) { return planta.id == pedido; });
                if (temp !== undefined) {
                    console.log(x + ".- " + gramos[x] + " gramos de " + temp.NombreProducto + " por un precio total de " + temp.totalprice(gramos[x], this_1.type) + "\u20AC");
                    total = temp.totalprice(gramos[x], this_1.type) + total;
                    totalIva = temp.totalIva(gramos[x], this_1.type) + totalIva;
                }
                else {
                    var temp_1 = extractos.find(function (extracto) { return extracto.id == pedido; });
                    if (temp_1 !== undefined) {
                        console.log(x + ".- " + gramos[x] + " gramos de " + temp_1.NombreProducto + " por un precio total de " + temp_1.totalprice(gramos[x], this_1.type) + "\u20AC");
                        total = temp_1.totalprice(gramos[x], this_1.type) + total;
                        totalIva = temp_1.totalIva(gramos[x], this_1.type) + totalIva;
                    }
                }
                x++;
            };
            var this_1 = this;
            for (var _i = 0, pedidos_1 = pedidos; _i < pedidos_1.length; _i++) {
                var pedido = pedidos_1[_i];
                _loop_1(pedido);
            }
            console.log("un total de " + gram + " gramos por " + total + "\u20AC");
            console.log("iva_incluido:" + totalIva);
        }
        else {
            console.log('el carrito esta vacio');
            return false;
        }
    };
    return Mayoristas;
}(clientes_1.Cliente));
exports.Mayoristas = Mayoristas;
exports.MayoristFunc = new Mayoristas('', '', '', '', '', [], [], false, false, '');
