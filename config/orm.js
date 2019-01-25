// import the mySQL connection
const connection = require("./connection.js");

// orm methods that will execute mySQL commands
const orm = {
    // this will grab all the burgers
    selectAll: (tableName, cb) => {
        const queryString = "SELECT * FROM " + tableName + ";";
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }, 

    // this will insert a new burger and its values into the table
    insertOne: ( tableName, burgerName, devoured, cb) => {
        const queryString = "INSERT INTO " + tableName + " (burger_name, devoured)"
         + " VALUES " + "(" + burgerName + ", " + devoured + ")";

         console.log("insert into query string: " + queryString);

         connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
         });

    }, 

    // this will update a burger by updating evour to true
    updateOne: (tableName, condition, cb) => {
        const queryString = "UPDATE " + tableName + " SET devoured = TRUE WHERE " + condition; 
        console.log("update query string: " + queryString);
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        }) 

    }

};

module.exports = orm;