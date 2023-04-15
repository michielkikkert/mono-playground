import { Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgControl } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { MatInput } from '@angular/material/input';

@Component({
    selector: 'maf-input',
    standalone: true,
    imports: [CommonModule, FormsModule, MaterialModule],
    template: `
      <mat-form-field appearance="fill">
        <mat-label>{{label}} ({{type}})</mat-label>
        <input matInput [(ngModel)]="value" [disabled]="disabled"/>
      </mat-form-field>`,
})
export class MafInputComponent implements OnInit {
    @ViewChild(MatInput, { static: true }) input!: MatInput;
	@Input() disabled: boolean = false;
    @Input() type!: string;
    @Input() label!: string;
    @Input() items: Record<string, string | number>[] = [];
    control = inject(NgControl);

    get value() {return this.control.value;}
	set value(v: string) {this.control?.control?.setValue(v);}

    ngOnInit() {
        this.input.disabled = true
    }
}
