// mySQL connection setup
// followed week-14 activity-17 setup
const mysql = require("mysql");

// connection credentials
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "Melvin Hernandez",
    password: "m39641542",
    database: "burgers_db"
});

// make the connection
connection.connect( (err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as ID: " + connection.threadId);
});

// now we export the connection to be used by our ORM
module.exports = connection;