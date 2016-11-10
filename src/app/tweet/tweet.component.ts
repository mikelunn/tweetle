import {Component, OnInit, Output, EventEmitter, Input, OnChanges} from '@angular/core';
import {TweetService} from "./tweet.service";
import {TweetModel} from "./tweet.model";
import "rxjs/add/operator/debounceTime";


@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  tweets: TweetModel[] = [];
  constructor(private tweetService : TweetService) { }


  ngOnInit() {
    this.tweetService.tweetStream()
      .debounceTime(3000)
      .subscribe(tweet=>{
        if(tweet.geo === true){
          this.tweetService.announceTweet(tweet);
        }
        this.tweets.unshift(tweet);
      });
  }





}
