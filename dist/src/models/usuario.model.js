"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Usuarioschema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: true,
    },
    email: { type: String, required: true, unique: true },
    tipoDocumento: { type: String, required: true },
    numeroDocumento: { type: String, required: true, unique: true },
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    rol: { type: String, required: true, default: "ADMIN" },
    estado: { type: Boolean, required: true, default: true },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});
const UsuarioModel = (0, mongoose_1.model)("Usuario", Usuarioschema);
exports.default = UsuarioModel;
//# sourceMappingURL=usuario.model.js.map