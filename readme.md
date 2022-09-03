# BookStore

## Introduction

It is a basic web service for a book management system that allows the API user to add new books, delete existing books, update existing books, and list registered books.

## Setup

---

#### Prerequisite

- NodeJS (latest LTS version)
- MySQL

### Install

- Install dependency

```bash
  npm install
```

- Setup env

```bash
  cp .env.exapmle .env
```

- Create Database

```bash
  npm run migrate
```

- Start

```bash
  npm start
```

- Start Swagger

```bash
  npm  run swagger
```

Use this route to run Swagger API Documentation [Swagger](http://localhost:4000/api-docs/)
http://localhost:4000/api-docs/

---

### Swagger

Swagger is used here to describe the structure of the APIs.
To run the [Swagger](http://localhost:4000/api-docs/) run the command `npm run swagger` and use the route http://localhost:4000/api-docs/ in the browser.
Here is an demo of what you will see in the `swagger`
![swagger](/public/swagger.png)
![swagger](/public/swagger1.png)

---

### Implementation

---

### Status Codes

simpleblog API returns the following status codes.

| Status Code |  Description  |
| :---------- | :-----------: |
| 200         |     `OK`      |
| 400         | `BAD REQUEST` |
| 404         |  `Not Found`  |

### Endpoints

---

Currently there are six endpoints available, one for adding, one for updating, one for deleting, one for listing, one for searching, and one for returning the specific Book by Id.

##### 1. Add book to the Database

`Post /books/add`

##### Request Example (Form Data)

| Form Fields  |           Value            |
| :----------- | :------------------------: |
| Content-Type |    multipart/form-data     |
| name         |       harayeko yatri       |
| isbn         |           111456           |
| image        | @image.jpg;type=image/jpeg |

##### Response Example

```json
{
  "id": 0,
  "name": "harayeko yatri",
  "isbn": "111456",
  "image": "http://localhost:8000/uploads/1662231041161-204712449-photo.jpg"
}
```

#### 2. Get book by Id .

`GET /books/:id`

##### Response Example

```json
{
  "id": 0,
  "name": "harayeko yatri",
  "isbn": "213215",
  "image": "http://localhost:8000/uploads/1662231041161-204712449-photo.jpg"
}
```

#### 3. Get list of all the books

`GET /books`

##### Response Example

```bash
[
  {
  "id": 0,
  "name": "harayeko yatri",
  "isbn": "213215",
  "image": "http://localhost:8000/uploads/1662231041161-204712449-photo.jpg"
 },
 {
  "id": 1,
  "name": "naramro manchhey",
  "isbn": "213216",
  "image": "http://localhost:8000/uploads/1662231041161-204712449-photo.jpg"
 },
 ...
 ]
```

#### 4. Search all

`GET /books/search/all/`

##### Response Example

```bash
[
  {
    "id": 1,
    "name": "naramro manchhey",
    "isbn": "213216",
  "image": "http://localhost:8000/uploads/1662231041161-204712449-photo.jpg"
  },
 {
  "id": 1,
  "name": "naramro manchhey",
  "isbn": "213216",
  "image": "http://localhost:8000/uploads/1662231041161-204712449-photo.jpg"
 },
 ...
 ]

```

#### 5. Update book by Id

`Put /books/update/:id`

##### Request Example

```json
{
  "name": "naulo kitab"
}
```

##### Response Example

```json
{
  "success": true,
  "message": "Successfully Updated to the Database"
}
```

#### 6. Delete book by Id

`Delete /books/delete/:id`

##### Response Example

```json
{
  "success": true,
  "message": "Successfully Deleted"
}
```
