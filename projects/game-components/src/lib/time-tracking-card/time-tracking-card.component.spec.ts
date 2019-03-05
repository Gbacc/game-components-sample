import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTrackingCardComponent } from './time-tracking-card.component';
import { TimeTrackingCardData } from './time-tracking-card.model';

describe('TimeTrackingCardComponent', () => {
    let component: TimeTrackingCardComponent;
    let fixture: ComponentFixture<TimeTrackingCardComponent>;
    let element: HTMLElement;
    const data: TimeTrackingCardData = {
        label: 'Test games',
        plateform: ['PC', 'PSV'],
        timeSpent: {
            hours: 10,
            minutes: 30
        },
        timeTarget: {
            hours: 20,
            minutes: 40
        },
        imgUrl: 'https://pocket-image-cache.com/direct?url=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F2000%2F1*QZppItKE3Sqdi3kZA-TNGQ.png&resize=w880'
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TimeTrackingCardComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TimeTrackingCardComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show game informations', () => {
        expect(element.querySelector('.card-info-title')).toBeNull();
        expect(element.querySelector('.card-info-progress-time-spent')).toBeNull();
        expect(element.querySelector('.card-info-progress-time-target')).toBeNull();
        expect(element.querySelector('.card-img img')).toBeNull();
        expect(element.querySelectorAll('.card-info-plateform-label').length).toBe(0);

        component.data = data;
        fixture.detectChanges();

        expect(element.querySelector('.card-info-title').textContent).toContain('Test games');
        expect(element.querySelector('.card-info-progress-time-spent').textContent).toContain('access_alarm10h 30m');
        expect(element.querySelector('.card-info-progress-time-target').textContent).toContain('20h 40mcheck_circle');
        expect(element.querySelector('.card-img img')).toBeDefined();

        const plateformLabel = element.querySelectorAll('.card-info-plateform-label');
        expect(plateformLabel.length).toBe(2);
        expect(plateformLabel[0].textContent).toBe('PC');
        expect(plateformLabel[1].textContent).toBe('PSV');
    });
});
