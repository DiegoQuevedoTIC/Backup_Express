"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cliente_controller_1 = require("../controllers/cliente.controller");
const express_validator_1 = require("express-validator");
const validate_fields_1 = require("../middlewares/validate-fields");
const validate_jwt_1 = __importDefault(require("../middlewares/validate-jwt"));
const router = (0, express_1.Router)();
router.post("/", validate_jwt_1.default, [
    (0, express_validator_1.check)("nombre", "El nombre es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("email", "El email es obligatorio").not().isEmpty().isEmail(),
    (0, express_validator_1.check)("telefono", "El telefóno es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("tipoDocumento", "El tipo de documento es obligatorio")
        .not()
        .isEmpty(),
    (0, express_validator_1.check)("numeroDocumento", "El número de documento es obligatorio")
        .not()
        .isEmpty(),
    validate_fields_1.validateFields,
], cliente_controller_1.crearClientes);
router.get("/", cliente_controller_1.getClientes);
router.get("/:id", validate_jwt_1.default, cliente_controller_1.getUnCliente);
router.put("/:id", validate_jwt_1.default, cliente_controller_1.updateCliente);
router.put("/estado/:id", validate_jwt_1.default, cliente_controller_1.updateEstado);
router.delete("/:id", validate_jwt_1.default, cliente_controller_1.deleteCliente);
exports.default = router;
//# sourceMappingURL=cliente.route.js.map