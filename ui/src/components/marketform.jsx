import React, { useState, useEffect } from 'react';
import InputField from './inputField';

const MarketForm = ({ isEditing, currentMarket, onClose, getMarkets }) => {
  const [formData, setFormData] = useState({
    crop: '',
    price: '',
    marketName: '',
    location: '',
  });

  useEffect(() => {
    if (isEditing && currentMarket) {
      setFormData(currentMarket);
    }
  }, [isEditing, currentMarket]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const saveEdit = async () => {
    await fetch(`http://localhost:8080/market/update/${formData.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    getMarkets();
    onClose();
  };

  const addMarket = async () => {
    await fetch('http://localhost:8080/market/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    getMarkets();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          {isEditing ? 'Edit Market' : 'Add New Market'}
        </h3>
        
        <InputField name="crop" value={formData.crop} onChange={handleInputChange} placeholder="Enter crop name" />
        <InputField name="price" value={formData.price} onChange={handleInputChange} placeholder="Enter price" type="number" />
        <InputField name="marketName" value={formData.marketName} onChange={handleInputChange} placeholder="Enter market name" />
        <InputField name="location" value={formData.location} onChange={handleInputChange} placeholder="Enter location" />
        
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={isEditing ? saveEdit : addMarket}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            {isEditing ? 'Save Changes' : 'Add Market'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketForm;