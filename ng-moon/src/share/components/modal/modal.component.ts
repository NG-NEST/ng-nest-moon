import {
  Component, OnInit, ViewEncapsulation, Inject, ViewChild, TemplateRef, ViewContainerRef, HostBinding, ElementRef, Renderer2
} from '@angular/core';
import { ModalOption, MODALOPTION } from './modal.type';
import { Portal, TemplatePortal, CdkPortalOutlet } from '@angular/cdk/portal';

@Component({
  selector: 'nm-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {

  @ViewChild('portalOutlet') portalOutlet: CdkPortalOutlet;

  constructor(
    @Inject(MODALOPTION) public option: ModalOption,
    private ele: ElementRef,
    private renderer: Renderer2,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
    this.portalOutlet.attach(new TemplatePortal(this.option.templateRef, this.viewContainerRef, this.option.context))
    this.renderer.addClass(this.ele.nativeElement, this.option.panelClass);
  }

  close() {
    this.option.detach();
  }

}
