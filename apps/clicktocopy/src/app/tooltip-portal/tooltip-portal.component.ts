import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'mono-playground-tooltip-portal',
    templateUrl: './tooltip-portal.component.html',
    styleUrls: ['./tooltip-portal.component.scss'],
})
export class TooltipPortalComponent implements OnInit {

	@Input() public content = 'Not set';

    constructor() {}

    ngOnInit(): void {}
}
