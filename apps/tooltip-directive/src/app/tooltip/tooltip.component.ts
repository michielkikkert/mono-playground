import { Component, Input } from '@angular/core';

@Component({
    selector: 'mono-playground-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
    constructor() {}
    @Input() public content!: string;
    public shown = false;

    toggle() {
        this.shown = !this.shown;
    }
}
