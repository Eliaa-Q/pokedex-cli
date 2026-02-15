//To write
import type { State } from "./state.js";

export async function commandExplore(state: State,...args:string[]) {
  const locationName = args[0];
if (!locationName){
console.log("Please provide a location area name");
return;
}
console.log(`Exploring ${locationName}...`);

//fetch the location 
const location = await state.pokeAPI.fetchLocation(locationName);
console.log("Found Pokemon:");

//lopp through pokemon encounters

for (const encounter of location.pokemon_encounters){
console.log(`- ${encounter.pokemon.name}`);
}}
