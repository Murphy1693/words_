const save = require("./userscore.js").save;
const db = require("./index.js");
const Userscore = require("./userscore.js").Userscore;

module.exports = {
  getTopTen: function () {
    return Userscore.find().sort({ score: -1 });
  },

  add: function (userObject) {
    return save(userObject);
  },
};
