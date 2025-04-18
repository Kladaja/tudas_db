import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import FilteredArticlesPage from './pages/FilteredArticlesPage';
import ArticlePage from "./pages/ArticlePage";
import ProfilePage from "./pages/ProfilePage";
import "./styles/App.css";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/category/:category" element={<FilteredArticlesPage filterType="category" />} />
          <Route path="/keyword/:keyword" element={<FilteredArticlesPage filterType="keyword" />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
