\# Bookstore API (Learning Project)



This is a simple RESTful API built with Node.js, Express, and MongoDB.  

It was created as a learning project to practice backend development concepts such as routing, CRUD operations, and database integration with Mongoose.



---



\## Features

\- Manage Books and Genres

\- Full CRUD operations (Create, Read, Update, Delete)

\- JSON-based API responses

\- Beginner-friendly structure (all routes in `app.js`)



---



\## Project Structure



bookstore/

├── app.js

├── package.json

├── package-lock.json

├── node\_modules/

└── models/

&nbsp;   ├── book.js

&nbsp;   └── genre.js





---



\## Installation \& Setup



1\. Clone the repository:

&nbsp;  ```bash

&nbsp;  git clone https://github.com/kidus102/bookstore-api.git

&nbsp;  cd bookstore-api

&nbsp;  ```



2\. Install dependencies:

&nbsp;   npm install



3\. Make sure MongoDB is running locally:

&nbsp;   mongosh



4\. Start the server:

&nbsp;   node app.js



The server will run on: http://localhost:3000



\## API Endpoints



\### Genres

GET /api/genres → Get all genres



POST /api/genres → Add a new genre



PUT /api/genres/:id → Update a genre



DELETE /api/genres/:id → Delete a genre



\### Books

GET /api/books → Get all books



GET /api/books/:id → Get book by ID



POST /api/books → Add a new book



PUT /api/books/:id → Update a book



DELETE /api/books/:id → Delete a book





\## Testing

You can test the API using:



Browser → for simple GET requests



Postman → for full CRUD testing with JSON payloads



\## Notes

This project is for learning purposes and may not follow all best practices.



Future improvements could include authentication, validation, and better project structure.



