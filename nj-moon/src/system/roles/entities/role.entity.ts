
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity("system_role")
export class Role {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    name: string;

    @ManyToMany(type => User, user => user.roles)
    users: User[];
}