import { Injectable } from '@angular/core';
import { ImportTypeormTpl, EntityTpl, ClassTpl, ColumnTpl, PrimaryColumnTpl, StringType, NumberType } from './mi-entity.store';
import { SettingService } from 'src/services/setting.service';

@Injectable({ providedIn: 'root' })
export class MiEntityService {

    constructor(private setting: SettingService) {
    }

    createCode(data) {
        let importTypeormTpl = ImportTypeormTpl,
            importTypeorm = [],
            entityTpl = EntityTpl,
            columnsTpl = '',
            classTpl = ClassTpl,
            hasColumn = false,
            hasPrimaryColumn = false;
        if (data.code) {
            entityTpl = entityTpl.replace(`$[entity]`, `'${data.code}'`);
            entityTpl = entityTpl.replace(`$[description]`, `${data.description}`);
            importTypeorm.push('Entity');
        }
        for (let col of data.cols) {
            let name = col.name,
                type = 'string',
                column = ColumnTpl,
                param = '',
                description = '',
                columnParam = [];
            if (col.primary) {
                if (!hasPrimaryColumn) {
                    importTypeorm.push('PrimaryColumn');
                    hasPrimaryColumn = true;
                }
                column = PrimaryColumnTpl;
            } else if (!hasColumn) {
                importTypeorm.push('Column');
                hasColumn = true;
            }
            if (col.nullable) columnParam.push(`nullable: true`);
            if (col.unique) columnParam.push(`unique: true`);
            if (col.type.key === 'text') columnParam.push(`type: 'text'`);
            if (col.type.key === 'json') columnParam.push(`type: 'json'`);
            if (col.type.key === 'char') columnParam.push(`type: 'char'`);
            if (col.type.key === 'int') columnParam.push(`type: 'int'`);
            if (col.length > 0) columnParam.push(`length: ${col.length}`);
            if (columnParam.length > 0) param = `{ ${columnParam.join(', ')} }`;
            if (col.label) description = col.label;
            if (StringType.indexOf(col.type.key) > -1) { type = 'string'; }
            else if (NumberType.indexOf(col.type.key) > -1) { type = 'number'; }
            else if (col.type.key === 'json') { type = 'Object'; }
            else if (col.type.key === 'date') { type = 'Date'; }

            column = this.setting.replace(column, {
                description: description,
                name: name,
                type: type,
                param: param
            });

            columnsTpl += column;
        }

        importTypeormTpl = importTypeormTpl.replace(`$[importTypeorm]`, importTypeorm.join(`, `));

        classTpl = this.setting.replace(classTpl, {
            entityTpl: entityTpl,
            className: data.name,
            importTypeormTpl: importTypeormTpl,
            columnsTpl: columnsTpl
        });

        return classTpl;
    }
}

