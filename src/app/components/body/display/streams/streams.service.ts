import { Injectable }               from '@angular/core';
import { Observable, of }           from 'rxjs';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { catchError, map, tap }     from 'rxjs/operators';

import { Channel }                  from './object/channel';
import { Stream }                   from './object/stream';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class StreamsService {

    constructor(private http: HttpClient) { }
    
    private origin = '/dv3s/api';
    
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
 
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
 
            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);
 
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
    
    getChannels(): Observable<Channel[]> {
        return this.http.get<Channel[]>(this.origin + '/channels')
            .pipe(
                tap(channels => console.log('fetched channels')),
                catchError(this.handleError('getChannels', []))
            );
    }
  
    getStreams(channelId): Observable<Stream[]> {
        return this.http.get<Stream[]>(this.origin + '/channels/' + channelId + '/streams')
            .pipe(
                tap(streams => console.log('fetched streams')),
                catchError(this.handleError('getStreams', []))
            )
    }
}
