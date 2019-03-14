import { ColumnType } from "./mi-entity.type";

export const ColumnTypeData: { key: ColumnType, label: string }[] = [
    { key: 'varchar', label: '字符串' },
    { key: 'int', label: '整型' },
    { key: 'text', label: '文本' },
    { key: 'datetime', label: '日期' },
    { key: 'json', label: '对象' }
]