import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Observable} from "rxjs/internal/Observable";
import {Reflector} from "@nestjs/core";

@Injectable()
export class UsuarioGuard implements  CanActivate {

    constructor(private reflector: Reflector) {

    }

    canActivate(context: ExecutionContext):
        boolean |
        Promise<boolean> |
        Observable<boolean> {
        const request = context
            .switchToHttp()
            .getRequest()
        console.log('Request', request);
        console.log('Cabecera', request.headers);

        const reflectorNombreDato = this.reflector
            .get(
                'nombreDato',
                context.getHandler()
            );

        const reflectorPermisos = this.reflector
            .get(
                'permiso', 
                context.getHandler()
            );

        console.log('reflectorNombreDato', reflectorNombreDato);
        console.log('reflectorPermisos', reflectorPermisos);

        return false;
    }
}