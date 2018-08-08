const Menu = require('../db/db.js').Menu;

const getData = (id, callback) => {
  Menu
    .findOne({ id })
    .exec(callback);
};

module.exports = getData;
