import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CopyMeDirective } from './directives/copy-me.directive';
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
    declarations: [AppComponent, CopyMeDirective, TooltipComponent],
    imports: [BrowserModule],
    exports: [CopyMeDirective],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
