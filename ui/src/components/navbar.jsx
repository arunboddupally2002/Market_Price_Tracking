import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sprout } from 'lucide-react'; 
import logo from "../images/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); 
  const logoUrl = logo 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg h-16' 
          : 'bg-white/70 backdrop-blur-sm h-20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            {logoUrl ? (
              <img 
                src={logoUrl} 
                alt="logo" 
                className="h-20 w-auto transform transition-transform duration-300 group-hover:scale-105" 
              />
            ) : (
              <Sprout className="h-8 w-8 text-green-600 transform transition-transform duration-300 group-hover:scale-105" />
            )}
            <span className="text-xl font-bold text-gray-800">AgriMarket</span>
          </Link>

          {/* Navigation Links */}
          <ul className="flex items-center gap-8">
            {[
              { to: '/home', label: 'Home' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact Us' },
              { to: '/', label: 'Log out' }
            ].map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>
                  <div className="relative group py-2">
                    <span className={`text-lg font-medium transition-colors duration-300 ${
                      location.pathname === to 
                        ? 'text-green-600' 
                        : 'text-gray-700 hover:text-green-600'
                    }`}>
                      {label}
                    </span>
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${
                      location.pathname === to 
                        ? 'bg-green-600 scale-x-100' 
                        : 'bg-green-600 scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </div>
                </Link>
              </li>
            ))}
            
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;