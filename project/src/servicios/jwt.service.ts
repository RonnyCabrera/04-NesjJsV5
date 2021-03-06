import {Injectable} from "@nestjs/common";

const jwtPaquete:any = require('jsonwebtoken');
@Injectable()
export class JwtService {
    private readonly jwt = jwtPaquete;
    private readonly secreto = 'El sol no quema tanto';
    private readonly opciones = {
        expiresIn: '30s'
    }

    emitirToken(payload: any) {
        return this.jwt
            .sign({
                payload: 'bar' },
                this.secreto,
                this.opciones
            );
    }

    verificarToken(token: string): boolean {
        try {
            return this.jwt
                .verify(
                    token,
                    this.secreto
                );
        } catch (e) {
            return false;
        }
    }

    verificarTokenAsync(token: string, callback) {
        this.jwt
            .verify(
                token,
                this.secreto,
                callback
            );
    }
}