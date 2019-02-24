import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import { Page } from "./page.entity";

@Entity("system_control")
export class Control {
    @PrimaryColumn("uuid", { length: 36 })
    id: string;

    @Column()
    name: string;

    @Column()
    code: string;

    @Column({ nullable: true })
    description: string;

    @Column({ length: 36 })
    pageId: string;

    @ManyToOne(type => Page, page => page.controls, { cascade: ['insert', 'update'] })
    page: Page;
}