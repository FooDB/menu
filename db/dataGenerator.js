console.log('Data generator starts')
const data = require('./mockData.js').data;
const mongoose = require('./db.js').mongoose;
const Menu = require('./db.js').Menu;
const menus = [];

for (let i = 0; i < 100; i++) {
  let rdm = Math.floor(Math.random() * 3);
  let cloneObj = JSON.parse(JSON.stringify(data[rdm]));
  cloneObj.id = i;
  menus.push(cloneObj);
}

Menu.insertMany(menus, () => mongoose.connection.close());

module.exports = {
  menus
};
