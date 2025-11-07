import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import CitizenDashboard from "./pages/CitizenDashboard";
import ObserverDashboard from "./pages/ObserverDashboard";
import AnalystDashboard from "./pages/AnalystDashboard";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/citizen" element={<CitizenDashboard />} />
        <Route path="/observer" element={<ObserverDashboard />} />
        <Route path="/analyst" element={<AnalystDashboard />} />
      </Routes>
    </Router>
  );
}
