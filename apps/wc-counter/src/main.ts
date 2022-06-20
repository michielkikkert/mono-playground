import { enableProdMode, Injector } from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import { CounterComponent } from './app/counter/counter.component';
import { createCustomElement } from '@angular/elements';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(CounterComponent);

const wc = createCustomElement(CounterComponent, { injector: Injector.create({ providers: [] }) });
customElements.define('my-counter', wc);




