import { Component, OnInit, Input } from '@angular/core';
import { TimeTrackingCardData } from './time-tracking-card.model';

@Component({
    selector: 'ngc-time-tracking-card',
    templateUrl: './time-tracking-card.component.html',
    styleUrls: ['./time-tracking-card.component.scss']
})
export class TimeTrackingCardComponent implements OnInit {
    @Input() public data: TimeTrackingCardData;
    public consoles: Array<string> = ['PSP', 'PSV', 'PS3', 'PS2', 'PS1', 'PS4', 'X360', 'XONE', 'XBOX', 'XONE', 'Wii', 'WiiU', 'Switch'];

    constructor() { }

    ngOnInit() {

    }

}
