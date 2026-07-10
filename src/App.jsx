import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/layout/Hero';
import About from './components/layout/About';
import LivingRoom from './components/layout/LivingRoom';
import WhyGuestsLove from './components/layout/WhyGuestsLove';
import WhyChoose from './components/layout/WhyChoose';
import ExploreHalkidiki from './components/layout/ExploreHalkidiki';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <LivingRoom />
      <WhyGuestsLove />
      <WhyChoose />
      <ExploreHalkidiki />
      <Footer />
    </>
  );
}

export default App;


