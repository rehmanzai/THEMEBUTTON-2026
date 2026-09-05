import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Navbar import bilkul sahi path par hai
import Navbar from "./components/Navbar/Navbar.jsx";

// Saare pages ke paths aur components
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Login from "./Pages/Login.jsx";
import Services from "./Pages/Services.jsx";
import TechStack from "./Pages/Tech-Stack.jsx"; 
import WhyUs from "./Pages/WhyUs.jsx"; 

function App() {
  return (
    <BrowserRouter>
      {/* Navbar har page par upar dikhega */}
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        
        {/* Tech Stack ka web route path */}
        <Route path="/tech-stack" element={<TechStack />} />
        
        <Route path="/why-us" element={<WhyUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
