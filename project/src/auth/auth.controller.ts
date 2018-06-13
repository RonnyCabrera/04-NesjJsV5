import {BadRequestException, Body, Controller, Post} from "@nestjs/common";
import {JwtService} from "../servicios/jwt.service";

@Controller('Auth')
export class AuthController {
    constructor(private _jwtService: JwtService) {

    }

    @Post()
    emitirToken(
        @Body('usuario') usuario,
        @Body('password') password,
    ) {
        const emitirParametros = usuario && password;
        if(emitirParametros) {
            if (usuario === 'ronnycabrera' && password === '12345678910') {
                return {
                    jwt: this._jwtService.emitirToken({
                    usuario: usuario
                    })
                };
            }
            else {
                throw new BadRequestException({
                    mensaje: 'Credenciales Invalidas'
                });
            }
        }
        else {
            throw new BadRequestException({
                mensaje: 'No envia parametros'
            });
        }
    }

    @Post('verificarToken')
    verificarToken(
        @Body('jwt') jwt
    ) {
        const enviaParametros = jwt;
        if(enviaParametros) {
            const tokenValido = this._jwtService.verificarToken(jwt);
            if(tokenValido) {
                return {mensaje: 'OK'};
            }
            else {
                throw new BadRequestException({
                    mensaje: 'Token Invalido'
                });
            }
        }
        else {
            throw new BadRequestException({
                mensaje: 'No envia parametros'
            });
        }
    }

    @Post('verificarTokenAsync')
    verificarTokenAsync(
        @Body('jwt') jwt
    ) {
        const enviaParametros = jwt;
        if (enviaParametros) {
            this._jwtService
                .verificarTokenAsync(
                    jwt,
                    (error, datos) => {
                        if (error) {
                            throw new BadRequestException({
                                mensaje: 'Token invalido',
                                error: error
                            });
                        } else {
                            return {mensake: 'Ok'};
                        }
                    })
        } else {
            throw new BadRequestException({
                mensaje: 'No envia parametros'
            });
        }
    }
}