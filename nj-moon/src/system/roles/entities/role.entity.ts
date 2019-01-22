
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, PrimaryColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity("system_role")
export class Role {
    @PrimaryColumn("uuid", { length: 36 })
    id: string;

    @Column()
    name: string;

    @ManyToMany(type => User, user => user.roles)
    users: User[];
}