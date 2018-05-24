import {Controller, Get, ReflectMetadata, UseGuards} from "@nestjs/common";
import {UsuarioGuard} from "./guards/usuario.guard";

@Controller('Usuario')
@UseGuards(UsuarioGuard)
export class UsuarioController {

    @Get('mostrar')
    @ReflectMetadata('nombreDato', 'ValorM')
    @ReflectMetadata('necesitaValidacion', false)
    @ReflectMetadata('roles', [
        'usuario',
        'administradores',
        'estudiantes'
    ])
    mostrar () {
        return "OK MOSTRAR"
    }

    @Get('crear')
    @ReflectMetadata('nombreDato', 'ValorC')
    @ReflectMetadata('permiso', 'publico')
    @ReflectMetadata('necesitaValidacion', true)
    crear () {
        return "OK CREAR"
    }

}