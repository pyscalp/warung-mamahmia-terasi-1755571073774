import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Warung Mamahmia Terasi</h3>
          <p className="text-sm">
            Nikmati kelezatan autentik masakan terasi dengan resep rahasia turun-temurun.
            Cita rasa yang tak terlupakan di setiap hidangan.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Kontak Kami</h3>
          <ul className="space-y-2">
            <li className="flex items-center text-sm">
              <MapPin size={18} className="mr-2 text-accent" />
              Jl. Kenangan Indah No. 123, Jakarta
            </li>
            <li className="flex items-center text-sm">
              <Phone size={18} className="mr-2 text-accent" />
              (021) 123-4567
            </li>
            <li className="flex items-center text-sm">
              <Mail size={18} className="mr-2 text-accent" />
              info@mamahmiaterasi.com
            </li>
            <li className="flex items-center text-sm">
              <Clock size={18} className="mr-2 text-accent" />
              Senin - Sabtu: 10:00 - 22:00
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Ikuti Kami</h3>
          <div className="flex space-x-4">
            {/* Placeholder for social media icons if needed, using generic icons */}
            <a href="#" className="text-white hover:text-accent"><Users size={24} /></a>
            <a href="#" className="text-white hover:text-accent"><Globe size={24} /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-8 pt-4 border-t border-white border-opacity-20">
        &copy; {new Date().getFullYear()} Warung Mamahmia Terasi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;