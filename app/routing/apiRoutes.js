let friends = require("../data/friends.js");

module.exports = function(app) {

    app.get("/friends", function(req, res) {
      res.json(friends);
    });

    app.post("/friends", function(req, res) {

    let totalDiff = 0;
    let match = {
        name: "",
        photo: "",
        friendDifference: 1000,
    };

    let userData = req.body;
    let userName = userData.name;
    let userScores = userData.scores;

    let score = userScores.map(function (item) {
        return parseInt(item, 10);
    })

    userData = {
        name: req.body.name,
        photo: req.body.photo,
        scores: score
    };

    console.log("Name: " + userName);
    console.log("Score: " + userScores);

    total = score.reduce((a,b) => a + b, 0);

    console.log("Total User Score: " + total);
    console.log("Best Match Difference: " + match.friendDifference);

    for (let i = 0; i < friends.length; i++){

        console.log("Pirate " + friend[i].name);
        totalDiff = 0;
        console.log("Total Difference: " + totalDiff);
        console.log("Best Match Differnce: " + match.friendDifference);

        let bfScore = friends[i].scores.reduce((a,b) => a + b, 0);
        console.log("Total Friend Score: " + bfScore)

        let sumDifference = Math.abs(total-bfScore);

        totalDiff += sumDifference;

        console.log("----------");
        console.log(totalDiff);
        console.log("----------");

        if (totalDiff <= match.friendDifference){
            match.name = friends[i].name;
            match.photo = friends[i].photo;
            match.friendDifference = totalDiff;
        }
        console.log("Total Difference: " + totalDiff);
    }

    console.log(match);
    friends.push(userData);
    console.log(userData);
    res.json(match);

    });
  };