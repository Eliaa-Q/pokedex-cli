
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

### 🎮 Demonstration

<img width="1114" height="644" alt="Screenshot (251)" src="https://github.com/user-attachments/assets/a9e91f31-342d-4747-a7c7-04de0ba8b1d2" />

<img width="1119" height="643" alt="Screenshot (252)" src="https://github.com/user-attachments/assets/2474fa3f-4da9-4a0c-9767-06039ca229bc" />

<img width="1114" height="633" alt="Screenshot (253)" src="https://github.com/user-attachments/assets/9580826d-43a2-4e22-8312-87891607fb4b" />

---

## 🛠 Installation

```bash
npm install
npm run dev
```

---
