// express node package imported
const express = require("express");

// express router for the app
const router = express.Router();

// import the burger.js 
const burger = require("../models/burger.js")

// create the routes and the logic within these routes
// in reference to catsController.js in week-14 activity-17

// default or home route
router.get("/", (req, res)=>{
    burger.selectAll( (data)=>{
        const burgersObject = {
            burgersCollected: data
        };
        console.log(burgersObject);
        res.render("index", burgersObject);
    });
});

module.exports = router;