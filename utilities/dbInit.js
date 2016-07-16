
/*const bluebird = require('bluebird');

(async () => {
  await require('../helpers/databaseHelpers').db(async (db) => {
    console.log('qqqqqq');
    const pokemon = require('../assets/pokemon');
    const pokemonCollection = db.collection('pokemon');
    await new bluebird.Promise((res, rej) => {
      pokemonCollection.insertMany(pokemon, (err) => {
        if(err) return rej(err);
        res();
      });
    });
    console.log('done!');
  });
})();*/

const dbConfig = require('../local/mongo.json');
const promiseChild = require('./promise_child');

(async () => {
  try {
  await promiseChild(`mongo "use ${dbConfig.project}"`);
  await promiseChild(`mongoimport`, [
    `--db ${dbConfig.project}`,
    `--collection pokemon`,
    `--drop`,
    `--file ${require('path').resolve('../assets/pokemon.json')}`
  ]);
  console.log('asdf');
  }catch(x){console.log(x);}
})();