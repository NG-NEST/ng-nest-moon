import { Entity as E, Column, PrimaryColumn, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Module } from './module.entity';
import { Col } from './col.entity';

@E("system_table")
export class Table {
    @PrimaryColumn("uuid", { length: 36 })
    id: string;

    @Column()
    name: string;

    @Column()
    code: string;

    @Column({ nullable: true })
    description: string;

    @Column({ nullable: true, type: "json" })
    transform: object;

    @Column({ nullable: true })
    moduleId: string;

    @ManyToOne(type => Module, module => module.tables)
    module: Module;

    @OneToMany(type => Col, col => col.table)
    cols: Col[];
}