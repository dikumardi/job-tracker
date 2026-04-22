# 🚀 Job Tracker (MERN)

A full-stack web application to manage and track job applications in one place. Built using the MERN stack, it provides secure authentication, job management, and search capabilities for an efficient job tracking workflow.

---

## ✨ Features

* Secure authentication using JWT (cookies + headers)
* Create, update, and delete job applications
* View jobs specific to logged-in user
* Search jobs by company or position
* Track application status (Applied, Interview, Rejected, Selected)
* Protected API routes with middleware

---

## 🛠 Tech Stack

**Frontend**

* React.js
* Axios
* React Router

**Backend**

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT, bcrypt, cookie-parser

---

## ⚙️ Setup

### 1. Clone the repository

```bash id="a1b2c3"
git clone https://github.com/dikumardi/job-tracker.git
cd job-tracker
```

### 2. Install dependencies

```bash id="d4e5f6"
cd backend && npm install
cd ../frontend && npm install
```

### 3. Configure environment variables

Create a `.env` file inside `/backend`:

```env id="g7h8i9"
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
```

### 4. Run the app

```bash id="j1k2l3"
# backend
cd backend
npx nodemon server.js

# frontend (new terminal)
cd frontend
npm run dev
```

---

## 📡 API Overview

Base URL:

```id="m4n5o6"
http://localhost:3000/api
```

### Auth

* `POST /auth/register`
* `POST /auth/login`

### Jobs (Protected)

* `POST /jobs/create`
* `GET /jobs/gets`
* `PUT /jobs/update/:id`
* `DELETE /jobs/delete/:id`

### Search

```id="p7q8r9"
GET /jobs/gets?search=keyword
```

Search works on **company** and **position** fields.

---

## 🛡️ Security

* Passwords hashed using bcrypt
* JWT-based authentication
* Routes protected via middleware
* User-specific data isolation

---


## 👨‍💻 Author

Your Name
GitHub: https://github.com/dikumardi


---

## ⭐

If you found this useful, consider giving it a star.
