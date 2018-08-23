import {Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-pane',
  templateUrl: './pane.component.html',
  styleUrls: ['./pane.component.css']
})
export class PaneComponent implements OnInit {

  @Input() index: number;
  @Input() player;
  @Output() activePaneEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {

  }

  activePane(event) {
    this.player.active_pane_idx = this.index;
    const object = {};
    object['player_id'] = this.player.id;
    object['pane_idx'] = this.index;
    this.activePaneEvent.emit(object);
  }
}
