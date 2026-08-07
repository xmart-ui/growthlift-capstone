# Expense Tracker – Case Study

# Section 1 — The Project

## Project Name
Expense Tracker

## Description
Expense Tracker is a full-stack MERN web application that allows users to securely manage their daily expenses. Users can register, log in, add expenses, edit existing records, delete unwanted entries, and monitor their spending through a clean and responsive dashboard.

## Who It Is For
- Students
- Freelancers
- Working professionals
- Anyone who wants to track personal expenses

## Why It Matters
Many people struggle to keep track of daily spending. This project provides a simple and organized way to record expenses, helping users better understand their financial habits and make informed budgeting decisions.

---

# Section 2 — The Stack

| Technology | Why I Chose It |
|------------|----------------|
| React (Vite) | Fast development experience and reusable component architecture. |
| Tailwind CSS | Rapid UI development with responsive utility classes. |
| React Router DOM | Client-side routing for smooth navigation. |
| Axios | Simplifies API requests and error handling. |
| Node.js | JavaScript runtime for building the backend. |
| Express.js | Lightweight framework for creating REST APIs. |
| MongoDB Atlas | Cloud-hosted NoSQL database for storing user and expense data. |
| Mongoose | Simplifies MongoDB operations using schemas and models. |
| JWT Authentication | Secure user authentication and protected routes. |
| bcryptjs | Password hashing for secure credential storage. |
| Render | Backend deployment with easy integration. |
| Vercel | Fast frontend deployment with automatic builds. |
| Git & GitHub | Version control and project collaboration. |

---

# Section 3 — The Challenges

## 1. Connecting the Frontend and Backend After Deployment

**Problem**

The frontend continued making API requests to localhost after deployment, causing failed requests.

**Solution**

I created environment variables using `VITE_API_URL`, updated all API calls to use the deployed backend URL, and rebuilt the frontend.

---

## 2. Mobile Responsiveness

**Problem**

The dashboard looked correct briefly on mobile but then broke after rendering, causing layout issues.

**Solution**

I reviewed the layout structure, adjusted responsive Tailwind classes, fixed width constraints, and improved the sidebar/navbar behavior for smaller screens.

---

## 3. Authentication and Protected Routes

**Problem**

Users could access dashboard pages without proper authentication during early development.

**Solution**

I implemented JWT authentication, stored the token after login, and created protected routes that redirect unauthenticated users to the login page.

---

# Section 4 — What I Learned

### 1. Full MERN Application Development

I learned how React, Express, MongoDB, and Node.js work together to build a complete web application.

### 2. REST API Integration

I gained experience creating REST APIs, connecting them with Axios, handling asynchronous requests, and managing server responses.

### 3. Deployment and Production Configuration

I learned how to deploy frontend and backend applications separately, configure environment variables, and troubleshoot deployment issues.

---

# Section 5 — Links

## Live Application

https://growthlift-capstone.vercel.app/login

## GitHub Repository

https://github.com/xmart-ui/growthlift-capstone



