import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'mono-playground-test1',
    templateUrl: './test1.component.html',
    styleUrls: ['./test1.component.scss'],
    standalone: true,
    imports: [CommonModule],
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
