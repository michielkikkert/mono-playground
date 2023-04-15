import { Component } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MafSelectComponent } from './maf-select/maf-select.component';
import { CvaDirective } from './directives/cva.directive';
import { MafInputComponent } from './maf-input/maf-input.component';

@Component({
    standalone: true,
    imports: [MaterialModule, ReactiveFormsModule, JsonPipe, MafSelectComponent, MafInputComponent, CvaDirective],
    selector: 'mono-playground-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'form-directives';
    public selectItems = [
        { label: 'optie 1', value: 1 },
        { label: 'optie 2', value: 2 },
        { label: 'optie 3', value: 3 },
        { label: 'optie 4', value: 4 },
    ] as Record<string, string | number>[]
    form: FormGroup = new FormGroup<any>({
        test: new FormControl('test', [Validators.email, Validators.required]),
        test2: new FormControl(this.selectItems[0]),
        select: new FormControl(this.selectItems[1]),
        // textarea: new FormControl('I\'m a text area')
    });
}
