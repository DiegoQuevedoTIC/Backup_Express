import mongoose from "mongoose";



export const dbConnection   = async () =>{

    try {
        const dbUrl = process.env.DB_CONNECTION;

        if(!dbUrl) {
            throw new Error("Error en la conexion a base de datos/URL No existe")
        }

        await mongoose.connect(dbUrl);
        console.log("Conexion Correcta");

    } catch (error) {

        console.log(error)
        console.log("Error en laelo conexion a base de datos")
        
    }
}