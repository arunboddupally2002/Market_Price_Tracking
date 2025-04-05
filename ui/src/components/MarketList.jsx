import React, { useEffect, useState } from 'react';
import { Search, Plus } from 'lucide-react';
import SortMenu from '../components/SortMenu';
import MarketCard from '../components/marketcard1';
import MarketForm from '../components/marketform';

const MarketList = () => {
  const [markets, setMarkets] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [currentMarket, setCurrentMarket] = useState(null);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [cropSearch, setCropSearch] = useState('');
  const [locationSearch, setLocationSearch] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const getMarkets = async () => {
    const response = await fetch('http://localhost:8080/market/');
    const data = await response.json();
    setMarkets(data);
  };

  const findByCropAndLocation = async () => {
    if (cropSearch && locationSearch) {
      const response = await fetch(`http://localhost:8080/market/cropandlocation/${cropSearch}/${locationSearch}`);
      const data = await response.json();
      setMarkets(data);
    } else {
      getMarkets();
    }
  };

  const sortMarkets = async (sortBy = 'price', sortDir = 'desc') => {
    const response = await fetch(`http://localhost:8080/market/sort?sortBy=${sortBy}&sortDir=${sortDir}`);
    const data = await response.json();
    setMarkets(data);
    setShowSortMenu(false);
  };

  const deleteMarket = async (id) => {
    await fetch(`http://localhost:8080/market/${id}`, { method: 'DELETE' });
    setMarkets(markets.filter(market => market.id !== id));
  };

  const handleEdit = (market) => {
    setIsEditing(true);
    setCurrentMarket(market);
  };

  useEffect(() => {
    getMarkets();
  }, []);

  const filteredMarkets = markets.filter(market =>
    market.crop.toLowerCase().includes(searchTerm.toLowerCase()) ||
    market.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    market.marketName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="market-container space-y-6 pt-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-2">
        <div className="flex gap-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter crop..."
              value={cropSearch}
              onChange={(e) => setCropSearch(e.target.value)}
              className="w-40 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Enter location..."
              value={locationSearch}
              onChange={(e) => setLocationSearch(e.target.value)}
              className="w-40 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={findByCropAndLocation}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Search
            </button>
          </div>
          <div className="relative border-2 border-blue-500 rounded-lg">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Filter results..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <SortMenu 
            showSortMenu={showSortMenu} 
            setShowSortMenu={setShowSortMenu} 
            sortMarkets={sortMarkets} 
          />
        </div>
        <button
          onClick={() => setIsAdding(true)}
          className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          <Plus className="w-5 h-5" />
          Add Market
        </button>
      </div>

      {(isEditing || isAdding) && (
        <MarketForm 
          isEditing={isEditing}
          currentMarket={currentMarket}
          onClose={() => { setIsEditing(false); setIsAdding(false); }}
          getMarkets={getMarkets}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredMarkets.map(market => (
          <MarketCard 
            key={market.id} 
            market={market} 
            onEdit={handleEdit} 
            onDelete={deleteMarket} 
          />
        ))}
      </div>
    </div>
  );
};

export default MarketList;