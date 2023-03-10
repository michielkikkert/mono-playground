import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TooltipDirectiveDirective } from './tooltip/tooltip-directive.directive';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipComponent } from './tooltip/tooltip.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [AppComponent, TooltipDirectiveDirective, TooltipComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
    ],
    providers: [],
    exports: [TooltipDirectiveDirective],
    bootstrap: [AppComponent],
})
export class AppModule {}
