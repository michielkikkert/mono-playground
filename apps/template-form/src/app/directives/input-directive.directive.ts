import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
    selector: 'form input[name]',
    standalone: true,
})
export class myInputDirective {
    @Input() public name!: string;
    public control: FormControl;

    constructor(private input: ElementRef) {
        this.control = new FormControl<any>('');
		this.control.setValue(input.nativeElement.value);
		this.control.updateValueAndValidity();
    }

    @HostListener('input', ['$event.target.value'])
    onInput(value: any): void {
        this.control.setValue(value);
    }
}

