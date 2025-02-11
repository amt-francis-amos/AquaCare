import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AlertsPage from "./pages/AlertsPage";
import AdvicePage from "./pages/AdvicePage";
import ForumPage from "./pages/ForumPage";
import ConsultationPage from "./pages/ConsultationPage";
import DiscussionPage from "./pages/DiscussionPage";
import DoctorLocator from "./pages/DoctorLocator";
import Login from "./pages/Login";


function App() {


  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alerts" element={<AlertsPage />} />
        <Route path="/advice" element={<AdvicePage />} />
        <Route path="/forum" element={<ForumPage /> } />
        <Route path="/consultation" element={<ConsultationPage  />} />
        <Route path="/discussion/:id" element={<DiscussionPage /> } />
        <Route path="/doctor-locator" element={ <DoctorLocator /> } />

  
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
