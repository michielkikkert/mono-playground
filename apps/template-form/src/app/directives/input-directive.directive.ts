import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
    selector: 'form input[name]',
    standalone: true,
})
export class myInputDirective implements OnInit {
    @Input() public name = '';

    @Output() inputChange: EventEmitter<any> = new EventEmitter<any>();

    constructor(public input: ElementRef) {}

    ngOnInit() {
		console.log(this.input);
    }

    @HostListener('input', ['$event.target'])
    onInput(el: HTMLInputElement) {
        console.log(this.name);
        this.inputChange.emit({ [this.name]: el.value });
    }
}
