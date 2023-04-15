import { Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormsModule, NgControl } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { MatInput } from '@angular/material/input';

@Component({
    selector: 'maf-input',
    standalone: true,
    imports: [CommonModule, FormsModule, MaterialModule],
    template: `
        <mat-form-field appearance="fill">
            <mat-label>{{ label }} ({{ type }})</mat-label>
            <input matInput [(ngModel)]="value" [disabled]="disabled" />
        </mat-form-field>
        <mat-error *ngIf="control.hasError('email') && !control.hasError('required')"> Please enter a valid email address </mat-error>
        <mat-error *ngIf="control.hasError('email')">
            {{ control.errors | json }}
        </mat-error>
    `,
    styles: [':host.ng-invalid .mat-mdc-text-field-wrapper { border: 1px solid red;  }'],
})
export class MafInputComponent implements OnInit {
    @ViewChild(MatInput, { static: true }) input!: MatInput | null;
    @Input() disabled = false;
    @Input() type!: string;
    @Input() label!: string;
    @Input() items: Record<string, string | number>[] = [];
    control = inject(NgControl);

    get value() {
        return this.control.value;
    }
    set value(v: string) {
        this.control?.control?.setValue(v);
    }

    ngOnInit() {


        this.input?.ngControl?.control?.setErrors([{custom: 'error'}]);
        // this.input.disabled = true
        console.log('HAS ERROR', this.control.hasError('email'));
        // this.control?.statusChanges?.subscribe( status => console.log(status) )
    }
}
