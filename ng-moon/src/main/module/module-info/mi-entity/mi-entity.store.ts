import { ColumnType } from "./mi-entity.type";

export const ColumnTypeData: { key: ColumnType, label: string }[] = [
    { key: 'varchar', label: '字符串' },
    { key: 'int', label: '整型' },
    { key: 'text', label: '文本' },
    { key: 'datetime', label: '日期' },
    { key: 'json', label: '对象' }
]

export const StringType = ['varchar'];

export const NumberType = ['int'];

export const ImportTypeormTpl: string = `import { $[importTypeorm] } from 'typeorm';`

export const EntityTpl: string = `@Entity($[entity])`

export const PrimaryColumnTpl: string = `
    @PrimaryColumn($[primaryColumn])
    $[name]: $[type];
`

export const ColumnTpl: string = `
    @Column($[column])
    $[name]: $[type];
`

export const ClassTpl: string = `
$[importTypeormTpl]

$[entityTpl]
export class $[className] {
    $[columnsTpl]
}
`

export const Template: string = `
    import { Entity, Column, ManyToOne, PrimaryColumn, ManyToMany } from 'typeorm';

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
    }
`