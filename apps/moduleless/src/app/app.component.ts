import { Component, Injector, NgModule, NgModuleRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'mono-playground-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'moduleless';

    @ViewChild ('container', {read: ViewContainerRef}) viewContainer!: ViewContainerRef;

    ngOnInit() {
      console.log('INIT');
    }

    constructor(private module: NgModuleRef<any>) {
      console.log({module});
    }

    async loadComponent() {
        const comp = await import('./test1/test1.component');
        const ref = this.viewContainer.createComponent(comp.Test1Component, {ngModuleRef: this.module});
        ref.instance.message = Math.random().toString();
    }
}
