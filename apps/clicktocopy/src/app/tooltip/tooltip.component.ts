import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
    selector: 'mono-playground-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit {

	@Input() public content = 'Not set';
	@HostBinding('class.show') public isShowing = false;


    constructor() {}

    ngOnInit(): void {}
}
