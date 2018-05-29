import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {UsuarioEntity} from "../usuario/usuario.entity";

@Entity('web_gr2_cabrera_foto')
export class FotoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    url: string;

    @ManyToOne(
        type => UsuarioEntity,
        usuario => usuario.fotos
    )

    usuarios: UsuarioEntity;
}