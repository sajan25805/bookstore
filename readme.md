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
To run the Swagger UI

---

### Implementation

---

### Endpoints

---

Currently there are six endpoints available, one for adding, one for updating, one for deleting, one for listing, one for searching, and one for returning the specific Book by Id.

## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.
