const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'ice_creamDB'
});
connection.connect(err => {
    if (err) throw err;

    console.log('connected as id ' + connection.threadId);

    connection.query("SELECT * from products WHERE flavor = 'strawberry'", (err, res) => {
        if (err) throw err;
        console.log('First Flavor', res[0]);
    })
})