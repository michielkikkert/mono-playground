import { Component } from '@angular/core';
import { MaterialModule } from "./material.module";

@Component({
    standalone: true,
    imports: [MaterialModule],
    selector: 'mono-playground-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'form-directives';
}
