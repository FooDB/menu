function generateURL (userContext, events, done) {
  userContext.vars.url = 9000000 + Math.floor(1000000 * Math.random());
  return done();
}


module.exports = {
  generateURL
};

