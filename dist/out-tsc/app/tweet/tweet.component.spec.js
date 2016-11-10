import { async, TestBed } from '@angular/core/testing';
import { TweetComponent } from './tweet.component';
describe('TweetComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TweetComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TweetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/Users/complunm/git/tweetle/src/app/tweet/tweet.component.spec.js.map