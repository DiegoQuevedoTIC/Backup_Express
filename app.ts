import  dotenv  from "dotenv";
import Server from "./src/server";

//conf .env
dotenv.config()

const server = new Server();
server.listen();