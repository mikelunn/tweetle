import { TweetlePage } from './app.po';

describe('tweetle App', function() {
  let page: TweetlePage;

  beforeEach(() => {
    page = new TweetlePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
