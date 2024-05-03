import { Router } from "express";
import { crearUsuario } from "../controllers/usuario.controllers";

//path/api/v1/usuario

const router = Router();


router.post("/", crearUsuario);

export default router;