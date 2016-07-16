
const dbConfig = require('../local/mongo.json');
const mongoClient = require('mongodb').MongoClient;
const dbUrl = `mongodb://${dbConfig.url}:${dbConfig.port}/${dbConfig.project}`;
const bluebird = require('bluebird');

exports.db = async function() {
  return mongoClient.connect(dbUrl, {
    promiseLibrary: bluebird.Promise
  });
};

exports.getPokemon = async function(db) {
  const pokemon = await db.collection('pokemon').find({}).toArray();
  return pokemon[0];
};
