import { Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlContainer, FormGroupDirective, FormsModule, NgControl } from '@angular/forms';
import { NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';
import { CvaDirective } from '../directives/cva.directive';

@Component({
    selector: 'maf-select',
    standalone: true,
    imports: [CommonModule, NgSelectModule, FormsModule],
    template: `<ng-select #select [ngModel]="value" (ngModelChange)="change($event)" [items]="items" [placeholder]="label"> </ng-select> `,
})
export class MafSelectComponent implements OnInit {
    @ViewChild(NgSelectComponent, { static: true }) select!: NgSelectComponent;
    @Input() type!: string;
    @Input() label!: string;
    @Input() items: Record<string, string | number>[] = [];
    control = inject(NgControl);
    container = inject(ControlContainer) as FormGroupDirective;
    cva = inject(CvaDirective);
    value: any;

    change(value: any) {
        console.log('MafSelectComponent CHANGE', value);
        this.cva.onChange(value);
    }

    ngOnInit() {
        this.value = this.container?.form?.controls[this.control?.name || '']?.value;
        console.log('MafSelectComponent select', this.select);
        console.log('MafSelectComponent type', this.type);
        this.select.clearable = false;
    }
}
