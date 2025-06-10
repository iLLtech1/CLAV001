import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onGetQuote: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetQuote }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          CLAV RENTS
        </h1>
        <p className="text-2xl mb-8 text-gray-200">
          Premium Event Equipment Rental
        </p>
        <p className="text-lg mb-12 text-gray-300 max-w-2xl mx-auto">
          LED Walls • High-End Audio • Professional Lighting • Staging • Expert Labor
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            onClick={onGetQuote}
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-3 text-lg"
          >
            Get Your Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;