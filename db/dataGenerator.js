const data = require('./mockData').data;
const menus = [];

for (let i = 0; i < 100; i++) {
  let rdm = Math.floor(Math.random() * 3);
  menus.push(data[rdm]);
}

module.exports = {
	menus
}
