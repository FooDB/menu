const Menu = require('../db/db.js').Menu;

const getAll = (callback) => {
  Menu.
  find({}).
  exec(callback);
};

module.exports = {
  getAll,
}