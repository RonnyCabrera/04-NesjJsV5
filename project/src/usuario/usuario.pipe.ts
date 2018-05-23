import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from "@nestjs/common";
import {USUARIO_SCHEMA} from "./usuario.schema";
import * as Joi from 'joi'

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
            throw new BadRequestException(error);
        }
        return valorEnBrutoDelRequest;
    }
}