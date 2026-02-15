import type {State} from "./state.js";
export async  function commandHelp(state: State){
console.log("Welcome to the Pokedex! \n Usage: \n \n");

for (const command of Object.values(state.commands)){
console.log(`${command.name}: ${command.description}`);
}
}
