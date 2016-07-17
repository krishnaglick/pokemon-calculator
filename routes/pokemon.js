
exports.getPokemon = {
  method: 'GET',
  path: '/api/v1/pokemon',
  handler(req, rep) {
    debugger;
    rep('hello');
  }
};

exports.savePokemon = {
  method: ['POST', 'PUT', 'PATCH'],
  path: '/api/v1/pokemon',
  handler(req, rep) {
    debugger;
    rep('goodbye');
  }
};
