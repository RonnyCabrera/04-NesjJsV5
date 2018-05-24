import {HttpException, HttpStatus} from "@nestjs/common";


export class PeticionInvalidaExceptions extends HttpException {
    constructor (private _mensaje,
                 private _detalle,
                 private _nivelError) {
        super(
            {
                //Menssajes u Objetos
                mensaje:_mensaje,
                detalle:_detalle,
                nivelError:_nivelError,
                status: HttpStatus.BAD_REQUEST //Status Code
            },
            HttpStatus.BAD_REQUEST
        );
    }
}