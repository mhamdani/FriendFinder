// Dependencies
// =============================================================
var mysql = require("mysql");
var bluebird = require("bluebird");
var dotenv = require('dotenv').config()

// Exports
// =============================================================
exports.getFriends = getFriends
exports.compareFriends = compareFriends

// Initialize mysql and bluebird connection
// =============================================================
var connection = mysql.createPool({
    host: process.env.host,
    port: 3306,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

var query = bluebird.promisify(connection.query, {
    context: connection
});

// App functions
// =============================================================

// Function to get friend's data from db
function getFriends(){
  return query("SELECT * FROM friends")
  .then(function(results){
    if (results){
      return results;
    } else {
      return false;
    }
  });
}

// function to compare results to all friends' results in db
function compareFriends(friend) {
  var bestMatch;
  var friendScore = friend.score.split(",");
  var scoreArr = answers.length;

return query("SELECT * FROM friends")
.then(function(results){
  if (results) {
    var friendResults = results;
    var match = false;
    var scoreDifference = 0;
    bestMatch = friendResults[0];

    for (var i = 0; i < friendResults.length; i++) {
      var difference = 0;

      for (var j = 0; j < scoreArr; j++) {
        difference += Math.abs.answers[j] - friendResults[i].friend_results.split(",")[j];
      }

      if (!match) {
        scoreDifference = difference;
        bestMarch = friendResults[i];
        match = true;
      } else {
        if (difference < scoreDifference) {
          scoreDifference = difference;
          bestMatch = friendResults[i];
        }
      }
    }

    return query("INSERT INTO friends SET ?", [{
      friend_name: friend.name,
      friend_image: friend.photo,
      friend_results: friend.score
    }])
    .then(function(){
      return bestMatch;
    });
  } else {
    return false;
  }
});

}









const user = [
  {
    name: 'name',
    photo: 'photo',
    scores: []
  }
];
