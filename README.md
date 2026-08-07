# Expense Tracker

A full-stack MERN Expense Tracker application that helps users securely manage their daily expenses through a clean, responsive, and user-friendly interface.

## Features

- User Registration & Login (JWT Authentication)
- Add New Expenses
- Edit Existing Expenses
- Delete Expenses
- View All Expenses
- Total Expense Summary
- Responsive Design

## Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs

## Installation

### Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm start
```

## Environment Variables

Create a `.env` file in the backend and add:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Create a `.env` file in the frontend and add:

```env
VITE_API_URL=https://your-render-backend-url.onrender.com
```

## Live Demo

**Frontend (Vercel):**

https://growthlift-capstone.vercel.app/

**Backend (Render):**

https://growthlift-capstone.onrender.com/

## Screenshots

### Dashboard

c:\Users\Usman\Pictures\Screenshots\Screenshot 2026-08-06 131552.png

### Add Expense

c:\Users\Usman\Pictures\Screenshots\Screenshot 2026-08-06 131606.png

## Future Improvements

- Expense charts and analytics
- Monthly reports
- Export expenses to PDF/Excel
- Dark mode

## Author

**Usman Muddasir**