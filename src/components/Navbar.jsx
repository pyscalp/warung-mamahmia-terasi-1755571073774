import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/tentang' },
    { name: 'Layanan', path: '/layanan' },
    { name: 'Galeri', path: '/galeri' },
    { name: 'Kontak', path: '/kontak' },
  ];

  return (
    <nav className="bg-primary p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Mamahmia Terasi
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <ul className={`md:flex md:space-x-8 ${isOpen ? 'block' : 'hidden'} absolute md:static top-16 left-0 w-full md:w-auto bg-primary md:bg-transparent p-4 md:p-0 text-center`}>
          {navLinks.map((link) => (
            <li key={link.name} className="my-2 md:my-0">
              <Link
                to={link.path}
                className={`text-white hover:text-accent transition-colors duration-300 ${location.pathname === link.path ? 'font-bold text-accent' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;