import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import ProfileManagementPage from "./pages/ProfileManagementPage";
import ArticlesFilteredPage from './pages/ArticlesFilteredPage';
import ArticlePage from "./pages/ArticlePage";
import ArticleFormPage from "./pages/ArticleFormPage";
import BugFormPage from "./pages/BugFormPage";
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
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/profile-management" element={<ProfileManagementPage />} />
          <Route path="/category/:category" element={<ArticlesFilteredPage filterType="category" />} />
          <Route path="/keyword/:keyword" element={<ArticlesFilteredPage filterType="keyword" />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/article/add" element={<ArticleFormPage />} />
          <Route path="/article/edit/:id" element={<ArticleFormPage />} />
          <Route path="/bug/add/:articleID" element={<BugFormPage />} />
          <Route path="/bug/edit/:articleID/:bugID" element={<BugFormPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;