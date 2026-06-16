import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Services from './components/Services';
import Workflow from './components/Workflow';
import WhoIAm from './components/WhoIAm';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-surface-navy text-on-surface antialiased overflow-x-hidden selection:bg-primary-container/30 selection:text-white">
      {/* Upper header navigation */}
      <Header onScheduleClick={handleOpenModal} />

      {/* Main body content */}
      <main>
        {/* Majestic entrance Hero linking to strategic scheduler modal */}
        <Hero onScheduleClick={handleOpenModal} />

        {/* Why choose Nigel section */}
        <WhyWorkWithMe />

        {/* Smart IT Solutions Offerings */}
        <Services />

        {/* Interactive Step Timeline workflow */}
        <Workflow onScheduleClick={handleOpenModal} />

        {/* Professional biography / Who I Am */}
        <WhoIAm />

        {/* Call To Action / Contact form link block */}
        <CTA />
      </main>

      {/* Foot banner */}
      <Footer />

      {/* Lightbox pop-up consultation modal form */}
      <ConsultationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
