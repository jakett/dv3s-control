import { PlayersService } from '../players.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-panes-list-popup',
    templateUrl: './panes-list-popup.component.html',
    styleUrls: ['./panes-list-popup.component.css']
})
export class PanesListPopupComponent implements OnInit {

    @Input() player;
    @Output() activePanesEvent = new EventEmitter<any>();

    panesList;


    constructor(private playersService: PlayersService) { }

    ngOnInit() {
        this.panesList = this.playersService.getPanesList();
    }

    activePanes(event, idx): void {
        event.stopPropagation();

        this.player.active_panes_idx = idx;

        const object = {};
        object['player_id'] = this.player.id;
        object['panes_idx'] = idx;

        this.activePanesEvent.emit(object);
    }

}
