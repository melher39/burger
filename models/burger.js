// import the ORM object
// code inspired by week-14 activity-17 models->cat.js
const orm = require("../config/orm.js");

// code that will call the ORM methods
const burger = {
    selectAll: (cb) => {
        // burgers is the name of the table
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },

    insertOne: (burgerName, cb) => {
        // FALSE is automatically added when adding a burger because it will not be devoured
        orm.insertOne("burgers", burgerName, "FALSE", (res)=>{
            cb(res);
        });
    },

    updateOne: (condition, cb) => {
        // condition is how the burger will be identified
        orm.updateOne("burgers", condition, (res) => {
            cb(res);
        });
    }
    
};

// export these methods for the controller to use (burgers_controller.js)
module.exports = burger;