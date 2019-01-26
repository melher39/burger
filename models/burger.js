// import the ORM object
const orm = require("../config/orm.js");

// code that will call the ORM methods
const burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },

    insertOne: (burgerName, cb) => {
        orm.insertOne("burgers", burgerName, "FALSE", (res)=>{
            cb(res);
        });
    },

    updateOne: (condition, cb) => {
        orm.updateOne("burgers", condition, (res) => {
            cb(res);
        });
    }
    
};

module.exports = burger;