import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { StreamsService } from './streams.service';
import { UtilService } from '../../../../commons/services/util.service';

@Component({
    selector: 'app-streams',
    templateUrl: './streams.component.html',
    styleUrls: ['./streams.component.css']
})
export class StreamsComponent implements OnInit {

    channels: any[];
    private streamManager     = [];
    private liveStreamManager = [];
    private vodStreamManager  = [];
  
    scrollbarOptions;
    liveStreamList = [];
    vodStreamList = [];
    isLoading = true;


    constructor(
      private streamsService: StreamsService,
      private utilService: UtilService
    ) { }

    ngOnInit() {
        this.scrollbarOptions = this.utilService.getScrollbarOptions();
        this.getStreams();
    }

    getStreams() {
        this.streamsService.getChannels()
            .pipe(map(data => {
                for (const channel of data) {
                    this.streamsService.getStreams(channel.channelId)
                        .pipe(map(streams => {
                            this.streamManager.push(streams);
                            this.filterStream(streams, channel.channelId);

                            if (this.streamManager.length === data.length) {
                                this.liveStreamList = this.liveStreamManager;
                                this.vodStreamList = this.vodStreamManager;
                                this.isLoading = false;
                            }
                        }))
                        .subscribe();
                }
            }))
            .subscribe();
    }

    filterStream(streams, channelId): void {
        for (const stream of streams) {
            stream.channelId = channelId;

            if (stream.displayName === 'Live1') {
                stream.mode = 'Live';
                this.liveStreamManager.push(stream);
            } else if (stream.displayName === 'Recording3') {
                stream.mode = 'Replay';
                this.vodStreamManager.push(stream);
            }
        }
    }
}
