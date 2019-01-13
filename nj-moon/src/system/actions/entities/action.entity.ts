
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Menu } from '../../menus/entities/menu.entity';

@Entity("system_action")
export class Action {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    name: string;

    @Column()
    icon: string;

    @Column()
    menuId: string;

    @ManyToOne(type => Menu, menu => menu.actions)
    menu: Menu;
}