import { Component, OnInit, Input } from '@angular/core';
import { MostPlayedData } from './most-played.model';

@Component({
    selector: 'ngc-most-played',
    templateUrl: './most-played.component.html',
    styleUrls: ['./most-played.component.scss']
})
export class MostPlayedComponent implements OnInit {
    @Input() public data: Array<MostPlayedData>;
    public orderedData: Array<MostPlayedData>;

    constructor() { }

    ngOnInit() {
        if (this.data) {
            this.orderedData = this.data.sort((a: MostPlayedData, b: MostPlayedData) => {
                return b.timeSpent.hours - a.timeSpent.hours;
            })
        }
    }

}
