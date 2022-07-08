import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CopyMeDirective } from './directives/copy-me.directive';
import { TooltipComponent } from './tooltip/tooltip.component';
import { CopyMePortalDirective } from './directives/copy-me-portal.directive';
import { OverlayModule } from '@angular/cdk/overlay';
import { TooltipPortalComponent } from './tooltip-portal/tooltip-portal.component';

@NgModule({
    declarations: [AppComponent, CopyMeDirective, TooltipComponent, CopyMePortalDirective, TooltipPortalComponent],
    imports: [BrowserModule, OverlayModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
