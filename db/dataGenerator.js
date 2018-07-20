const data = require('./mockData.js').data;
const Menu = require('./db.js').Menu;
const menus = [];

for (let i = 0; i < 100; i++) {
  let rdm = Math.floor(Math.random() * 3);
  menus.push(data[rdm]);
}

Menu.insertMany(menus, () => {});


