import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { myFormDirective } from './directives/form-directive.directive';
import { myInputDirective } from './directives/input-directive.directive';

@Component({
    standalone: true,
    imports: [CommonModule, FormsModule, myFormDirective, myInputDirective],
    selector: 'mono-playground-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'template-form';

    public model = {
        input1: 'input1',
        input2: '',
        input3: '',
        input4: '',
    };

    public modelChange = (value: any) => {
        console.log(this.model);
    };
}
