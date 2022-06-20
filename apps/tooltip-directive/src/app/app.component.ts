import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
    selector: 'mono-playground-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'tooltip-directive';
    form: UntypedFormGroup = new UntypedFormGroup({
        control1: new UntypedFormControl(''),
    });
}
