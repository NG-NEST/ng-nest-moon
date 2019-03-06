import { Entity, PrimaryColumn, Column, ManyToOne, ObjectType } from "typeorm";
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

    @Column({ nullable: true })
    required?: boolean;

    @Column({ nullable: true })
    disabled?: boolean;

    @Column({ nullable: true })
    readonly?: boolean;

    @Column({ nullable: true, type: 'json' })
    col?: Object;

    @Column({ length: 36 })
    pageId: string;

    @ManyToOne(type => Page, page => page.controls, { cascade: ['insert', 'update'] })
    page: Page;
}

export interface ColType {
    id: ColEnum,
    label: string
}

export enum ColEnum {
    One = 1,
    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5,
    Six = 6,
    Seven = 7,
    Eight = 8,
    Nine = 9,
    Ten = 10,
    Eleven = 11,
    Twelve = 12
}
