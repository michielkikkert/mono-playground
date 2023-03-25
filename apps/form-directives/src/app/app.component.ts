import { Component } from '@angular/core';
import { MaterialModule } from "./material.module";
import { MafInputDirective } from "./directives/maf-input.directive";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
    standalone: true,
    imports: [MaterialModule, MafInputDirective, ReactiveFormsModule],
    selector: 'mono-playground-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'form-directives';
    form: FormGroup = new FormGroup<any>({
        test: new FormControl('test'),
        test2: new FormControl( 'blabla'),
        select: new FormControl('two'),
        textarea: new FormControl('I\'m a text area')
    });
}
