// repl.js actually refers to repl.ts
import { startREPL } from "./repl.js";
import type {State} from "./state.js";
import {initState} from "./state.js";
async function main() {

const state:State = initState();

await startREPL(state);
}

main();
