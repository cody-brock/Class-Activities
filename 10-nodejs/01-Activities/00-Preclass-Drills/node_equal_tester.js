var fs = require('fs');

// fs.writeFile('movies.txt', 'Shawshank Redemption', function(err) {
//     if (err) {
//         return console.log(err);
//     }

//     console.log('Movies.txt was created!');
// })

fs.appendFile('movies.txt', process.argv[2], function(err) {
    if (err) {
        return console.log(err);
    }

    console.log('Movies.txt was appended!');
})

fs.readFile('movies.txt', 'utf8', function(err,data) {
    if (err) {
        return console.log(err);
    }

    console.log(data);
})