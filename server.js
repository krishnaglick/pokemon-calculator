
'use strict';

const hapi = require('hapi');
const glob = require('globby');
const path = require('path');
const _ = require('lodash');

const server = new hapi.Server();
server.connection({ port: 3000 }); //Note: May want to abstract if way more config

exports.server = server;

exports.start = async function() {
  try {
    await server.start();
  }
  catch(x) {
    console.error(x);
    process.exit(1);
  }
};

exports.loadInitializers = async function(server) {
  const initializers = await glob(path.resolve('./initializers/*.js'));
  _.forEach(initializers, (initializer) => {
    try {
      initializer();
    }
    catch(x) {
      console.error(x);
    }
  });
};
