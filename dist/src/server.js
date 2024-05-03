"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = require("./database/connection");
const cors_1 = __importDefault(require("cors"));
const usuario_route_1 = __importDefault(require("./routes/usuario.route"));
class Server {
    constructor() {
        this.apiPaths = {
            usuario: "/api/v1/usuario",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "3000";
        //Llamar base de datos
        (0, connection_1.dbConnection)();
        //Metodos Iniciales
        this.middlewares();
        //Rutas
        this.routes();
    }
    miPrimerApi() {
        this.app.get("/", (req, res) => res.status(200).json({ msg: "Api funcionando" }));
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        // Lectura del Body
        this.app.use(express_1.default.json);
        this.miPrimerApi();
    }
    routes() {
        this.app.use(this.apiPaths.usuario, usuario_route_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor Funcionando", this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map