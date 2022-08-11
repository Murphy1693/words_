const express = require("express");
const db = require("../database");
const controllers = require("../database/controllers.js");
const API_KEY = require("../config.js").API_KEY;
const API_HOST = require("../config.js").API_HOST;
const cors = require("cors");

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/leaderboard", (req, res) => {
  controllers
    .getTopTen()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send();
    });
});

app.post("/userscore", (req, res) => {
  console.log(req.body);
  controllers
    .add(req.body)
    .then((data) => {
      res.status(201).send();
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send();
    });
});

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
