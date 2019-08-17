let friends = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });

    app.post("/api/friends", function(req, res) {

    let difference = 0;
    let match = {
        name = "",
        photo = "",
        friendDifference = 1000,
    };

    let userData = req.body;
    let userName = userData.name;
    let userScores = userData.scores;

    let score = userScores.map(function (item) {
        return parseInt(item, 10);
    })

    userData = {
        name = req.body.name,
        photo = req.body.photo,
        scores = score
    };

    console.log("Name: " + userName);
    console.log("Score: " + userScores);

    total = score.reduce((a,b) => a + b, 0);

    console.log("Total User Score: " + total);
    console.log("Best Match Difference: " + match.friendDifference);

    });
  };