import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponentsModule } from 'game-components';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        GameComponentsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
