"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require("joi");
exports.USUARIO_SCHEMA = Joi
    .object()
    .keys({
    nombre: Joi.string()
        .required()
        .regex(/^[a-zA-Z]{3,30}$/)
        .min(3)
        .max(30),
    edad: Joi.number()
        .integer()
        .greater(18)
        .less(40),
    apellido: Joi
        .string()
        .required()
        .regex(/^[a-zA-Z]{3,30}$/)
        .min(3)
        .max(30),
});
