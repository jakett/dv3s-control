import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    constructor() { }

    private scrollbarOptions = {
        axis: 'y',
        theme: 'minimal-dark'
    };

    /* -------------------- FUNCTIONS DETAIL -------------------- */

    getScrollbarOptions() {
        return this.scrollbarOptions;
    }
}
