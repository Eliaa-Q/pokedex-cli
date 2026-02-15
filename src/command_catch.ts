//To write
import type { State } from "./state.js";

export async function commandCatch(state: State,...args:string[]) {
  const pokemonName = args[0];
if (!pokemonName){
console.log("Please provide a pokemon name");
return;
}
console.log(`Throwing a Pokeball at ${pokemonName}...`);

//fetch the location
const pokemon = await state.pokeAPI.fetchPokemon(pokemonName);

const difficulty = pokemon.base_experience;
const roll = Math.random() * 100;

if (!(roll < 100 - difficulty / 5)) {
console.log(`${pokemon.name} escaped!`);
}
else{
console.log(`${pokemon.name} was caught!`);
console.log("You may now inspect it with the inspect command.");
state.caughtPokemon[pokemon.name]=pokemon;
}
}
