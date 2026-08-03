# 📚 Pagination & Search API 

A backend practice project built to strengthen core Express.js and MongoDB concepts by implementing CRUD operations, pagination, searching, filtering, and RESTful API development.

The primary objective of this project was to gain hands-on experience with backend development patterns commonly used in production applications, including efficient data retrieval, query-based filtering, pagination, and MongoDB operations.

---

# 📌 Overview

This project exposes a REST API for managing a collection of books while implementing several backend concepts frequently used in real-world applications.

The API supports:

- CRUD operations
- Pagination
- Search functionality
- Dynamic filtering
- Price range filtering
- MongoDB query construction
- RESTful API development

Rather than focusing on UI development, this project emphasizes backend logic and API design using Express.js and MongoDB.

---

# 🎯 Learning Objectives

This project was developed to practice:

- Building RESTful APIs using Express.js
- CRUD operations
- Pagination implementation
- Search using Regular Expressions
- Dynamic query building
- Filtering using query parameters
- Request validation

---

# ✨ Concepts Implemented

## CRUD Operations

- Create Book
- Read Books
- Update Book
- Delete Book

---

## Pagination

Implemented server-side pagination using:

- Page Number
- Limit
- Skip
- Total Pages
- Total Records

---

## Search

Implemented case-insensitive searching using MongoDB Regular Expressions.

Search can be performed on:

- Book Name
- Author Name

---

## Filtering

Books can be filtered using:

- Publication
- Category
- Minimum Price
- Maximum Price

Multiple filters can be combined in a single request.

---

# 🛠 Technology Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript (ES Modules)
- dotenv

---

# 📂 Project Structure

```
PaginationSearchAPI
│
├── config/
│   └── MongoDB Connection
│
├── controllers/
│   └── Business Logic
│
├── models/
│   └── Book Schema
│
├── routes/
│   └── REST API Routes
│
├── index.js
└── README.md
```

---

# 📡 API Endpoints

## Create Book

```
POST /api/book
```

---

## Get All Books

```
GET /api/book
```

Supports the following query parameters:

| Parameter | Description |
|-----------|-------------|
| page | Current page number |
| limit | Number of records per page |
| search | Search by book name or author |
| publication | Filter by publication |
| category | Filter by category |
| minprice | Minimum book price |
| maxprice | Maximum book price |

Example:

```
GET /api/book?page=2&limit=5&search=java&category=Programming&minprice=500&maxprice=1000
```

---

# 📖 Key Backend Concepts Practiced

- Express Routing
- RESTful API Design
- MongoDB CRUD Operations
- Mongoose Models
- Query Parameters
- Dynamic Query Construction
- Regular Expression Search
- Pagination using Skip & Limit
- Server-side Filtering
- Request Validation

---

# 🚀 Possible Future Enhancements

- Sorting by price or name
- Authentication & Authorization
- Input validation using Joi/Zod
- Swagger API Documentation
- Rate Limiting
- API Caching
- Unit Testing
- Docker Support
- Deployment on Render or Railway

---

# 👨‍💻 Purpose

This repository was created as a backend practice project to strengthen practical understanding of Express.js, MongoDB, REST APIs, pagination, searching, filtering, and dynamic query construction. It serves as a learning resource and a reference implementation for common backend development concepts.
---
