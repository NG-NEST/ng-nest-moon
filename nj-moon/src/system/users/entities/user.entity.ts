
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Role } from '../../roles/entities/role.entity';

@Entity("system_user")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    account: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @ManyToMany(type => Role, role => role)
    @JoinTable({
        name: "system_user_role",
        joinColumn: { name: 'userId' },
        inverseJoinColumn: { name: 'roleId' }
    })
    roles: Role[];
}