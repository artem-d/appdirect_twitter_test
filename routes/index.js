//Callback functions
var express = require('express');
var router = express.Router();
var Twitter = require('twitter-node-client').Twitter;

var twitterClient = null;

function connectToTwitter() {
  var config = {
    "consumerKey": "PYYJ9udeiWrg6T8x4CazWVH4i",
    "consumerSecret": "Qb4medkB6GLh2jkn902rPs4JW60wlEEo8Sv7uUGIta43B9s37c",
    "accessToken": "86284904-IYPlfpROu5BYPuI0NQ8T6181NaxhbD1sDh4QBifb2",
    "accessTokenSecret": "rxAfqII9Klh5xLjeT0J1Mqmin6Xv4K21aYk4fye8RLzv3",
    "callBackUrl": "http://ee4f2bb5.ngrok.io/oauth_callback"
  };
  twitter_client = new Twitter(config);
}
connectToTwitter();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', {
    title: 'AppDirect Twitter connect'
  });

});

/* GET timeline. */
router.get('/timeline', function(req, res, next) {

  var error = function(err, body) {
    console.log('ERROR [%s]', err);
    res.send(404);
  };
  var success = function(data) {
    res.send(data);
  };

  twitter_client.getUserTimeline({
      screen_name: req.query.twitterAccount,
      count: req.query.tweetCount
    },
    error,
    success
  );

});

module.exports = router;