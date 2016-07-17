
const glob = require('globby');
const path = require('path');
const _ = require('lodash');

module.exports = async function(server) {
  await server.register(require('inert')); //Note: Abstract this if it grows.

  const routes = await glob(path.resolve('./routes/*.js'));
  _.forEach(routes, (route) => {
    try {
      const fileRoutes = require(route);
      _.forEach(Object.keys(fileRoutes), (key) => {
        const fileRoute = fileRoutes[key];
        if(!fileRoute.method || !fileRoute.path || !fileRoute.handler)
          throw `Issue with ${fileRoute}, missing something crucial!`;
        server.route(fileRoute);
      });
    }
    catch(x) {
      console.error(`Error with route: ${route}`, x);
    }
  });
};
