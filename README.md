
# 🧭 Pokedex CLI

A **TypeScript command-line application** that interacts with the public **PokeAPI**.
Explore locations, catch Pokémon, inspect their stats, and manage your own Pokédex — all from your terminal.

---

## 🚀 Features

* Interactive **REPL-based CLI**
* Centralized **state management**
* Custom **in-memory caching system**
* Async API integration with PokeAPI
* Modular command architecture

---

## 🏗 Architecture

### REPL

Handles:

* Reading user input
* Parsing commands + arguments
* Executing command callbacks dynamically

### State

A shared `State` object stores:

* Registered commands
* The PokeAPI instance
* Pagination URLs for maps
* A `caughtPokemon` collection

This keeps the app modular and avoids global variables.

### Cache

A custom cache layer:

* Stores API responses with timestamps
* Automatically expires old entries
* Reduces unnecessary network requests

---

## 📚 Commands

| Command              | Description                      |
| -------------------- | -------------------------------- |
| `help`               | Show available commands          |
| `exit`               | Exit the Pokédex                 |
| `map`                | Get next page of locations       |
| `mapb`               | Get previous page of locations   |
| `explore <location>` | List Pokémon in a location       |
| `catch <pokemon>`    | Attempt to catch a Pokémon       |
| `inspect <pokemon>`  | Show details of a caught Pokémon |
| `pokedex`            | List all caught Pokémon          |

---

## 🛠 Installation

```bash
npm install
npm run dev
```

---
