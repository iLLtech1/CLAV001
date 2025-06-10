import React, { useState } from 'react';
import HeroSection from './HeroSection';
import EquipmentShowcase from './EquipmentShowcase';
import ContactForm from './ContactForm';

const AppLayout: React.FC = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const handleGetQuote = () => {
    setIsContactFormOpen(true);
  };

  const handleCloseContactForm = () => {
    setIsContactFormOpen(false);
  };

  return (
    <div className="min-h-screen">
      <HeroSection onGetQuote={handleGetQuote} />
      <EquipmentShowcase />
      <ContactForm
        isOpen={isContactFormOpen}
        onClose={handleCloseContactForm}
      />

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            CLAV RENTS
          </h3>
          <p className="text-gray-400 mb-4">
            Premium Event Equipment Rental Services
          </p>
          <p className="text-gray-500">
            Contact us: CLAVrents@gmail.com
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;