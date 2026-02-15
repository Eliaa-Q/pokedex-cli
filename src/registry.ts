import {commandExit} from "./command_exit.js";
import {commandHelp} from "./command_help.js";
import type {CLICommand} from "./state.js";
import { commandMapForward, commandMapBack } from "./command_map.js";
import {commandExplore} from "./command_explore.js";

import {commandCatch} from "./command_catch.js";
import {commandInspect} from "./command_inspect.js";
import {commandPokedex} from "./command_pokedex.js";
export function getCommands(): Record<string, CLICommand> {
   return {
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },

  map: {
      name: "map",
      description: "Get the next page of locations",
      callback: commandMapForward,
    },
    mapb: {
      name: "mapb",
      description: "Get the previous page of locations",
      callback: commandMapBack,
    },
    explore:{
    name:"explore",
    description:"explore pokemons in a location",
    callback:commandExplore,
    },
catch:{
name:"catch",
description:"catch a new Pokemon",
callback:commandCatch,

},

inspect:{
name:"inspect",
description:"Showing details of caught pokemons",
callback:commandInspect,
},

pokedex:{
name:"pokedex",
description:"Shows all pokemons that have been caught",
callback:commandPokedex,},
  };
}
