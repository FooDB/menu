const data = require('./mockData.js').data;
const Menu = require('./db.js').Menu;
const menus = [];
let num = 0;

for (let i = 0; i < 100; i++) {
  let rdm = Math.floor(Math.random() * 3);
  let cloneObj = JSON.parse(JSON.stringify(data[rdm]));
  cloneObj.id = i;
  menus.push(cloneObj);
}

Menu.insertMany(menus, () => {});

module.exports = {
  menus
};

console.log(menus[0].id);
