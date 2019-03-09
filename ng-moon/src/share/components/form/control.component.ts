import {
    Component, OnInit, HostBinding, ElementRef, Renderer2
} from '@angular/core';
import { ControlOption, FormOption } from './form.type';
import { FormGroup } from '@angular/forms';
import { SettingService } from 'src/services/setting.service';

@Component({
    selector: 'nm-control',
    templateUrl: './control.component.html',
    styleUrls: ['./control.component.scss'],
    inputs: ['option', 'form', 'formOption']
})
export class ControlComponent implements OnInit {

    option: ControlOption;

    formOption: FormOption;

    form: FormGroup;

    @HostBinding('class.info') get info() { return this.formOption.type == 'info' }

    private _default: ControlOption = {
        col: 12
    }

    constructor(
        private elementRef: ElementRef, 
        private renderer: Renderer2,
        private setting: SettingService
        ) { }

    ngOnInit() {
        // this.option = Object.assign(this._default, this.option);
        this.setting.mapToObject(this._default, this.option)
        this.setClass();
    }

    ngOnChanges(){
        // console.log(this.formOption.type)
    }

    setClass() {
        this.renderer.addClass(this.elementRef.nativeElement, `col-${this.option.col}`);
    }

}
