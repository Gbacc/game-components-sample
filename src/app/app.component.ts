import { Component } from '@angular/core';
import { TimeTrackingCardData } from 'game-components';
import { MostPlayedData } from 'game-components';

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
        imgUrl: 'https://cdn-images-1.medium.com/max/2600/1*xo_ieo3nfyA0KCh-j8l1OQ.png'
    }

    public mostPlayedComponentData: Array<MostPlayedData> = [
        {
            label: 'Card 1 with label',
            timeSpent: {
                hours: 10,
                minutes: 39
            },
            imgUrl: 'https://pocket-image-cache.com/direct?url=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1600%2F0*M2e8BlgCZ2xEY51A&resize=w880'
        },
        {
            label: 'Card 2 with label',
            timeSpent: {
                hours: 123,
                minutes: 39
            },
            imgUrl: 'https://cdn-images-1.medium.com/max/1000/0*-eB8L7-mDpQKLYPE'
        },
        {
            label: 'Card 3 with label',
            timeSpent: {
                hours: 54,
                minutes: 39
            },
            imgUrl: 'https://cdn-images-1.medium.com/max/2600/1*CRXQDOXGvKBpB-N6Fv74lw.jpeg'
        }
    ]
}
