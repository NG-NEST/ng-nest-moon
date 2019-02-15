import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity("system_module")
export class Module {
    @PrimaryColumn("uuid", { length: 36 })
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    icon: string;
}