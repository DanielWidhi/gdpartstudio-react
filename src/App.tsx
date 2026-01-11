import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";

// Public Pages
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Services from "./pages/public/Services";
import Portfolio from "./pages/public/Portfolio";
import ProjectDetail from "./pages/public/ProjectDetail";
import Contact from "./pages/public/Contact";
import Login from "./pages/public/Login";

// Admin Pages
import AdminLayout from "./components/AdminLayout";
import AdminPortfolioList from "./pages/admin/AdminPortfolioList";
import AdminCreatePost from "./pages/admin/AdminCreatePost";
import AdminEditPost from "./pages/admin/AdminEditPost";
import AdminPostDetail from "./pages/admin/AdminPostDetail";
import AdminServicesList from "./pages/admin/AdminServicesList";
import AdminCreateService from "./pages/admin/AdminCreateService";
import AdminEditService from "./pages/admin/AdminEditService";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const isAuthenticated = () => !!localStorage.getItem("isAdmin");

const RequireAuth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<RequireAuth children={<AdminLayout />} />}>
          <Route index element={<AdminPortfolioList />} />
          <Route path="portfolio" element={<AdminPortfolioList />} />
          <Route path="portfolio/create" element={<AdminCreatePost />} />
          <Route path="portfolio/edit/:id" element={<AdminEditPost />} />
          <Route path="portfolio/:id" element={<AdminPostDetail />} />

          <Route path="services" element={<AdminServicesList />} />
          <Route path="services/create" element={<AdminCreateService />} />
          <Route path="services/edit/:id" element={<AdminEditService />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
