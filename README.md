# 🚀 Job Tracker (MERN Stack)


A full-stack **Job Tracking Web Application** that helps users manage and monitor their job applications efficiently.

Built with the **MERN Stack (MongoDB, Express, React, Node.js)**, this app provides secure authentication, job management, and search functionality.

---

## ✨ Features

- 🔐 Secure Authentication (JWT + Cookies)
- ➕ Add Job Applications
- ✏️ Update Job Details
- ❌ Delete Jobs
- 🔍 Search Jobs (Company / Position)
- 📊 Track Status:
  - Applied
  - Interview
  - Rejected
  - Selected
- 🛡️ Protected Routes (Middleware)
- 👤 User-specific job tracking

---

## 🧠 Tech Stack

### 💻 Frontend
- React.js
- React Router DOM
- Axios
- CSS

### ⚙️ Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt
- cookie-parser
- CORS

---

## 📁 Project Structure


```
job-tracker/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── db/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── app.js
│   │
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── api/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
└── README.md
```



---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/dikumardi/job-tracker.git
cd job-tracker
```

---

### 2️⃣ Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

---

### 3️⃣ Environment Variables

Create a `.env` file inside `/backend`:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 4️⃣ Run the Application

```bash
# Start Backend
cd backend
npx nodemon server.js

# Start Frontend (new terminal)
cd frontend
npm run dev
```

---

## 📡 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint        | Description        |
|--------|----------------|--------------------|
| POST   | /api/auth/register | Register user |
| POST   | /api/auth/login    | Login user    |

---

### 💼 Job Routes (Protected)

| Method | Endpoint                  | Description         |
|--------|--------------------------|---------------------|
| POST   | /api/jobs/create         | Create job          |
| GET    | /api/jobs/gets           | Get all jobs        |
| PUT    | /api/jobs/update/:id     | Update job          |
| DELETE | /api/jobs/delete/:id     | Delete job          |

---

### 🔍 Search Jobs

```http
GET /api/jobs/gets?search=developer
```

Search works on:
- Company name
- Job position

---

## 🔐 Authentication Flow

1. User registers/logs in
2. Server generates JWT
3. Token stored in cookies
4. Protected routes verified via middleware

---

## 🛡️ Security Features

- 🔒 Password hashing using bcrypt
- 🔑 JWT-based authentication
- 🍪 Secure cookie handling
- 🚫 Unauthorized access protection
- 👤 User-specific data isolation

---

## 🚀 Future Improvements

- Pagination for jobs
- Job analytics dashboard
- Email notifications
- Resume upload feature
- Dark mode UI

---

## 👨‍💻 Author
- GitHub: https://github.com/dikumardi

---

## ⭐ Support

If you like this project:

- ⭐ Star this repo
- 🍴 Fork it
- 🛠️ Contribute

---
