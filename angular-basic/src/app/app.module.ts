import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
    declarations: [
        // Remove AppComponent from declarations array
    ],
    imports: [
        BrowserModule
    ],
    providers: []
})
export class AppModule {
    constructor() {
        platformBrowserDynamic().bootstrapModule(AppComponent);
    }
}
