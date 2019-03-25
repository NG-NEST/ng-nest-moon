import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormOption } from 'src/share/components/form/form.type';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { PageService } from '../../module.service';
import { FormService } from 'src/share/components/form/form.service';

@Component({
    selector: 'nm-mi-page-eye',
    templateUrl: './mi-page-eye.component.html',
    encapsulation: ViewEncapsulation.None
})
export class MiPageEyeComponent implements OnInit {

    formOption: FormOption;

    constructor(
        private activatedRoute: ActivatedRoute,
        private pageService: PageService,
        private formService: FormService
    ) { }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
            let id = params.get('id');
            this.pageService.findOne(id)
                .pipe(map(x => {
                    x.controls = _.orderBy(x.controls, 'sort');
                    return x;
                })).subscribe(y => {
                    this.formOption = this.formService.setFormOption(y)
                })
        });

    }
}
