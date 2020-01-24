// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/all", function(req, res) {
    const query = "SELECT * FROM chirps;";
    connection.query(query, (err,result) => {
      if (err) {
        throw err;
      }
      console.log("result");
      res.json(result);
    })
  })

  // Add a chirp
  app.post("api/new", (req, res) => {
    console.log('req.body', req.body)
    const query = "INSERT INTO chirps (author, body, created_at) VALUES (?, ?, ?)";
    connection.query(query, [req.body.author, req.body.body, req.body.created_at], (err, result) => {
      if (err) {
        console.log("it's this error");
        throw err;
      }
      res.status(200).end();
    })
  })


};
