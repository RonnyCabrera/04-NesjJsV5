import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from "@nestjs/common";
import {USUARIO_SCHEMA} from "./usuario.schema";
import * as Joi from 'joi'
import {PeticionInvalidaExceptions} from "../exceptions/peticion-invalida.exceptions";

@Injectable()
export class UsuarioPipe implements  PipeTransform {
    constructor (private schema) {

    }
    transform(
        valorEnBrutoDelRequest: any,
        metadataDeLosDecoradoresDelNestJs: ArgumentMetadata
    ) {
        this.schema = USUARIO_SCHEMA
        const {
            error
        } = Joi.validate(
            valorEnBrutoDelRequest,
            this.schema);
        if(error) {
            throw new PeticionInvalidaExceptions('Peticion inavlida', error, 4);
        }
        return valorEnBrutoDelRequest;
    }
}