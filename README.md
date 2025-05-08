# 🎬 Movie App

A modern, responsive React application that allows users to browse popular movies, search for specific titles, mark favorites, and view detailed information including trailers. Built using **React**, **React Router**, **Context API**, and the **TMDB API**.

## 🔗 Live Demo

👉 [View Live Project](https://your-deployment-url.com)

---

## ✨ Features

- 🔍 **Search** movies by title using the TMDB API  
- 🎞️ **View popular movies** on the homepage  
- ❤️ **Add/remove favorites** and view them on a dedicated Favorites page (persisted via `localStorage`)  
- 📄 **Detailed movie page** with genres, release date, synopsis, and trailer  
- 🧭 **Client-side routing** with `react-router-dom`  
- 📱 **Responsive UI** and smooth layout  

---

## 🛠️ Tech Stack

- **Frontend**: React, React Router DOM, Context API  
- **Styling**: Custom CSS  
- **API**: [TMDB API](https://developer.themoviedb.org/docs)  
- **State Management**: React Context + Hooks  

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/MBashov/Movie-App.git
cd Movie-App/frontend
```   

### 2. Install dependencies

```bash
npm install   
```   

### 3. Set up your TMDB API key
Create a `.env` file in the `frontend/` folder and add:

```ini
VITE_TMDB_API_KEY=your_tmdb_api_key
```   
You can get your API key from [TMDB](https://www.themoviedb.org/)


### 4. Start the development server
```bash
npm run dev
```
Visit http://localhost:5173 in your browser.

---
## 📁 Folder Structure

```bash
frontend/   
├── components/        # Reusable UI components (NavBar, MovieCard, etc.)   
├── context/           # Movie context and custom hook   
├── pages/             # Home, Favorites, and Movie Detail views   
├── providers/         # Global MovieProvider   
├── services/          # API service for TMDB   
├── css/               # Component-specific CSS files   
└── App.jsx            # Main app layout and routes   
```
---

## 🖼️ Screenshots

![Home Page](path-to-image)
![Favorites Page](path-to-image)

---

## 🗺️ Roadmap


- ✅ Home page with popular movies & search

- ✅ Favorites page with localStorage persistence

- ✅ Movie detail page with trailer support

- 🔜 Filter & sort functionality for favorites

- 🔜 Add loading skeletons for better UX

- 🔜 Deploy to Netlify or Vercel

- 🔜 Add unit tests using React Testing Library