import { AfterViewInit, Directive, ElementRef, HostListener, inject, Input, OnInit } from "@angular/core";
import { MatInput } from "@angular/material/input";
import { FormGroup, FormGroupDirective, NgControl, NgForm } from "@angular/forms";

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: "input,mat-select, textarea",
    standalone: true,
    hostDirectives: []
})
export class MafInputDirective implements OnInit {
    private inputInject = inject(MatInput, { optional: true });
    private control = inject(NgControl);
    private el = inject(ElementRef);
    private theForm = inject(FormGroupDirective);
    private controlType!: string;
    private inputType!: string;

    // TODO: make a specific directive that matches [type='gva'] - insert hostDirective ngx-mask?

    ngOnInit() {
        // this.theForm.form.valueChanges.subscribe( form => {
        //   console.log({form});
        // })
        //
        // this.inputInject?.ngControl?.valueChanges?.subscribe( (value) => console.log(value) )
        // this.control.valueChanges?.subscribe( (value) => console.log(value) )
        // // console.log('TYPE: ', this.inputInject?.type || this.el.nativeElement.type);
        this.controlType = this.el.nativeElement.type ? this.el.nativeElement.type : this.el.nativeElement.nodeName;
        this.inputType = this.el.nativeElement.getAttribute('type');
        console.log('control type',this.controlType);
        console.log('input type', this.el.nativeElement.getAttribute('type'));
        this.control.valueChanges?.subscribe( (value) => {

            const stringArr = value.split('');
            stringArr.splice(2, 0 , '/')
            this.control?.control?.setValue(stringArr.join(), {emitEvent: false});

        })
    }

    @HostListener('blur', ['$event'])
    onBlur(event: Event) {
        if(this.inputType === 'gva') {
            console.log('blur!');

        }
    }
}
