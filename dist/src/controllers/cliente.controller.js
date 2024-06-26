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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCliente = exports.updateEstado = exports.updateCliente = exports.getUnCliente = exports.getClientes = exports.crearClientes = void 0;
const cliente_model_1 = __importDefault(require("../models/cliente.model"));
const crearClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const clienteNuevo = new cliente_model_1.default(body);
        const clienteCreado = yield clienteNuevo.save();
        res.status(200).json({
            ok: true,
            msg: "Usuario registrado",
            cliente: clienteCreado,
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: `Error al crear el cliente ${error}`,
        });
    }
});
exports.crearClientes = crearClientes;
const getClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // El busca todos los clientes
        const clientes = yield cliente_model_1.default.find();
        res.json({
            ok: true,
            clientes,
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: `Error consultar los clientes`,
        });
    }
});
exports.getClientes = getClientes;
const getUnCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        // El busca todos los clientes
        const clientes = yield cliente_model_1.default.findById({ _id: id });
        res.json({
            ok: true,
            clientes,
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: `Error consultar los clientes`,
        });
    }
});
exports.getUnCliente = getUnCliente;
const updateCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // El _id del cliente
        const id = req.params.id;
        // const body = req.body;
        const { body } = req;
        // El update todos los clientes
        const clienteActualizo = yield cliente_model_1.default.findByIdAndUpdate(id, body, {
            new: true,
        });
        res.json({
            ok: true,
            cliente: clienteActualizo,
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: `Error consultar los clientes`,
        });
    }
});
exports.updateCliente = updateCliente;
const updateEstado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // El _id del cliente
        const id = req.params.id;
        // El update el estado
        const clienteActualizo = yield cliente_model_1.default.findByIdAndUpdate(id, { estado: false }, {
            new: true,
        });
        res.json({
            ok: true,
            msg: "Cliente Deshabilitado",
            cliente: clienteActualizo,
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: `Error consultar los clientes`,
        });
    }
});
exports.updateEstado = updateEstado;
const deleteCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // El _id del cliente
        const id = req.params.id;
        // const body = req.body;
        const { body } = req;
        // El update todos los clientes
        const clienteEliminado = yield cliente_model_1.default.findByIdAndDelete(id);
        res.json({
            ok: true,
            msg: "Cliente Eliminado",
            cliente: clienteEliminado,
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: `Error consultar los clientes`,
        });
    }
});
exports.deleteCliente = deleteCliente;
//# sourceMappingURL=cliente.controller.js.map