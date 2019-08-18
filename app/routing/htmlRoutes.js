let path = require("path");

module.exports = function (app) {

  app.get("/friends", function (req, res) {
    res.sendFile(path.join(__dirname, "../data/friends.js"));
  });

  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};