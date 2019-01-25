// dependencies
const express = require("express");

// express app setup
const app = express();

// port will be used for deployment and locally
const PORT = process.env.PORT || 6000;

// Sets up the Express app to handle data parsing
// aka the middleware
// static code taken from week13-activity 13
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// start the server and begin to listen
app.listen(PORT, () => {
    console.log("App is listening on port: " + PORT)
});