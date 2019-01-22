
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, Tree, TreeChildren, TreeParent, TreeLevelColumn, ManyToMany, PrimaryColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity("system_organization")
export class Organization {
    @PrimaryColumn("uuid", { length: 36 })
    id: string;

    @Column()
    label: string;

    @Column()
    type: string;

    @Column()
    icon: string;

    @Column({ nullable: true, length: 36 })
    parentId?: string;

    @Column({ nullable: true, type: 'text' })
    path?: string;

    @ManyToOne(type => Organization, organization => organization.children)
    parent: Organization;

    @OneToMany(type => Organization, organization => organization.parent)
    children: Organization[];

    @ManyToMany(type => User, user => user.organizations)
    users: User[];
}