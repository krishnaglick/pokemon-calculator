
exports.app = {
  method: 'GET',
  path: '/',
  handler(req, rep) {
    console.log('static app ', __dirname);
    rep.file('../public/app.html');
  }
};

exports.test = {
  method: 'GET',
  path: '/test',
  handler(req, rep) {
    console.log('static test ', __dirname);
    rep.file('../public/test.html');
  }
};
