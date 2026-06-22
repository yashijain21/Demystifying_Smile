import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ServiceDetailPage from "./components/ServiceDetailPage";
import AppointmentsManager from "./components/AppointmentsManager";
import Gallery from "./components/Gallery";
import AdminLoginPage from "./components/AdminLoginPage";
import AdminPanel from "./components/AdminPanel";
import { getToken } from "./services/api";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!getToken());
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />

        <Route
          path="/services/:slug"
          element={<ServiceDetailPage />}
        />

        <Route
          path="/appointments"
          element={<AppointmentsManager />}
        />
        <Route
        path="/gallery"
        element={<Gallery />}
      />

       

      <Route
  path="/admin"
  element={
    isAuthenticated ? (
      <AdminPanel />
    ) : (
      <AdminLoginPage
        onLoginSuccess={() => setIsAuthenticated(true)}
      />
    )
  }
/>
      </Routes>
    </Router>
  );
}