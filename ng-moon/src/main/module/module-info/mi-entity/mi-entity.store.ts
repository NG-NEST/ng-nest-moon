import { ColumnType } from "./mi-entity.type";

export const ColumnTypeData: { key: ColumnType, label: string }[] = [
    { key: 'varchar', label: 'varchar' },
    { key: 'char', label: 'char' },
    { key: 'int', label: 'int' },
    { key: 'text', label: 'text' },
    { key: 'date', label: 'date' },
    { key: 'json', label: 'json' }
]

export const StringType = ['varchar', 'char'];

export const NumberType = ['int'];

export const ImportTypeormTpl: string = `import { $[importTypeorm] } from 'typeorm';`;

export const EntityTpl: string = `
/**
 * $[description]
 */
@Entity($[entity])`;

export const PrimaryColumnTpl: string = `   
    /**
     * $[description]
     */
    @PrimaryColumn('uuid', { length: 36, type: 'char' })
    $[name]: $[type];
`;

export const ColumnTpl: string = `   
    /**
     * $[description]
     */
    @Column($[param])
    $[name]: $[type];
`;

export const ClassTpl: string =
    `$[importTypeormTpl]
$[entityTpl]
export class $[className] {
    $[columnsTpl]
}`;
