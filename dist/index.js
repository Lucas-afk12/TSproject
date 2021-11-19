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
exports.main = void 0;
var UserComponent_1 = require("./UserComponent");
var clientes_1 = require("./model/clientes");
var menu_1 = require("./vistas/menu");
var productos_1 = require("./model/productos");
var lecturaTeclado_1 = require("./vistas/lecturaTeclado");
var pedidos_1 = require("./model/pedidos");
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var user_conected;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, clientes_1.ClientFunc.conected()];
            case 1:
                user_conected = _a.sent();
                if (!(user_conected != false)) return [3 /*break*/, 3];
                return [4 /*yield*/, isOn(user_conected)];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, (0, UserComponent_1.userMenu)()];
            case 4:
                _a.sent();
                _a.label = 5;
            case 5: return [4 /*yield*/, (0, exports.main)()];
            case 6:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.main = main;
var isOn = function (_user) { return __awaiter(void 0, void 0, void 0, function () {
    var client, n, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                client = clientes_1.ClientFunc.creator(_user._nombre, _user._apellidos, _user._dni, _user._nombreUsuario, _user._Contraseña, _user._pedidos, _user._gramos, _user._recibo, _user._status, _user._id);
                console.clear();
                console.log(" tu usuario actual: " + client.username);
                return [4 /*yield*/, (0, menu_1.sessionMenu)()];
            case 1:
                n = _b.sent();
                _a = n;
                switch (_a) {
                    case 's': return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, options(client)];
            case 3:
                _b.sent();
                _b.label = 4;
            case 4: return [4 /*yield*/, clientes_1.clientModel.updateOne({ _id: client._id }, { $set: { _status: false } })];
            case 5:
                _b.sent();
                return [4 /*yield*/, (0, exports.main)()];
            case 6:
                _b.sent();
                _b.label = 7;
            case 7: return [2 /*return*/];
        }
    });
}); };
var options = function (_user) { return __awaiter(void 0, void 0, void 0, function () {
    var n, Productos, plantas, extractos, Product_list, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, menu_1.UserActive)()];
            case 1:
                n = _b.sent();
                Productos = [];
                plantas = [];
                extractos = [];
                Product_list = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var _i, Productos_1, Product, temp, temp;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.clear();
                                return [4 /*yield*/, productos_1.plantFunc.get_products()];
                            case 1:
                                Productos = _a.sent();
                                for (_i = 0, Productos_1 = Productos; _i < Productos_1.length; _i++) {
                                    Product = Productos_1[_i];
                                    if (Product.type == 'p') {
                                        temp = productos_1.plantFunc.creator(Product.Nombre, Product.precio, Product.thc, Product.cbd, Product.stock, Product.cod_proveedor, Product.genetica, Product.humedad, Product.Apta_para_extracto, Product.cosecha, Product.id_p);
                                        plantas.push(temp);
                                    }
                                    if (Product.type == 'e') {
                                        temp = productos_1.ExtractFunc.creator(Product.Nombre, Product.precio, Product.thc, Product.cbd, Product.stock, Product.cod_proveedor, Product.cosecha, Product.N_apaleo, Product.mutable, Product.variedad, Product.id_p, Product.type);
                                        extractos.push(temp);
                                    }
                                }
                                return [2 /*return*/];
                        }
                    });
                }); };
                return [4 /*yield*/, Product_list()];
            case 2:
                _b.sent();
                _a = n;
                switch (_a) {
                    case 0: return [3 /*break*/, 3];
                    case 1: return [3 /*break*/, 4];
                    case 2: return [3 /*break*/, 6];
                    case 3: return [3 /*break*/, 8];
                    case 6: return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 3:
                {
                    mostrar(plantas, extractos);
                    return [3 /*break*/, 12];
                }
                _b.label = 4;
            case 4: return [4 /*yield*/, Añadir(_user, plantas, extractos)];
            case 5:
                _b.sent();
                return [3 /*break*/, 12];
            case 6: return [4 /*yield*/, Eliminar(_user, plantas, extractos)];
            case 7:
                _b.sent();
                return [3 /*break*/, 12];
            case 8: return [4 /*yield*/, ver(_user, plantas, extractos)];
            case 9:
                _b.sent();
                return [3 /*break*/, 12];
            case 10: return [4 /*yield*/, finalizar(_user, plantas, extractos)];
            case 11:
                _b.sent();
                _b.label = 12;
            case 12: return [4 /*yield*/, options(_user)];
            case 13:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); };
var mostrar = function (plantas, extractos) {
    console.clear();
    console.log('lista de plantas:');
    for (var _i = 0, plantas_1 = plantas; _i < plantas_1.length; _i++) {
        var planta = plantas_1[_i];
        planta.mostrar();
    }
    console.log('\n');
    console.log('lista de extractos:');
    for (var _a = 0, extractos_1 = extractos; _a < extractos_1.length; _a++) {
        var extracto = extractos_1[_a];
        extracto.mostrar();
    }
};
var Añadir = function (_user, plantas, extractos) { return __awaiter(void 0, void 0, void 0, function () {
    var buy, _a, grams, _b, temp, producto, temp1, producto;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                mostrar(plantas, extractos);
                console.log('\n');
                _a = parseInt;
                return [4 /*yield*/, (0, lecturaTeclado_1.leerTeclado)('Introduzca el id del producto que desea añadir al carrito')];
            case 1:
                buy = _a.apply(void 0, [_c.sent()]);
                _b = parseInt;
                return [4 /*yield*/, (0, lecturaTeclado_1.leerTeclado)('Cuantos gramos le gustaria comprar')];
            case 2:
                grams = _b.apply(void 0, [_c.sent()]);
                temp = plantas.find(function (producto) { return producto.id == buy; });
                if (temp !== undefined) {
                    producto = temp;
                    if (producto._stock == false) {
                        console.log('Ese producto no esta disponible');
                    }
                    else {
                        if (producto.id != undefined) {
                            _user.addpedido = producto.id;
                            _user.addgrams = grams;
                        }
                    }
                }
                else {
                    temp1 = extractos.find(function (extracto) { return extracto.id == buy; });
                    if (temp1 !== undefined) {
                        producto = temp1;
                        if (temp1._stock == false) {
                            console.log('Ese producto no esta disponible');
                        }
                        else {
                            if (producto.id != undefined) {
                                _user.addpedido = producto.id;
                                _user.addgrams = grams;
                            }
                        }
                    }
                }
                return [2 /*return*/];
        }
    });
}); };
var ver = function (_user, plantas, extractos) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        _user.verCarrito(plantas, extractos);
        return [2 /*return*/];
    });
}); };
var Eliminar = function (_user, plantas, extractos) { return __awaiter(void 0, void 0, void 0, function () {
    var isEmpty, remove, _a, carrito;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                isEmpty = _user.verCarrito(plantas, extractos);
                if (!(isEmpty !== false)) return [3 /*break*/, 2];
                _a = parseInt;
                return [4 /*yield*/, (0, lecturaTeclado_1.leerTeclado)("introduzca el numero de producto que quiere eliminar")];
            case 1:
                remove = _a.apply(void 0, [_b.sent()]);
                carrito = _user.pedidos;
                carrito.splice(remove, 1);
                _user.changepedido = carrito;
                _b.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}); };
var finalizar = function (_user, plantas, extractos) { return __awaiter(void 0, void 0, void 0, function () {
    var pedidos, gramos, id, pedido, pedidoSaver;
    return __generator(this, function (_a) {
        if (_user.pedidos.length === 0) {
            console.log('No puedes finalizar la compra ya que no tienes ningun producto en el carrito');
        }
        else {
            pedidos = _user.pedidos;
            gramos = _user.gramos;
            id = _user._id;
            if (id !== undefined) {
                pedido = new pedidos_1.Pedidos(pedidos, gramos, id);
                pedidoSaver = new pedidos_1.pedidoModel(pedido);
                pedidoSaver.save();
            }
        }
        return [2 /*return*/];
    });
}); };
(0, exports.main)();
