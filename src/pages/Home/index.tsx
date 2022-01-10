import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import Hero from "../../components/Hero";
import MainContent from "../../components/MainContent";
import Sections from "../../components/sections";

const Home = () => {
  return (
    <div className='homepage'>
      <Header />
      <Hero />
      <MainContent />
      <Sections />
      <Footer />
    </div>
  );
};

export default Home;
