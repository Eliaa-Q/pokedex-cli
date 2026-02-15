import * as readline from "node:readline";
import {getCommands} from "./registry.js";
import type {State} from "./state.js";

export async function startREPL(state: State){

state.readline.prompt();

//the predefined "line" makes the function fire each time enter is hit
//the lambda function is A callback function ->  function you pass to another function so it can be
//called later, usually when something happens (like user input arriving).

state.readline.on("line",async (line:string) => {
const words = cleanInput(line);
if(words.length ===0){
state.readline.prompt();
return;}
let inputCommand = cleanInput(line)[0];
const args = words.slice(1);

  const commands = getCommands();
const command = state.commands[inputCommand];

if (!command){
console.log("Unkown command");
    state.readline.prompt();
    return;
  }

  try {
    await command.callback(state,...args);
  } catch (err) {
    console.log((err as Error).message);
  }

  if (command.name !== "exit") {
    state.readline.prompt();
  }
});
}

export function cleanInput(input: string): string[] {
  if (input.trim().length === 0) {
    return [];
  }

  return input
    .trim()
    .toLowerCase()
    .split(/\s+/);
}

