import { Component } from '@angular/core';
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

	public test = {
		fn: () => {}
	};

    public model = {
        input1: 'initial value',
        input2: '',
        input3: '',
        input4: '',
    };

    public modelChange = (value: any) => {
        this.model = {...value};
		console.log('modelChange', this.model);
    };

	submit() {
		console.log(this.model);
	}
}
