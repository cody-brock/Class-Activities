// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const Character = require('../model/character')


// Routes
// =============================================================
module.exports = function(app) {

  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:characters?", function(req, res) {

    if (req.params.characters) {
      Character.findOne({
        routeName: req.params.characters
      }).then(function(result) {
        res.json(result);
      })
    } else {
      Character.findAll({}).then(function(result) {
        res.json(result);
      })
    }

  });

  // If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {

    // Take the request...
    var character = req.body;

    character.routeName = character.name.replace(/\s+/g, '').toLowerCase();
    Character.create(character);
    res.status(200).end();

  });
};
