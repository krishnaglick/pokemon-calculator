
exports.app = {
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: 'public',
      listing: true,
      index: [ 'app.html' ]
    }
  }
};
