<h1 align="center">🏋️‍♂️ FitVerse</h1>
<p align="center">🔗 Landing Page: https://fit-verse-chi.vercel.app/<p>
<p align="center">
  <img src="https://img.shields.io/badge/Stack-FullStack-blueviolet" />
  <img src="https://img.shields.io/badge/Built%20With-FastAPI-%23009688" />
  <img src="https://img.shields.io/badge/Frontend-Vite%20+%20React-%2361DAFB" />
  <img src="https://img.shields.io/badge/Design-TailwindCSS%20+%20ShadcnUI-%2300BFFF" />
  <img src="https://img.shields.io/badge/AI-OpenAI%20%2F%20Gemini-orange" />
</p>

<p align="center">
  <b>AI-Powered Fitness & Nutrition Tracker</b><br/>
  Personalized workouts, smart diet plans, body analytics, and visual food recognition — all in one place.
</p>

---

## 🔥 Project Overview

**PulseAI** is an AI-powered fitness tracker and diet coach built for the modern generation. Whether you're trying to bulk, cut, or maintain — PulseAI helps you crush your fitness goals with science, data, and sleek UI.

Built with ⚡FastAPI, 🧠 AI integrations, 🍽️ food vision models, and a blazing fast Vite + Tailwind frontend.

---

## 🚀 Features

### 🧘 Landing + Onboarding
- Clean, modern landing page
- Responsive UI with Tailwind & ShadcnUI
- Dark mode ready

### 🔐 Authentication
- Email/password signup
- Google OAuth (coming soon)
- JWT token-based backend security

### 📊 Fitness Engine
- Workout Logging: Add/edit/delete workouts
- Categorize workouts (strength, cardio, HIIT, etc.)
- Progress dashboard with interactive charts

### 🍎 Nutrition + Diet Plan
- Log meals, track macros & calories
- AI-powered meal suggestions based on:
  - Your goals (gain, cut, maintain)
  - Food type (veg/non-veg)
  - Real image uploads with ML inference

### 📅 Smart Dashboard
- Calendar view of workouts/meals
- Streak tracker & achievements
- Real-time BMI calculator, body fat %, fitness verdict
- AI suggestions like:
  > "Skipped leg day? Add squats today 💪"

---

## 🧠 Tech Stack

### 🖥️ Frontend
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn/UI](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Chart.js](https://www.chartjs.org/)
- [Lucide Icons](https://lucide.dev/)

### ⚙️ Backend
- [FastAPI](https://fastapi.tiangolo.com/)
- [MongoDB Atlas](https://www.mongodb.com/atlas/database)
- [Pydantic](https://docs.pydantic.dev/)
- JWT Authentication
- AI via OpenAI / Gemini API
- Docker (containerized deployment)

---

## 📷 Screenshots

> Coming soon...

---

## 🛠️ Local Setup

```bash
# Clone frontend
git clone https://github.com/yourname/pulseai-frontend

# Install frontend deps
cd pulseai-frontend
npm install
npm run dev

# Clone backend
git clone https://github.com/yourname/pulseai-backend
cd pulseai-backend
pip install -r requirements.txt
uvicorn app.main:app --reload
