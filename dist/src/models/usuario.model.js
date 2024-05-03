"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Usuarioschema = new mongoose_1.Schema({
    nombre: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    tipoDocumento: {
        type: String,
        require: true
    },
    numeroDocumento: {
        type: Number
    },
    peso: {
        type: String
    },
    createAt: {
        type: Date,
        default: Date.now(),
    }
});
const UsuarioModel = (0, mongoose_1.model)("Usuario", Usuarioschema);
exports.default = UsuarioModel;
//# sourceMappingURL=usuario.model.js.map