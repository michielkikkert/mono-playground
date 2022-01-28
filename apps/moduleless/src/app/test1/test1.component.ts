import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  OnInit,
  Output
} from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'mono-playground-test1',
    templateUrl: './test1.component.html',
    styleUrls: ['./test1.component.scss'],
})
export class Test1Component implements OnInit {
    @Input() id!: number;
    @Input() data$!: Observable<unknown>;
    @Output() deleteMe: EventEmitter<null> = new EventEmitter();

    ngOnInit(): void {
        console.log('init', this.id);
    }

    deleteComponent() {
        this.deleteMe.emit();
    }
}

// We need this @NgModule so we can make things like async and json pipes work through CommonModule
@NgModule({
    declarations: [Test1Component],
    imports: [CommonModule],
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Test1Module {}
