// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3003;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));
app.use(express.static(__dirname + '/public'));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.get('/', (req, res) => {
  res.json({message: 'Hello'});
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
