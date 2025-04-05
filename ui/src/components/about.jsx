import React from 'react';
import { Sprout, BarChart3, Shield, Users2, Database, Laptop2 } from 'lucide-react';

function About() {
  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-Time Price Updates",
      description: "Stay informed with the latest market prices for a wide range of crops, updated in real-time."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Comprehensive Database",
      description: "Access a vast database of market prices from different regions and markets."
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      title: "User-Friendly Interface",
      description: "Navigate our intuitive interface with ease, whether you are a farmer, trader, or consumer."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Detailed Reports",
      description: "Generate detailed reports and analyses to help you make data-driven decisions."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Data Management",
      description: "Our platform ensures the security and privacy of your data with robust security measures."
    },
    {
      icon: <Laptop2 className="w-6 h-6" />,
      title: "Modern Technology",
      description: "Built with Spring Boot and React.js for a fast, reliable, and responsive experience."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up inline-block">
              Crop Market Price Tracking System
            </h1>
            <p className="text-xl text-green-100">
              Empowering farmers, traders, and consumers with real-time market intelligence
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50"></div>
      </div>

      {/* Vision & Mission */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <Sprout className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We envision a world where farmers have easy access to market information, enabling them to make better decisions, optimize their profits, and contribute to a more sustainable agricultural economy.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <BarChart3 className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to provide a reliable platform that tracks and disseminates the latest market prices of crops, ensuring that our users stay informed and competitive in the agricultural marketplace.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-green-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Images Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80"
            alt="Farmers in field"
            className="rounded-lg shadow-lg object-cover h-64 w-full"
          />
          <img
            src="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80"
            alt="Digital farming"
            className="rounded-lg shadow-lg object-cover h-64 w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default About;