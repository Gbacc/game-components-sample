import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { TimeTrackingCardComponent } from './time-tracking-card/time-tracking-card.component';

@NgModule({
    declarations: [TimeTrackingCardComponent],
    imports: [
        CommonModule
    ],
    exports: [TimeTrackingCardComponent]
})
export class GameComponentsModule { }
