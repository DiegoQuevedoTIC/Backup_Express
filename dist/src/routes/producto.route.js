"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_jwt_1 = __importDefault(require("../middlewares/validate-jwt"));
const validate_fields_1 = require("../middlewares/validate-fields");
const producto_controller_1 = require("../controllers/producto.controller");
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
router.post("/", validate_jwt_1.default, [
    (0, express_validator_1.check)("nombre", "El nombre es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("precio", "El precio es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("categoria", "El categoria es obligatorio").not().isEmpty(),
    validate_fields_1.validateFields,
], producto_controller_1.crearProducto);
router.get("/", validate_jwt_1.default, producto_controller_1.getProductos);
exports.default = router;
//# sourceMappingURL=producto.route.js.map