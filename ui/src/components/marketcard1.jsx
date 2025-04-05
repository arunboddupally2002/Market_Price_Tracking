import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';

const MarketCard = ({ market, onEdit, onDelete }) => (
  <div
    key={market.id}
    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
  >
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-800">{market.crop}</h3>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(market)}
            className="p-1.5 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors duration-200"
          >
            <Edit2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(market.id)}
            className="p-1.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors duration-200"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center text-gray-600">
          <span className="text-sm">Location:</span>
          <span className="ml-2 text-gray-800">{market.location}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <span className="text-sm">Market:</span>
          <span className="ml-2 text-gray-800">{market.marketName}</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600">Price:</span>
          <span className="text-lg font-bold text-blue-600">₹ {market.price}</span>
        </div>
      </div>
    </div>
  </div>
);

export default MarketCard;