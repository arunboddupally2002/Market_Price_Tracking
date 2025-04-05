import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up inline-block">
              Contact Us
            </h1>
            <p className="text-xl text-green-100">
              We value your feedback and inquiries. Get in touch with our team for support and assistance.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Mail className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold">Email & Phone</h2>
              </div>
              <div className="space-y-4">
                <p className="flex items-center text-gray-600">
                  <span className="font-medium w-24">Email:</span>
                  <a href="mailto:support@cropmarketprice.com" className="text-green-600 hover:text-green-700">
                    arunboddupally142@gmail.com
                  </a>
                </p>
                <p className="flex items-center text-gray-600">
                  <span className="font-medium w-24">Phone:</span>
                  <a href="tel:+18001234567" className="text-green-600 hover:text-green-700">
                    +91 9347515313
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Clock className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold">Support Hours</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Our customer support team is available:
                </p>
                <p className="text-gray-600 font-medium">
                  Monday to Friday
                  <br />
                  9:00 AM - 6:00 PM (local time)
                </p>
              </div>
            </div>
          </div>

          {/* Feedback Section */}
          <div className="bg-white rounded-lg p-8 shadow-lg mb-12">
            <div className="flex items-center mb-6">
              <MessageSquare className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold">Feedback and Suggestions</h2>
            </div>
            <p className="text-gray-600 mb-4">
              We are always looking to improve our services and value your input. If you have any suggestions or feedback, please let us know. Your insights help us enhance our platform and better serve the agricultural community.
            </p>
            <p className="flex items-center text-gray-600">
              <span className="font-medium w-32">Feedback Email:</span>
              <a href="mailto:feedback@cropmarketprice.com" className="text-green-600 hover:text-green-700">
              arunboddupally142@gmail.com
              </a>
            </p>
          </div>

          {/* Visit Us Section */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <MapPin className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold">Visit Us</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Office Address</h3>
                <p className="text-gray-600">
                  Addagutta society 
                  <br />
                  kukatpally, Hyderabad, 500079
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Mailing Address</h3>
                <p className="text-gray-600">
                  P.O. Box 789
                  <br />
                  Kukatpally, Hyderabad, 500079
                </p>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <p className="text-center text-gray-600 mt-12">
            We look forward to hearing from you and assisting you with your needs. Thank you for being a part of our Crop Market Price Tracking System community!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;