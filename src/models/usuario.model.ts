import { Model, Schema, model } from "mongoose";

const Usuarioschema = new Schema ({


    nombre: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    tipoDocumento: {
        type: String,
        require: true
    },
    numeroDocumento: {
        type: Number
    },
    peso: {
        type: String
    },
    createAt: {
        type: Date,
        default: Date.now(),
    }
})

const UsuarioModel: Model<any> = model("Usuario",Usuarioschema);
export default UsuarioModel;