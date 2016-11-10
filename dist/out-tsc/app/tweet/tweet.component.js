var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { TweetService } from "./tweet.service";
import "rxjs/add/operator/debounceTime";
export var TweetComponent = (function () {
    function TweetComponent(tweetService) {
        this.tweetService = tweetService;
        this.tweets = [];
    }
    TweetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tweetService.tweetStream()
            .debounceTime(3000)
            .subscribe(function (tweet) {
            if (tweet.geo === true) {
                _this.tweetService.announceTweet(tweet);
            }
            _this.tweets.unshift(tweet);
        });
    };
    TweetComponent = __decorate([
        Component({
            selector: 'app-tweet',
            templateUrl: './tweet.component.html',
            styleUrls: ['./tweet.component.css']
        }), 
        __metadata('design:paramtypes', [TweetService])
    ], TweetComponent);
    return TweetComponent;
}());
//# sourceMappingURL=C:/Users/complunm/git/tweetle/src/app/tweet/tweet.component.js.map