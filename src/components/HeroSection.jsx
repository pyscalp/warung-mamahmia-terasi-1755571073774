import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-primary text-white py-20 md:py-32 overflow-hidden">
      <img src="/images/hero_bg.svg" alt="Background pattern" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          Warung Mamahmia Terasi
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Nikmati kelezatan autentik masakan terasi dengan resep rahasia turun-temurun.
          Cita rasa yang tak terlupakan di setiap hidangan.
        </p>
        <Link
          to="/galeri"
          className="inline-flex items-center bg-accent text-secondary font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
        >
          Lihat Menu Kami <ArrowRight size={20} className="ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;