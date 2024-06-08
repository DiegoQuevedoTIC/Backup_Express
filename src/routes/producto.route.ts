import { Router } from "express";
import validateJWT from "../middlewares/validate-jwt";
import { validateFields } from "../middlewares/validate-fields.ts";
import {
  crearProducto,
  getProductos,
} from "../controllers/producto.controller";
import { check } from "express-validator";

const router = Router();

router.post(
  "/",
  validateJWT,
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("precio", "El precio es obligatorio").not().isEmpty(),
    check("categoria", "El categoria es obligatorio").not().isEmpty(),
    validateFields,
  ],
  crearProducto
);
router.get("/", validateJWT, getProductos);

export default router;