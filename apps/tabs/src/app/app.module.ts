import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TabsGroupComponent } from './tabs/tabs-group/tabs-group.component';
import { TabComponent } from './tabs/tab/tab.component';

@NgModule({
    declarations: [AppComponent, NxWelcomeComponent, TabsGroupComponent, TabComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
