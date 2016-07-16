
const bluebird = require('bluebird');

(async () => {
  const db = await require('../helpers/databaseHelpers').db();
  const pokemon = require('../assets/pokemon');
  const pokemonCollection = db.collection('pokemon');
  try {
    await pokemonCollection.insert([{}]); // /shrug
    await pokemonCollection.drop();
    await pokemonCollection.insert(pokemon);
  }
  catch(x) {
    console.error(x);
    process.exit(1);
  }
  console.log('Success!');
  process.exit(0);
})();
