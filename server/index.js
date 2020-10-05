const express = require("express");
require("dotenv").config();
const path = require("path");
const bodyParser = require("body-parser");
const connectDB = require("../db/index");
const { SERVER_PORT } = process.env;

const usersRoute = require("../db/routes/Users.routes");
const badgesRoute = require("../db/routes/Badges.routes");

const DIR = path.join(__dirname, "../build");
const html_file = path.join(DIR, "index.html");
const app = express();

app.use(express.static(DIR));
app.use(bodyParser.json());

///////////////         routes for database            ///////////////
app.use(usersRoute);
app.use(badgesRoute);

app.get("/", (req, res) => {
  res.sendFile(html_file);
});

connectDB().then(() => {
  app.listen(SERVER_PORT, () => {
    console.info(`listening on http://localhost:${SERVER_PORT}`);
  });
});
