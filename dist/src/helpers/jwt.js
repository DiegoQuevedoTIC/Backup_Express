"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const generateJWT = (_id, email, expiresIn = "12h", jwtSecret = "iouifsf45645") => {
    return new Promise((resolve, reject) => {
        const payload = {
            _id,
            login,
        };
        jwt.sign(payload, jwtSecret, {
            expiresIn: expiresIn,
        }, (error, token) => {
            if (error) {
                console.log(error);
                reject("No se puede generar el token");
            }
            else
                resolve(token);
        });
    });
};
exports.default = generateJWT;
//# sourceMappingURL=jwt.js.map