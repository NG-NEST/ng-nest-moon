
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, Tree, TreeChildren, TreeParent, TreeLevelColumn } from 'typeorm';
import { Action } from '../../actions/entities/action.entity';

@Entity("system_menu")
export class Menu {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    label: string;

    @Column()
    router: string;

    @Column()
    icon: string;

    @Column({ nullable: true })
    parentId?: string;

    @Column({ nullable: true, length: 5000 })
    path?: string;

    @ManyToOne(type => Menu, menu => menu.children)
    parent: Menu;

    @OneToMany(type => Menu, menu => menu.parent)
    children: Menu[];

    @OneToMany(type => Action, action => action.menu)
    actions: Action[];
}