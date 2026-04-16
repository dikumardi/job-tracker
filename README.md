# job-tracker
# 🚀 Job Tracker API

A RESTful API built with **Node.js, Express, MongoDB** that allows users to manage their job applications with authentication.

---

## 📌 Features

* 🔐 User Authentication (JWT + Cookies)
* 🧾 Register & Login
* 📂 Create Job Applications
* 📄 Get All Jobs (User-specific)
* 🔄 Update Job Status
* ❌ Delete Job
* 🛡️ Protected Routes

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT (Authentication)
* bcrypt (Password Hashing)
* cookie-parser

---

## ⚙️ Installation

```bash
git clone <your-repo-url>
cd job-tracker
npm install
```

---

## ▶️ Run Server

```bash
npm start
```

Server will run on:

```bash
http://localhost:3000
```

---

## 🔐 Environment Variables

Create a `.env` file:

```env
PORT=3000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

---

## 📡 API Base URL

```
http://localhost:3000/api
```

---

## 🔑 Authentication APIs

### 🧾 Register

**POST** `/auth/register`

```json
{
  "username": "testuser",
  "email": "test@gmail.com",
  "password": "123456"
}
```

---

### 🔓 Login

**POST** `/auth/login`

```json
{
  "email": "test@gmail.com",
  "password": "123456"
}
```

---

## ⚠️ Authentication Setup (Postman)

### Option 1: Cookies (Auto)

* Login → Cookie stored automatically

### Option 2: Headers (Manual)

```
Authorization: <your_token>
```

---

## 📂 Job APIs (Protected)

### ➕ Create Job

**POST** `/jobs/create`

```json
{
  "company": "Google",
  "position": "Software Engineer"
}
```

---

### 📄 Get Jobs

**GET** `/jobs/gets`

---

### 🔄 Update Job

**PUT** `/jobs/update/:id`

```json
{
  "status": "Interview"
}
```

📌 Status values:

* Applied
* Interview
* Rejected
* Selected

---

### ❌ Delete Job

**DELETE** `/jobs/delete/:id`

---

## 🧪 Testing Flow (Postman)

1. Register User
2. Login User
3. Use Cookie / Token
4. Create Job
5. Get Jobs
6. Update Job
7. Delete Job

---

## 📁 Project Structure

```
.
├── src
│   ├── config/          # Configuration files
│   ├── controllers/     # Controllers (auth, job logic)
│   ├── db/              # Database connection
│   ├── middleware/      # Authentication middleware
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   ├── app.js           # Express app setup
└── server.js         # Server entry point   
│
├── .gitignore
├── README.md
├── package.json
└── package-lock.json
```


---

## 🛡️ Middleware

### protect

* Verifies JWT token
* Adds `req.user`
* Secures private routes

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
