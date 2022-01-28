import {
    Component,
    OnDestroy,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'mono-playground-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
    title = 'dynamic component loader';
    @ViewChild('container', { read: ViewContainerRef })
    viewContainer!: ViewContainerRef;
    data$: BehaviorSubject<unknown> = new BehaviorSubject<unknown>(null);
    counter = 0;
    subs: Subscription[] = [];

    constructor(private http: HttpClient) {}

    async loadComponent() {
        // Import component dynamically
        const comp = await import('./test1/test1.component');

        // Create and Attach to view container
        const compRef = this.viewContainer.createComponent(comp.Test1Component);

        // Get the instance and set inputs
        const { instance } = compRef;
        instance.id = this.counter;
        instance.data$ = this.data$;

        // Listen to the delete me request from the inserted component and remove from the viewContainer.
        this.subs.push(
            instance.deleteMe.subscribe(() => {
                this.viewContainer.remove(
                    this.viewContainer.indexOf(compRef.hostView)
                );
            })
        );
        this.counter++;
    }

    loadSharedData() {
        this.subs.push(
            this.http
                .get('https://jsonplaceholder.typicode.com/todos/1')
                .subscribe((data) => this.data$.next(data))
        );
    }

    ngOnDestroy() {
        this.subs.map((sub) => sub.unsubscribe());
    }
}
