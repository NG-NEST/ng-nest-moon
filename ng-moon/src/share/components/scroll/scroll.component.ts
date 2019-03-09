import {
  Component, OnInit, HostBinding, ViewChild, ElementRef, Renderer2
} from '@angular/core';

@Component({
  selector: 'nm-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit {

  @HostBinding('style.height') height: number;

  // 内容
  @ViewChild("wrapper") wrapper: ElementRef;

  // 滚动条
  @ViewChild("scrollbar") scrollbar: ElementRef;

  constructor(
    private ele: ElementRef,
    private render2: Renderer2
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    //  console.log(this.height)
  }

  ngAfterContentChecked() {
    // console.log(this.wrapper.nativeElement.clientHeight);
    // console.log(this.scrollbar.nativeElement.clientHeight);
  }

}
