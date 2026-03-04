# 🐦 Chirpy API

A **TypeScript REST API** for a social platform where users can create chirps, authenticate securely, and upgrade to **Chirpy Red** membership via webhooks.

---

## 🚀 Features

* User authentication with **JWT access & refresh tokens**
* Secure password hashing (Argon2)
* CRUD operations for chirps
* Webhook handling for membership upgrades
* Middleware for logging, metrics, and error handling
* PostgreSQL database with Drizzle ORM
* Filtering and sorting on list endpoints
* Security with API keys and authorization headers

---

## 🏗 Architecture

The API uses Express.js and a modular structure.

### Middleware

* Request logging
* Metrics collection
* JSON parsing
* Error handling

Middleware improves security and maintainability.

---

### Security (Auth)

Authentication uses:

* JWT access tokens
* Refresh tokens
* Password hashing
* Authorization headers

Protected routes require:

Authorization: Bearer <token>

Webhooks require:

Authorization: ApiKey <key>

---

### Database

* PostgreSQL
* Drizzle ORM (type-safe queries)
* SQL-level filtering

---

## 📚 API Endpoints

### Authentication

| Endpoint     | Method | Description   |
| ------------ | ------ | ------------- |
| /api/users   | POST   | Create user   |
| /api/login   | POST   | Authenticate  |
| /api/refresh | POST   | Refresh token |
| /api/users   | PUT    | Update user   |

---

### Chirps

| Endpoint        | Method | Description                 |
| --------------- | ------ | --------------------------- |
| /api/chirps     | POST   | Create chirp                |
| /api/chirps     | GET    | List chirps (filter & sort) |
| /api/chirps/:id | GET    | Get chirp                   |
| /api/chirps/:id | DELETE | Delete chirp                |

Query options:

* authorId — filter by user
* sort=asc (default)
* sort=desc

---

### Webhooks

| Endpoint            | Method | Description         |
| ------------------- | ------ | ------------------- |
| /api/polka/webhooks | POST   | Membership upgrades |

Security:

* API key required
* Unsupported events ignored
* Proper HTTP codes

---

## 🔐 Security Highlights

* Passwords are hashed
* Tokens are short-lived
* API keys protect webhooks
* Errors do not leak internals
* Authorization enforced per route

---

## 🛠 Installation

npm install
npm run dev

---
