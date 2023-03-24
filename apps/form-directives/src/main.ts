import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom([BrowserAnimationsModule])]
}).catch((err) => console.error(err));
