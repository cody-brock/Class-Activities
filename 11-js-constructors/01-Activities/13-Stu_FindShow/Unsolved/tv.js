var axios = require('axios');
var fs = require('fs');

var TV = function() {
  this.findShow = function(show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
    axios.get(URL)
      .then(function (response) {
        data = response.data;
        let result = (`Name of Show: ${data.name}\nGenre: ${data.genres.join(',')}\nAverage Rating: ${data.rating.average}\nNetwork: ${data.network.name}\nSummary: ${data.summary}`);
        result += "\n-------------------------------------------\n\n"
        fs.appendFile('log.txt', result, function(err) {
          if (err) throw err;
          console.log("Saved!");
        })
        console.log(result);
      })
      .catch(function (error) {
        console.log(error);
      })
  };
};

module.exports = TV;
