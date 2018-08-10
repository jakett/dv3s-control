import { Component, OnInit } from '@angular/core';

import { StreamsService } from './streams.service';

@Component({
    selector: 'app-streams',
    templateUrl: './streams.component.html',
    styleUrls: ['./streams.component.css']
})
export class StreamsComponent implements OnInit {

    

    constructor(private streamsService: StreamsService) { }

    ngOnInit() {
        this.getChannels();
    }
  
    getChannels(): void {
        this.streamsService.getChannels().subscribe(function(channels) {
            for(let channel of channels) {
                console.log("JJJJJJ channels.channelId = " + channel.channelId);
            }
        
           // this.streamService.getStreams(channels.channelId).subscribe(function(streams) {
            //    console.log("NNNNNN streams = JSON.stringify(streams));
        //    });
        });
    }
}
