
const dbConfig = require('../local/mongo.json');
const mongoClient = require('mongodb').MongoClient;
const dbUrl = `mongob://${dbConfig.url}:${dbConfig.port}/${dbConfig.project}`;
const bluebird = require('bluebird');

exports.db = function(action) {
  console.log('potaot');
  return new bluebird.Promise((res, rej) => {
    mongoClient.connect(dbUrl, (err, db) => {
      console.log('zzz');
      if(err) {
        console.log(err);
        return rej(err);
      }
      action(db);
      db.close();
      res();
    });
  });
};

exports.getPokemon = async function(db) {
  return new Promise((res, rej) => {
    db.collection('pokemon').find({}).explain((err, data) => {
      if(err) return rej(err);
      res(data);
    });
  });
};
