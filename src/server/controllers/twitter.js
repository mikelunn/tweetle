/**
 * Created by complunm on 11/1/2016.
 */
var twitter = require('ntwitter');

module.exports = function(io){
  var twit = new twitter({
    consumer_key: 'jjcEqBEU2xzuf7lGX0zcnDkGR',
    consumer_secret: 'mi0klOXqRBwMWkAUWBJrRlDg7Wjob9nWxE1FXrUoBlObk94NsA',
    access_token_key: '2997568669-mGk3lhWn9CVsWq8xfPw6uAlaDrQ1SNJ0M1z5hD6',
    access_token_secret: 'qi9zPhfCeFdorykZhfauqNZQ2wmIIW8VMI1WZlTTLYTvD'
  });

  var criteria = ['-80.148662,25.764123,-80.117420,25.873042'];

  //25.764123, -80.148662

  //25.873042, -80.117420

//https://www.twilio.com/blog/2015/10/getting-started-with-socket-io-adding-real-time-events-to-your-node-js-express-app.html
  twit.stream('statuses/filter', { locations: criteria }, function(stream) {
    console.log(stream);
    stream.on('data', function (tweet) {

      var geo = false;
      if(tweet.geo != null){
        geo = true;
        latitude = tweet.geo.coordinates[0];
        longitude = tweet.geo.coordinates[1];
      }
      if(tweet.user != undefined) {
        io.sockets.volatile.emit('tweets', {
          user: tweet.user.screen_name,
          text: tweet.text,
          image: tweet.user.profile_image_url,
          geo : geo,
          latitude: latitude,
          longitude: longitude
        });
      }
    });
  });
}
