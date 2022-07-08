import { ComponentRef, Directive, ElementRef, HostBinding, HostListener, Input, ViewContainerRef } from '@angular/core';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { Clipboard } from '@angular/cdk/clipboard';

@Directive({
    selector: '[monoPlaygroundCopyMe]',
})
export class CopyMeDirective {

	@Input() public monoPlaygroundCopyMe: string = '';
	@HostBinding('class.has-tooltip') hasTooltip = true;

	compRef!: ComponentRef<TooltipComponent> | null;
	host: HTMLElement = this.element.nativeElement

    constructor(private viewRef: ViewContainerRef, private element: ElementRef, private clipboard: Clipboard) {
		this.createTooltip();
    }

	createTooltip(): void {
		this.compRef = this.viewRef.createComponent(TooltipComponent);
		this.compRef.instance.content = "Click me to copy";
		this.compRef.instance.isShowing = false;
		this.setupHost(this.compRef);
	}

	setupHost(compRef: ComponentRef<TooltipComponent>): void {
		this.host.style.position = 'relative';
		this.host.insertBefore(compRef.location.nativeElement, this.host.firstChild);
	}

	@HostListener('click') click = () => {
		const pending = this.clipboard.beginCopy(this.monoPlaygroundCopyMe);
		if(pending.copy() && this.compRef){
			const content = this.compRef.instance.content;
			this.compRef.instance.content ='Gekopieerd!';
			setTimeout(() => {
				this.compRef && (this.compRef.instance.content = content);
				this.compRef && (this.compRef.instance.isShowing = false);
			}, 2000)
		}
	}

	@HostListener('mouseover') activateTooltip = () => {
		if(this.compRef) {
			this.compRef.instance.isShowing = true;
		}
	}

	@HostListener('mouseout') deactivateTooltip = () => {
		if(this.compRef) {
			this.compRef.instance.isShowing = false;
		}
	}

}
