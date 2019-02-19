import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Page } from './page.entity';

@Entity("system_module")
export class Module {
    @PrimaryColumn("uuid", { length: 36 })
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ nullable: true})
    icon: string;

    @Column({ nullable: true})
    updateDate: Date;

    @OneToMany(type => Page, page => page.module)
    pages: Page[];
}