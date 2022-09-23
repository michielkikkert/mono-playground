import { AfterContentInit, ContentChildren, Directive, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { NgForm } from '@angular/forms';
import { myInputDirective } from './input-directive.directive';

@Directive({
    selector: 'form[model]',
    standalone: true,
})
export class myFormDirective implements AfterContentInit {
    @Input() public model!: any;
    @Output() public modelChange: EventEmitter<any> = new EventEmitter<any>();
    @ContentChildren(myInputDirective) inputs!: QueryList<myInputDirective>;

    constructor(private form: NgForm) {
		console.log(form);
    }

    ngAfterContentInit() {
        this.inputs.toArray().forEach( input => {
			input.input.nativeElement.value = this.model[input.input.nativeElement.name];
			input.inputChange.subscribe( change => {
				this.model[Object.keys(change)[0]] = Object.values(change)[0];
				this.modelChange.emit(change);
				console.log(this.model);
			})
        })
    }
}
