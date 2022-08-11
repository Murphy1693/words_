const mongoose = require("mongoose");
const db = require("./index.js");

const userscoreSchema = mongoose.Schema({
  tag: String,
  count: Number,
  words: [{ type: String }],
  score: Number,
});

const save = function (userscoreObject) {
  let userscore = new Userscore(userscoreObject);
  return userscore.save();
};

const Userscore = mongoose.model("Userscore", userscoreSchema);

module.exports.Userscore = Userscore;
module.exports.save = save;
