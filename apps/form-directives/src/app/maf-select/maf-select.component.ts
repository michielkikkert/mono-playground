import { Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlContainer, FormGroupDirective, FormsModule, NgControl } from '@angular/forms';
import { NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';
import { CvaDirective } from '../directives/cva.directive';

@Component({
    selector: 'maf-select',
    standalone: true,
    imports: [CommonModule, NgSelectModule, FormsModule],
    template: `<ng-select #select [(ngModel)]="value"  [items]="items" [placeholder]="label"> </ng-select> `,
})
export class MafSelectComponent implements OnInit {
    @ViewChild(NgSelectComponent, { static: true }) select!: NgSelectComponent;
    @Input() type!: string;
    @Input() label!: string;
    @Input() items: Record<string, string | number>[] = [];
    control = inject(NgControl);

	get value() {
		return this.control.value;
	}

	set value(v: any) {
		this.control?.control?.setValue(v);
	}

    ngOnInit() {
        console.log('MafSelectComponent select', this.select);
        console.log('MafSelectComponent type', this.type);
        this.select.clearable = false;
    }
}
