import { Component } from '@angular/core';
import { TimeTrackingCardData } from 'game-components';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public timeTrackingComponentData: TimeTrackingCardData = {
        label: 'Card 1 with label',
        plateform: [
            'PSV',
            'PC'
        ],
        timeSpent: {
            hours: 43,
            minutes: 39
        },
        timeTarget: {
            hours: 50
        },
        imgUrl: 'https://pocket-image-cache.com/direct?url=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F2000%2F1*QZppItKE3Sqdi3kZA-TNGQ.png&resize=w880'
    }
}
