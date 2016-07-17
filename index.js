
'use strict';

const app = require('./server');

app.loadInitializers(app.server);
app.start();

console.log('Server Started Successfully');
console.log('Server running at:', app.server.info.uri);
