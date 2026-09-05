import React from "react";
import Hero from "../components/Hero/Hero.jsx";
import Features from "../components/Features/Features.jsx";
import AboutUs from "../components/About-us/About-us.jsx"; 
import Cards from "../components/Cards/Cards.jsx";
import CTA from "../components/CTA/CTA.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Home() {
  return (
    <>
      <Hero />
      <Cards />
      <AboutUs />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;
