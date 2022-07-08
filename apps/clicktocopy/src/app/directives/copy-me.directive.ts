import {
	ComponentRef,
	Directive,
	ElementRef,
	HostBinding,
	HostListener,
	Input,
	OnInit,
	ViewContainerRef
} from '@angular/core';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { Clipboard } from '@angular/cdk/clipboard';
import { c2cConfig } from '../c2cConfig.model';

@Directive({
    selector: '[monoPlaygroundCopyMe]',
})
export class CopyMeDirective implements OnInit {
	@Input() monoPlaygroundCopyMe!: c2cConfig | undefined;
    @HostBinding('class.has-tooltip') hasTooltip = true;

    compRef!: ComponentRef<TooltipComponent> | null;
    host: HTMLElement = this.element.nativeElement;

    constructor(private viewRef: ViewContainerRef, private element: ElementRef, private clipboard: Clipboard) {}

    ngOnInit(): void {
	    this.createTooltip();
    }

    createTooltip(): void {
        this.compRef = this.viewRef.createComponent(TooltipComponent);
        this.compRef.instance.content = 'Click me to copy';
        this.compRef.instance.isShowing = false;
        this.setupHost(this.compRef);
    }

    setupHost(compRef: ComponentRef<TooltipComponent>): void {
        // This moves the created tooltip component INSIDE the host the directive is on.
        this.host.style.position = 'relative';
        this.host.insertBefore(compRef.location.nativeElement, this.host.firstChild);
    }

    @HostListener('click') clickToCopy = () => {
	    const copy = this.monoPlaygroundCopyMe?.copy || this.element.nativeElement.innerText || '';
	    console.log({copy});
        const pending = this.clipboard.beginCopy(copy);
        if (pending.copy() && this.compRef) {
            const content = this.compRef.instance.content;
            this.compRef.instance.content = 'Gekopieerd!';
            setTimeout(() => {
                this.compRef && (this.compRef.instance.isShowing = false);
                this.compRef && (this.compRef.instance.content = content);
            }, 2000);
        }
    };

    @HostListener('mouseover') activateTooltip = () => {
        if (this.compRef) {
            this.compRef.instance.isShowing = true;
        }
    };

    @HostListener('mouseout') deactivateTooltip = () => {
        if (this.compRef) {
            this.compRef.instance.isShowing = false;
        }
    };
}
