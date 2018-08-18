const siege = require('siege');


var siegeOn = siege()
  .on(3003)
  .concurrent(1);

for (let i = 0; i < 100000; i++) {
  siegeOn
  .for(1).times
  .get(`/api/restaurant/${9000000 + Math.floor(1000000 * Math.random())}`)
}
siegeOn.attack()