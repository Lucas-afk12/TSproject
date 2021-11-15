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
exports.userMenu = void 0;
var clientes_1 = require("./model/clientes");
var menu_1 = require("./vistas/menu");
var lecturaTeclado_1 = require("./vistas/lecturaTeclado");
var index_1 = require("./index");
var userMenu = function () { return __awaiter(void 0, void 0, void 0, function () {
    var n, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.clear();
                return [4 /*yield*/, (0, menu_1.menuLogin)()];
            case 1:
                n = _b.sent();
                _a = n;
                switch (_a) {
                    case 1: return [3 /*break*/, 2];
                    case 2: return [3 /*break*/, 4];
                    case 3: return [3 /*break*/, 6];
                }
                return [3 /*break*/, 7];
            case 2: return [4 /*yield*/, UserCreator()];
            case 3:
                _b.sent();
                return [3 /*break*/, 8];
            case 4: return [4 /*yield*/, userLogin()];
            case 5:
                _b.sent();
                return [3 /*break*/, 8];
            case 6:
                {
                    return [3 /*break*/, 8];
                }
                _b.label = 7;
            case 7:
                (0, exports.userMenu)();
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.userMenu = userMenu;
var UserCreator = function (Errores) { return __awaiter(void 0, void 0, void 0, function () {
    var errorsend, user, contraseña, nombre, apellidos, dni, pedidos, gramos, recibo, status, reciboChek, cliente, errors, saver, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.clear();
                errorsend = [];
                if (Errores != undefined) {
                    console.log(Errores);
                }
                return [4 /*yield*/, (0, lecturaTeclado_1.leerTeclado)('Introduzca su nombre de usuario')];
            case 1:
                user = _a.sent();
                return [4 /*yield*/, (0, lecturaTeclado_1.leerTeclado)('Introduzca su contraseña')];
            case 2:
                contraseña = _a.sent();
                return [4 /*yield*/, (0, lecturaTeclado_1.leerTeclado)('introduzca su nombre')];
            case 3:
                nombre = _a.sent();
                return [4 /*yield*/, (0, lecturaTeclado_1.leerTeclado)('Apellidos')];
            case 4:
                apellidos = _a.sent();
                return [4 /*yield*/, (0, lecturaTeclado_1.leerTeclado)('dni')];
            case 5:
                dni = _a.sent();
                pedidos = [];
                gramos = [];
                return [4 /*yield*/, (0, lecturaTeclado_1.leerTeclado)('¿quiere recicibir ticket de sus compras?(s/n)')];
            case 6:
                recibo = _a.sent();
                status = false;
                reciboChek = false;
                if (recibo == 's') {
                    reciboChek = true;
                }
                _a.label = 7;
            case 7:
                _a.trys.push([7, 13, , 14]);
                cliente = clientes_1.ClientFunc.creator(nombre, apellidos, dni, user, contraseña, pedidos, gramos, reciboChek, status);
                return [4 /*yield*/, cliente.errorchecker()];
            case 8:
                errors = _a.sent();
                if (!(errors.length === 0)) return [3 /*break*/, 10];
                saver = new clientes_1.clientModel(cliente);
                return [4 /*yield*/, saver.save()];
            case 9:
                _a.sent(),
                    function (err) {
                        errorsend.push('Ha ocurrido un error guardando el cliente');
                    };
                return [3 /*break*/, 12];
            case 10:
                errorsend = errors;
                return [4 /*yield*/, UserCreator(errorsend)];
            case 11:
                _a.sent();
                _a.label = 12;
            case 12: return [3 /*break*/, 14];
            case 13:
                err_1 = _a.sent();
                errorsend.push('Ha ocurrido un error inesperado');
                return [3 /*break*/, 14];
            case 14: return [2 /*return*/];
        }
    });
}); };
var userLogin = function (errors) { return __awaiter(void 0, void 0, void 0, function () {
    var error, user, contraseña, userQuery, usuario;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.clear();
                error = [];
                if (errors != undefined) {
                    console.log(errors);
                }
                return [4 /*yield*/, (0, lecturaTeclado_1.leerTeclado)('Introduzca su nombre de usuario')];
            case 1:
                user = _a.sent();
                return [4 /*yield*/, (0, lecturaTeclado_1.leerTeclado)('Introduzca su contraseña')];
            case 2:
                contraseña = _a.sent();
                return [4 /*yield*/, clientes_1.clientModel.findOne({ _nombreUsuario: user })];
            case 3:
                userQuery = _a.sent();
                if (!(userQuery != null)) return [3 /*break*/, 9];
                usuario = clientes_1.ClientFunc.creator(userQuery._nombre, userQuery._apellidos, userQuery._dni, userQuery._nombreUsuario, userQuery._Contraseña, userQuery._pedidos, userQuery._gramos, userQuery._recibo, userQuery._status, userQuery._id);
                if (!(usuario.Contraseña == contraseña)) return [3 /*break*/, 6];
                return [4 /*yield*/, clientes_1.clientModel.updateOne({ _id: usuario._id }, { $set: { _status: true } })];
            case 4:
                _a.sent();
                return [4 /*yield*/, (0, index_1.main)()];
            case 5:
                _a.sent();
                return [3 /*break*/, 8];
            case 6:
                error.push('Contraseña incorrecta');
                return [4 /*yield*/, userLogin(error)];
            case 7:
                _a.sent();
                _a.label = 8;
            case 8: return [3 /*break*/, 11];
            case 9:
                error.push('Ese usuario no existe');
                return [4 /*yield*/, userLogin(error)];
            case 10:
                _a.sent();
                _a.label = 11;
            case 11: return [2 /*return*/];
        }
    });
}); };
