"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controllers_1 = require("../controllers/usuario.controllers");
//path/api/v1/usuario
const router = (0, express_1.Router)();
router.post("/", usuario_controllers_1.crearUsuario);
exports.default = router;
//# sourceMappingURL=usuario.route.js.map