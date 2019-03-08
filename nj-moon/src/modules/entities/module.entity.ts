import { Entity, Column, PrimaryColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Page } from './page.entity';

@Entity("system_module")
export class Module {
    @PrimaryColumn("uuid", { length: 36 })
    id: string;

    @Column()
    name: string;

    @Column()
    code: string;

    @Column()
    description: string;

    @Column({ nullable: true})
    icon: string;

    @CreateDateColumn()
    createTime: Date;

    @UpdateDateColumn()
    updateTime: Date;

    @OneToMany(type => Page, page => page.module)
    pages: Page[];
}