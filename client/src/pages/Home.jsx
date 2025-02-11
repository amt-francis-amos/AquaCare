import React from 'react';
import HeroSection from '../components/HeroSection';
import OverviewSection from '../components/OverviewSection';
import SymptomsSection from '../components/SymptomsSection';
import PreventionSection from '../components/PreventionSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <OverviewSection />
      <SymptomsSection />
      <PreventionSection />
    </div>
  );
};

export default Home;
