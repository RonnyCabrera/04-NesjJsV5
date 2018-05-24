import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Observable} from "rxjs/internal/Observable";
import {Reflector} from "@nestjs/core";

@Injectable()
export class UsuarioGuard implements CanActivate {

    constructor(
        private reflector: Reflector) {
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

        //const reflectorNombreDato = this.reflector
            //.get(
                //'nombreDato',
                //context.getHandler()
            //);

        const reflectorPermisos = this.reflector
            .get(
                'permiso',
                context.getHandler()
            );

        //console.log('reflectorNombreDato', reflectorNombreDato);
        //console.log('reflectorPermisos', reflectorPermisos);

        const reflectorNecesitaValidacion = this.reflector
            .get(
                'necesitaValidacion',
                context.getHandler()
            );

        if(reflectorNecesitaValidacion) {
            //Tomar el valor de la Cookie
            //#ID USUARIO
            //BUSCAR ROLES DEL USUARIO CON ID
            //REFLECTOR ROLE 'ADMINISTRADOR'
            //if(tieneRoles) {
                //return true
            //}else {
                //return false //FORBIDDEN
            //}
        }else {
            return true;
        }
    }
}