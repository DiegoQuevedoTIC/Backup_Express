import { Request, Response } from "express"
import UsuarioModel from "../models/usuario.model";

export const crearUsuario = async (req: Request, res: Response) => {
 const { body } = req;

 try {
    const newUsuario = new UsuarioModel({  
        ...body,
    });

    const usuarioCreado = await newUsuario.save();
    res.status(200).json({

        ok:true,
        msg:"Usuario Creado OK",
        usuario:usuarioCreado,
    });
 } catch (error) {

    console.error(error);
        res.status(400).json({

        ok:false,
        error,
        msg:"Usuario NO Creado",
    });
    
 }
}
