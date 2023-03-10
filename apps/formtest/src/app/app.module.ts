import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCardModule,
        MatFormFieldModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
