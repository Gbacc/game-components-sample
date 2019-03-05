import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeTrackingCardComponent } from './time-tracking-card/time-tracking-card.component';
import { MostPlayedComponent } from './most-played/most-played.component';

@NgModule({
    declarations: [TimeTrackingCardComponent, MostPlayedComponent],
    imports: [
        CommonModule
    ],
    exports: [TimeTrackingCardComponent, MostPlayedComponent]
})
export class GameComponentsModule { }
