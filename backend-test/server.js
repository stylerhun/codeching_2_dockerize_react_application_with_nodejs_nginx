console.log("Backend server is starting....");

//This is a minimalist web-framework for NodeJS
var express = require("express");

//This is a parser middleware, that helps to parse the incoming requests' body
var bodyParser = require("body-parser");

// Cookie middleware
var cookieParser = require("cookie-parser");

//Helps to handle session
var session = require("express-session");

//We can log useful info in commandline about requests
var morgan = require("morgan");

// Init Express app
var app = express();

// Set the initial port of backend app
app.set("port", 9000);

//In !Development! mode we can set to log the requests
app.use(morgan("dev"));

// body-parser init, it will parse the incoming parameters into req body
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

var handlerFn = (req, res, next) => {
  next();
};

// Initial route
app.get("/", handlerFn, (req, res) => {
  res.redirect("/api");
});

//Api route
app.route("/api").get(handlerFn, (req, res) => {
  res.sendFile(__dirname + "/public/api.html");
});

// Cars list
app.route("/api/cars").get(handlerFn, (req, res) => {
  res.sendFile(__dirname + "/public/cars.json");
});

// Route for handling 404 requests(unavailable routes)
app.use(function(req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

//500 error handler
function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: "Something failed!" });
  } else {
    next(err);
  }
}

app.use(clientErrorHandler);

// start the express server
app.listen(app.get("port"), () =>
  console.log(`App started on port ${app.get("port")}`)
);
