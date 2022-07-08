import { ComponentRef, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { TooltipPortalComponent } from '../tooltip-portal/tooltip-portal.component';
import { Clipboard } from '@angular/cdk/clipboard';
import { c2cConfig } from '../c2cConfig.model';

@Directive({
    selector: '[monoPlaygroundCopyMePortal]',
})
export class CopyMePortalDirective implements OnInit {

	@Input() monoPlaygroundCopyMePortal!: c2cConfig | undefined;
	private defaultHoverText = 'Klik om te kopiëren';
	private defaultKopieText = 'Gekopieerd';
	private overlayRef!: OverlayRef;
	private tooltipRef!: ComponentRef<TooltipPortalComponent>;

	constructor(private overlay: Overlay, private clipboard: Clipboard,  private element: ElementRef, private overlayPositionBuilder: OverlayPositionBuilder) {}

	ngOnInit(): void {
		const positionStrategy = this.overlayPositionBuilder
			.flexibleConnectedTo(this.element)
			.withPositions([{
				originX: 'start',
				originY: 'bottom',
				overlayX: 'center',
				overlayY: 'top',
			}]);

		this.overlayRef = this.overlay.create({panelClass: 'maf-c2c-tooltip', positionStrategy});
	}

	@HostListener('click') clickToCopy = () => {
		const copy = this.monoPlaygroundCopyMePortal?.copy || this.element.nativeElement.innerText || '';
		console.log({copy});
		const pending = this.clipboard.beginCopy(copy);
		if (pending.copy() && this.tooltipRef) {
			const content = this.tooltipRef.instance.content;
			this.tooltipRef.instance.content = this.monoPlaygroundCopyMePortal?.kopieText || this.defaultKopieText;
			setTimeout(() => {
				this.tooltipRef && (this.tooltipRef.instance.content = content);
				this.overlay && this.hide();
			}, 2000);
		}
	};

	@HostListener('mouseenter')
	show() {
		// Create tooltip portal
		const tooltipPortal = new ComponentPortal(TooltipPortalComponent);

		// Attach tooltip portal to overlay
		this.tooltipRef = this.overlayRef.attach(tooltipPortal);

		// Pass content to tooltip component instance
		this.tooltipRef.instance.content = this.monoPlaygroundCopyMePortal?.hoverText || this.defaultHoverText;
	}

	@HostListener('mouseout')
	hide() {
		this.overlayRef.detach();
	}


}
