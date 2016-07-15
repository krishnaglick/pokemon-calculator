
function calc(pokemon, candyReq, curCandy) {
  const evolveAmount = Math.floor(curCandy / candyReq);
  const newCurCandy = curCandy - (evolveAmount * candyReq) + evolveAmount;
  const newPokemonAmount = pokemon - evolveAmount;
  if(evolveAmount > 0)
    return evolveAmount + calc(newPokemonAmount, candyReq, newCurCandy);
  else
    return evolveAmount;
}

/* globals numPokemon, output, candiesToEvolve, candyOnHand */

function getEvolveAmount() {
  const pkmn = parseInt(numPokemon.value);
  const candyToEvolve = parseInt(candiesToEvolve.value);
  const currentCandy = parseInt(candyOnHand.value);

  const evolveAmount = calc(pkmn, candyToEvolve, currentCandy);

  if(evolveAmount >= pkmn)
    return output.innerHTML = "You can evolve everything!";
  if(!evolveAmount)
    return output.innerHTML = "You can't evolve anything!";

  output.innerHTML = `You can evolve ${evolveAmount} pokemon. Note, you may need to release some!`;

  return evolveAmount;
}
