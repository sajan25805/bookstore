# BookStore

## Introduction

It is a basic web service for a book management system that allows the API user to add new books, delete existing books, update existing books, and list registered books.

## Setup

---

#### Prerequisite

- NodeJS (latest LTS version)
- MongoDB

### Install

- Install dependency

```bash
  npm install
```

- Start

```bash
  npm start
```

- Start Swagger UI

```bash
  npm  run swagger
```

Use this route to run Swagger API Documentation [Swagger UI](http://localhost:4000/api-docs/)
http://localhost:4000/api-docs/

---

### Swagger

Swagger is used here to describe the structure of the APIs.
To run the [Swagger UI](http://localhost:4000/api-docs/) run the command `npm run swagger` and use the route
http://localhost:4000/api-docs/ in the browser.

---

### Implementation

---

### Status Codes

simpleblog API returns the following status codes.

| Status Code |       Description       |
| :---------- | :---------------------: |
| 200         |          `OK`           |
| 400         |      `BAD REQUEST`      |
| 404         |       `Not Found`       |
| 500         | `Internal Server Error` |

### Endpoints

---

Currently there are six endpoints available, one for adding, one for updating, one for deleting, one for listing, one for searching, and one for returning the specific Book by Id.
