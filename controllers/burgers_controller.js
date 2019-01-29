// express node package imported
const express = require("express");

// express router for the app
const router = express.Router();

// import the burger.js 
const burger = require("../models/burger.js")

// create the routes and the logic within these routes
// in reference to catsController.js in week-14 activity-17

// default or home route
// this should bring up all the burgers currently in the list
router.get("/", (req, res) => {
    burger.selectAll((data) => {
        // we have to pass in an object to index.handlebars so we create an object with the array data
        // test that outputs all burger data
        console.log(data);
        res.render("index", { burgersCollected: data });
    });
});

// this should create a new burger column with a custom name and devoured set to false
router.post("/api/burgers", (req, res) => {
    // the burger_name comes from the submit form input name, which is the new burger's name the user has created
    let burgerName = req.body.burger_name;

    burger.insertOne(burgerName, (result) => {
        // for testing purposes, return the ID of the new burger
        console.log("post result: " + result.insertId);

        // this will pretty much refresh the page so the section is updated once the new burger is added
        // this is done by redirecting the route to the / home page
        // inspired by week-14 activity 8 server.js
        res.redirect("/");
    });
});

// this should get the id of the burger the user wishes to update and change the devoured value to true
router.put("/api/burgers/:id", (req, res) => {
    // variable to store the id of the burger to know which one to update
    let condition = "id = " + req.params.id;
    console.log("condition is: " + condition);

    burger.updateOne(condition, (result) => {
        // if no rows were changed, it should mean the ID does not exist, so return error 404 (not found)
        // taken from week-14 activity 17
        if (result.changedRows == 0) {
            return res.status(404).end();
        }
        // else give us a successful response and end process
        else {
            res.status(200).end();
        }
    });
});

// export routes for server.js to use
module.exports = router;