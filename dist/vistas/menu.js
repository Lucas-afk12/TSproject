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
exports.UserActive = exports.sessionMenu = exports.menuLogin = void 0;
var lecturaTeclado_1 = require("../vistas/lecturaTeclado");
var menuLogin = function () { return __awaiter(void 0, void 0, void 0, function () {
    var n, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log('\n');
                console.log('1.- Crear Usuario');
                console.log('2.- login');
                console.log('3- Salir.');
                _a = parseInt;
                return [4 /*yield*/, (0, lecturaTeclado_1.leerTeclado)('--OPCIÓN--')];
            case 1:
                n = _a.apply(void 0, [_b.sent()]);
                return [2 /*return*/, n];
        }
    });
}); };
exports.menuLogin = menuLogin;
var sessionMenu = function () { return __awaiter(void 0, void 0, void 0, function () {
    var n;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('¿Deseas continuar con la sesion?');
                console.log('s/n');
                return [4 /*yield*/, (0, lecturaTeclado_1.leerTeclado)('--OPCIÓN--')];
            case 1:
                n = _a.sent();
                return [2 /*return*/, n];
        }
    });
}); };
exports.sessionMenu = sessionMenu;
var UserActive = function () { return __awaiter(void 0, void 0, void 0, function () {
    var n, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.clear();
                console.log('0.- ver lista de productos');
                console.log('1.- Añadir Producto al carro');
                console.log('2.- eliminar productos del carro');
                console.log('3.- ver los productos del carro');
                console.log('4.- ¿Cuanto falta para que llegue mi pedido?');
                console.log('5.- ¿ver todos mis pedidos hasta el momento?');
                console.log('6.- Finalizar compra');
                console.log('7- Salir.');
                _a = parseInt;
                return [4 /*yield*/, (0, lecturaTeclado_1.leerTeclado)('--OPCIÓN--')];
            case 1:
                n = _a.apply(void 0, [_b.sent()]);
                return [2 /*return*/, n];
        }
    });
}); };
exports.UserActive = UserActive;
