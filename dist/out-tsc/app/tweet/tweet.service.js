var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
export var TweetService = (function () {
    function TweetService() {
        // Observable string sources
        this.tweetSource = new Subject();
        // Observable string streams
        this.tweetSourceHasLocation$ = this.tweetSource.asObservable();
        this.socket = io.connect();
    }
    // Service message commands
    TweetService.prototype.announceTweet = function (tweet) {
        this.tweetSource.next(tweet);
    };
    TweetService.prototype.tweetStream = function () {
        var _this = this;
        var observable = new Observable(function (observer) {
            _this.socket.on('tweets', function (data) {
                observer.next(data);
            });
            return function () { return _this.socket.disconnect(); };
        });
        return observable;
    };
    TweetService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], TweetService);
    return TweetService;
}());
//# sourceMappingURL=C:/Users/complunm/git/tweetle/src/app/tweet/tweet.service.js.map