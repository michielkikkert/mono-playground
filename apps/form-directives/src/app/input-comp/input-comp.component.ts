import { Component, inject, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';
import {
	ControlContainer,
	ControlValueAccessor,
	FormControl,
	FormGroup,
	NgControl,
	ReactiveFormsModule
} from '@angular/forms';
import { MatAutocomplete } from '@angular/material/autocomplete';

@Component({
    selector: 'maf-select',
    standalone: true,
    imports: [CommonModule, NgSelectModule, ReactiveFormsModule],
    template: `<ng-select></ng-select>`,
    styles: [''],
	providers: [
		{
			provide: MatAutocomplete, useClass: NgSelectComponent, useExisting: true
		}
	]
})
export class InputCompComponent {
	@Input() formControlName!: string;
    control = new FormControl();

    constructor() {
        // this.container.addControl(this.formControlName ,this.control)
    }
}
