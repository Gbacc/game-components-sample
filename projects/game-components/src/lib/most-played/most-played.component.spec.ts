import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPlayedComponent } from './most-played.component';
import { MostPlayedData } from './most-played.model';

describe('MostPlayedComponent', () => {
    let component: MostPlayedComponent;
    let fixture: ComponentFixture<MostPlayedComponent>;
    let element: HTMLElement;
    const data: Array<MostPlayedData> = [
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
    ];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MostPlayedComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MostPlayedComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show game informations', () => {
        expect(element.querySelectorAll('.game-card').length).toBe(0);

        component.data = data;
        fixture.detectChanges();

        const gameCards = element.querySelectorAll('.game-card');
        const singleGameCard = gameCards[0];
        expect(gameCards.length).toBe(3);
        expect(singleGameCard.querySelector('.game-card-info-label').textContent).toBe('Card 1 with label');
        expect(singleGameCard.querySelector('.game-card-info-timespent').textContent).toBe('10h39m');
    });
});
