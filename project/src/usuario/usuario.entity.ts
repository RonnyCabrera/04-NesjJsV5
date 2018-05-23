import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {FotoEntity} from "../foto/foto.entity";

@Entity('web_gr2_cabrera')
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    nombre: string;

    @Column({ length: 500 })
    apellido: string;

    @Column('int')
    edad: number;

    @OneToMany(
        type => FotoEntity,
        foto => foto.usuario
    )

    fotos : [FotoEntity];
}