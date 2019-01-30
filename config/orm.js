// import the mySQL connection
const connection = require("./connection.js");

// orm methods that will execute mySQL commands
// inspired by week-14 activity-17 orm.js
const orm = {
    // this will grab all the burgers from the table
    selectAll: (tableName, cb) => {
        // storing the query in a variable makes it easier to read
        const queryString = "SELECT * FROM " + tableName + ";";
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // this will insert a new burger and its values into the table
    insertOne: (tableName, burgerName, devoured, cb) => {
        const queryString = "INSERT INTO " + tableName + " (burger_name, devoured)"
            + " VALUES " + "('" + burgerName + "', " + devoured + ");";

        console.log("insert into query string: " + queryString);

        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });

    },

    // this will update a burger by updating devour to true
    updateOne: (tableName, condition, cb) => {
        let queryString = "UPDATE " + tableName + " SET devoured = TRUE WHERE " + condition;
        
        console.log("update query string: " + queryString);
        
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });

    }

};

// Export the ORM object to be used by the model (burger.js)
module.exports = orm;