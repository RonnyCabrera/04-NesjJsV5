import {Controller, Get, ReflectMetadata, UseGuards} from "@nestjs/common";
import {Usuario, UsuarioService} from "./usuario.service";
import {UsuarioGuard} from "./guards/usuario.guard";

@Controller('Usuario')
@UseGuards(UsuarioGuard)
export class UsuarioController {

    @Get('mostrar')
    @ReflectMetadata('nombreDato', ['ValorM'])
    @ReflectMetadata('permiso', ['private'])
    mostrar () {
        return "OK MOSTRAR"

    }

    @Get('crear')
    @ReflectMetadata('nombreDato', ['ValorC'])
    crear () {
        return "OK CREAR"
    }

}