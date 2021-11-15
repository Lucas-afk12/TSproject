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
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var user_conected;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, clientes_1.ClientFunc.conected()];
            case 1:
                user_conected = _a.sent();
                if (!(user_conected != false)) return [3 /*break*/, 3];
                return [4 /*yield*/, klk(user_conected)];
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
var klk = function (_user) { return __awaiter(void 0, void 0, void 0, function () {
    var client, n, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                client = clientes_1.ClientFunc.creator(_user.username, _user._apellido, _user._dni, _user._nombreUsuario, _user._Contraseña, _user._pedidos, _user._gramos, _user._recibo, _user._status, _user._id);
                console.clear();
                console.log(" tu usuario actual: " + client.username);
                return [4 /*yield*/, (0, menu_1.sessionMenu)()];
            case 1:
                n = _b.sent();
                _a = n;
                switch (_a) {
                    case "s": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, options()];
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
var options = function () { return __awaiter(void 0, void 0, void 0, function () {
    var n, listar;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, menu_1.UserActive)()];
            case 1:
                n = _a.sent();
                switch (n) {
                    case 0: {
                        listar = "a";
                        break;
                    }
                }
                return [2 /*return*/];
        }
    });
}); };
(0, exports.main)();
