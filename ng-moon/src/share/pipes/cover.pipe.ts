import { Pipe, PipeTransform } from "@angular/core";
import * as _ from "lodash";

@Pipe({ name: "nmCover" })
export class CoverPipe implements PipeTransform {
    transform(value: number, arg: number = 1) {
        if (!_.isNumber(value) || value >= Math.pow(10, arg)) return value;
        let str = _.toString(value);
        while (str.length != arg + 1) {
            str = `0${str}`;
        }
        return str;
    }
}
