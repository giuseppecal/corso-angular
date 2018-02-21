import { Directive, ElementRef, Input } from '@angular/core';

declare const $: any;

@Directive({
    selector: '[modalOpener]'
})
export class ModalOpenereDirective {

    @Input('modalOpener')
    public modalId: string;

    constructor(el: ElementRef) {
        $(el.nativeElement).click(() => $( '#' + this.modalId ).modal('show'));
    }
}
