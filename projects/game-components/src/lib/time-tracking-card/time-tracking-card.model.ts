export class TimeTrackingCardData {
    label: string;
    plateform: Array<string>;
    timeSpent: {
        hours?: number,
        minutes?: number
    };
    timeTarget?: {
        hours?: number,
        minutes?: number
    };
    imgUrl?: string;
}