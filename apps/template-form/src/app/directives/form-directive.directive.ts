import {
	AfterContentInit,
	ContentChildren,
	Directive,
	ElementRef,
	EventEmitter,
	Input,
	Output,
	QueryList
} from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { myInputDirective } from './input-directive.directive';

@Directive({
    selector: 'form[model]',
    standalone: true,
})
export class myFormDirective extends FormGroupDirective implements AfterContentInit {
    @Input() public model!: any;
    @Output() public modelChange: EventEmitter<any> = new EventEmitter<any>();
    @ContentChildren(myInputDirective) inputs!: QueryList<myInputDirective>;
	public override form = new FormGroup({});

    constructor(private elem: ElementRef) {
		console.log({elem});
        super([], []);
    }

    ngAfterContentInit() {
        this.inputs.toArray().forEach((input: myInputDirective) => {
			this.form.addControl(input.name, input.control);
        });

		console.log(this.form);

		this.form.valueChanges.subscribe( form => {
			this.modelChange.emit(form);
			this.model = form;
		})
    }
}
