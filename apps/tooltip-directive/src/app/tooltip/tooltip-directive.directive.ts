import { ComponentRef, Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { TooltipComponent } from './tooltip.component';

type Config = {
    contentId: string;
    position?: 'before' | 'after';
};

@Directive({
    selector: '[monoPlaygroundTooltipDirective]',
})
export class TooltipDirectiveDirective implements OnInit {
    @Input() monoPlaygroundTooltipDirective!: string | Config;

    constructor(private viewContainer: ViewContainerRef, private templateRef: TemplateRef<TooltipComponent>) {}

    ngOnInit() {
        let compRef: ComponentRef<TooltipComponent> | null;
        const config: Config =
            typeof this.monoPlaygroundTooltipDirective === 'object'
                ? this.monoPlaygroundTooltipDirective
                : {
                      contentId: this.monoPlaygroundTooltipDirective,
                      position: 'after',
                  };
        if (config.position === 'before') {
            compRef = this.doComponent();
            this.doTemplate();
        } else {
            this.doTemplate();
            compRef = this.doComponent();
        }

        compRef.instance.content = `${config.contentId} - I'm the content you'll see`;
    }

    doComponent() {
        return this.viewContainer.createComponent(TooltipComponent);
    }

    doTemplate() {
        this.viewContainer.createEmbeddedView(this.templateRef);
    }
}
