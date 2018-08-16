import {Component, OnInit, OnDestroy, Input, SimpleChanges, OnChanges} from '@angular/core';

import { PlayersService }   from './players.service';
import { UtilService }      from '../../../../commons/services/util.service';
import { Player }           from '../../../../objects/player';

@Component({
    selector: 'app-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit, OnDestroy, OnChanges {

    @Input() panes: any;

    private player1: Player = new Player();
    private player2: Player = new Player();

    players: any[];
    scrollbarOptions;

    constructor(
        private playersService: PlayersService,
        private utilService: UtilService
    ) {}

    ngOnInit(): void {
        this.scrollbarOptions = this.utilService.getScrollbarOptions();

        this.player1['panes'] = this.playersService.getPanesList()[1];
        this.player1['active_panes_idx'] = 1;
        this.player1['show_popup'] = false;
        this.player1['is_connected'] = false;
        this.player1['id'] = 1;

        this.player2['panes'] = this.playersService.getPanesList()[3];
        this.player2['active_panes_idx'] = 3;
        this.player2['show_popup'] = false;
        this.player2['is_connected'] = false;
        this.player2['id'] = 2;

        this.players = [this.player1, this.player2];
    }

    ngOnChanges(changes: SimpleChanges): void {
        throw new Error('Method not implemented.');
    }

    ngOnDestroy(): void {
        throw new Error('Method not implemented.');
    }

    onActivePanes(object): void {
        const playerId = object.player_id;
        const idx = this.players.findIndex(player => player.id === playerId);

        this.players[idx].active_panes_idx = object.panes_idx;
        this.players[idx].panes = this.playersService.getPanesList()[object.panes_idx];
    }

    connectPlayer(playerIdx) {
        this.players[playerIdx]['is_connected'] = !this.players[playerIdx]['is_connected'];
        if (!this.players[playerIdx]['is_connected']) {
            this.players[playerIdx]['show_popup'] = false;
        }
    }
}
