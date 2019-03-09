import { Directive, EventEmitter, HostListener } from '@angular/core';

@Directive({
    selector: '[longPress]',
    outputs: ['longPress']
})
export class LongPressDirective {

    longPress = new EventEmitter<boolean>();

    timeOutEvent;

    @HostListener('mousedown', ['$event']) mousedown(event) {
        this.timeOutEvent = setTimeout(() => {
            this.longPress.emit(true)
        }, 300)
        event.preventDefault();
    }

    @HostListener('mousemove', ['$event']) mousemove() {
        if (this.timeOutEvent) clearTimeout(this.timeOutEvent);
    }

    @HostListener('mouseup', ['$event']) mouseup() {
        if (this.timeOutEvent) clearTimeout(this.timeOutEvent);
        return false;
    }

    constructor(
    ) { }

    ngOnInit() {

    }

}
