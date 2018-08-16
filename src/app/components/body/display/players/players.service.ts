import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PlayersService {

    constructor() { }

    private panesList: any[] = [
        [{ layout: { w: '100%', h: '100%', t: 0, l: 0 } }],

        [{ layout: { w: '50%', h: '100%', t: 0, l: 0 } },
         { layout: { w: '50%', h: '100%', t: 0, l: '50%' } }],

        [{ layout: { w: '100%', h: '50%', t: 0, l: 0 } },
         { layout: { w: '100%', h: '50%', t: '50%', l: 0 } }],

        [{ layout: { w: '50%', h: '50%', t: 0, l: 0 } },
         { layout: { w: '50%', h: '50%', t: 0, l: '50%' } },
         { layout: { w: '50%', h: '50%', t: '50%', l: 0 } },
         { layout: { w: '50%', h: '50%', t: '50%', l: '50%' } }],

        [{ layout: { w: '50%', h: '50%', t: 0, l: 0 } },
         { layout: { w: '50%', h: '50%', t: 0, l: '50%' } },
         { layout: { w: '100%', h: '50%', t: '50%', l: 0 } }],

        [{ layout: { w: '100%', h: '50%', t: 0, l: 0 } },
         { layout: { w: '50%', h: '50%', t: '50%', l: 0 } },
         { layout: { w: '50%', h: '50%', t: '50%', l: '50%' } }],

        [{ layout: { w: '50%', h: '100%', t: 0, l: 0 } },
         { layout: { w: '50%', h: '50%', t: 0, l: '50%' } },
         { layout: { w: '50%', h: '50%', t: '50%', l: '50%' } }],

        [{ layout: { w: '50%', h: '50%', t: 0, l: 0 } },
         { layout: { w: '50%', h: '50%', t: '50%', l: 0 } },
         { layout: { w: '50%', h: '100%', t: 0, l: '50%' } }]
    ];

    private activePanesIdx = 1;
    private activePanes: any[] = this.panesList[this.activePanesIdx];

    /* -------------------- FUNCTIONS DETAIL -------------------- */

    getActivePanesIdx(): any {
        return this.activePanesIdx;
    }

    setActivePanesIdx(newValue: any) {
        this.activePanesIdx = newValue;
        this.activePanes = this.panesList[newValue];
    }

    getActivePanes(): any[] {
        return this.activePanes;
    }

    setActivePanes(newValue: any[]) {
        this.activePanes = newValue;
    }

    getPanesList(): any[] {
        return this.panesList;
    }
}
