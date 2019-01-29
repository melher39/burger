// dependencies
const express = require("express");

// express app setup
const app = express();

// port will be used for deployment and locally
const PORT = process.env.PORT || 3000;

// app can access static content from the "public" direcoty which includes css and the burger image
app.use(express.static("public"))

// Sets up the Express app to handle data parsing
// aka the middleware
// static code taken from week13-activity 13
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require handlebars
const exphbs = require("express-handlebars");

// set up the handlebars engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes and let server access these routes
const routes = require("./controllers/burgers_controller.js");
app.use(routes);

// start the server and begin to listen
app.listen(PORT, () => {
    console.log("App is listening on port: " + PORT)
});