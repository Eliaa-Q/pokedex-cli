Pokedex CLI

A TypeScript command-line application that interacts with the public PokeAPI.
Users can explore locations, catch Pokémon, inspect their stats, and manage a personal Pokédex — all from the terminal.

Architecture

REPL
Handles user input, parses commands with arguments, and executes the correct command dynamically.

State Management
A centralized State object stores:

The readline interface

Registered commands

The PokeAPI instance

Pagination URLs

A caughtPokemon record (the user's Pokédex)

Caching
A custom in-memory cache stores API responses with expiration to reduce repeated network calls and improve performance.

PokeAPI Integration
The app fetches:

Location areas (paginated)

Location details

Individual Pokémon data

All requests are handled asynchronously with proper error handling.

Commands

help — Display available commands

exit — Close the application

map — Next page of locations

mapb — Previous page of locations

explore <location> — List Pokémon in a location

catch <pokemon> — Attempt to catch a Pokémon

inspect <pokemon> — Show details of a caught Pokémon

pokedex — List all caught Pokémon

Run
npm install
npm run dev
