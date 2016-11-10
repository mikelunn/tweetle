import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import {TweetModel} from "./tweet.model";
declare var io : any;
@Injectable()
export class TweetService {

  socket:any;

  // Observable string sources
  private tweetSource = new Subject<string>();

  // Observable string streams
  tweetSourceHasLocation$ = this.tweetSource.asObservable();

  constructor() {
    this.socket = io.connect();
  }

  // Service message commands
  announceTweet(tweet){
    this.tweetSource.next(tweet);
  }

  tweetStream() : Observable<TweetModel>{
    let observable = new Observable(observer=>{
      this.socket.on('tweets',(data)=>{
        observer.next(data);
      });
      return () => this.socket.disconnect();
    })

    return observable;
  }

}
