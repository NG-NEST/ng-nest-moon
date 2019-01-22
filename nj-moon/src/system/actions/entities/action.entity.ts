
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { Menu } from '../../menus/entities/menu.entity';

@Entity("system_action")
export class Action {
    @PrimaryColumn("uuid", { length: 36 })
    id: string;

    @Column()
    name: string;

    @Column()
    code: string;

    @Column()
    icon: string;

    @Column({ length: 36 })
    menuId: string;

    @ManyToOne(type => Menu, menu => menu.actions)
    menu: Menu;
}