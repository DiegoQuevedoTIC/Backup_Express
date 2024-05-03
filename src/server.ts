import express, { Application, Request, Response } from "express";
import { dbConnection } from "./database/connection";
import cors from "cors";
import usuarioRoutes from "./routes/usuario.route";

class Server{

    private app: Application;
    private port: string;
    private apiPaths = {
        usuario:"/api/v1/usuario",
    };
    
    constructor() {
        this.app = express();
        this.port= process.env.PORT || "3000";

        //Llamar base de datos
        dbConnection();

        //Metodos Iniciales
        this.middlewares();
        
        //Rutas
        this.routes();
        
    }

    miPrimerApi() {
        this.app.get("/", (req: Request, res: Response) =>
            res.status(200).json({ msg: "Api funcionando"})
        );
    }

    middlewares()  {
     
        this.app.use(cors());

        // Lectura del Body

        this.app.use(express.json);
        this.miPrimerApi();
    
    }

    routes():void {
        this.app.use(this.apiPaths.usuario, usuarioRoutes);
    }

    listen(): void {
        this.app.listen(this.port,() => {
            console.log("Servidor Funcionando", this.port);
        });
    }
}

export default Server;