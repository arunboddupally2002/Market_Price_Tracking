import React from 'react';
import { Sprout } from 'lucide-react'; 
import banner from "../images/banner.jpeg";

const Banner = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <img 
        src={banner}
        alt="Agricultural landscape" 
        className="object-cover w-full h-full transform scale-105 animate-subtle-zoom"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <Sprout className="w-12 h-12 text-green-400 animate-fade-in 2s" />
          </div>
          
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="block overflow-hidden">
              <span className="animate-slide-up inline-block">Market Price</span>
            </span>
            <span className="block overflow-hidden mt-2">
              <span className="animate-slide-up inline-block animation-delay-200">Tracking System</span>
            </span>
          </h1>
          
          <p className="text-gray-200 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in">
            Connecting farmers with markets to ensure fair prices and sustainable growth.
          </p>
          
          {/* <div className="flex flex-wrap justify-center gap-4 mt-8 opacity-0 animate-fade-in animation-delay-500">
            <button className="px-8 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/25">
              Explore Markets
            </button>
            <button className="px-8 py-3 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;