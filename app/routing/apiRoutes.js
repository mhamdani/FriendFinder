var friends = require("../data/friends.js");

var getFriends = friends.getFriends;
var compareFriends = friends.compareFriends;

module.exports = function(app) {

  app.get("api/friends", function(req, res) {
    return getFriends()
    .then(function(results){
      if (results) {
        console.log("We've calculated your results.");
        return res.json(results);
      } else {
        return res.json({
          error: "There are currently not enough friends in the database."
        });
      }
    })
    .catch(function(error) {
      return res.json({
        error: "API Error: " + error
      });
    })
  });

  app.post("api/friends", function(req, res){
    return compareFriends(req.body)
    .then(function(results){
      if (results) {
        console.log("We've calculated your results.");
        return res.json(results);
      } else {
        return res.json({
          error: "We did not find a match. Please try again soon."
        });
      }
    })
    .catch(function(error){
      return res.json({
        error: "API Error: "+ error
      });
    });
  });

};
