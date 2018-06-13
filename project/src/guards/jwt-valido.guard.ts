import {CanActivate, ExecutionContext, Injectable, UseGuards} from "@nestjs/common";
import {Reflector} from "@nestjs/core";
import {Observable} from "rxjs/internal/Observable";
import construct = Reflect.construct;
import {JwtService} from "../servicios/jwt.service";

@Injectable()
@UseGuards()
export class JwtValidoGuard implements CanActivate {

    constructor(private _reflector: Reflector,
                private _jwtService: JwtService) {
    }

    canActivate(context: ExecutionContext):
        boolean |
        Promise<boolean> |
        Observable<boolean> {
        const necesitaValidarse = this._reflector
            .get(
                'metodoAsegurado',
                context.getHandler()
            );
        if (necesitaValidarse) {
            const request = context
                .switchToHttp()
                .getRequest();
            console.log('request.headers', request.headers);
            const jwt = request.headers.auth;
            if(jwt) {
                return this._jwtService
                    .verificarToken(jwt)
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
}