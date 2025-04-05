// import React, { useEffect, useState } from 'react';
// import { Edit2, Trash2, Search, Plus, SortAsc, ChevronDown } from 'lucide-react';

// const MarketCard = () => {
//   const [markets, setMarkets] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [isAdding, setIsAdding] = useState(false);
//   const [currentMarket, setCurrentMarket] = useState(null);
//   const [showSortMenu, setShowSortMenu] = useState(false);
//   const [formData, setFormData] = useState({
//     crop: '',
//     price: '',
//     marketName: '',
//     location: '',
//   });
//   const [cropSearch, setCropSearch] = useState('');
//   const [locationSearch, setLocationSearch] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');

//   const getMarkets = async () => {
//     const response = await fetch('http://localhost:8080/market/');
//     const data = await response.json();
//     setMarkets(data);
//   };

//   const findByCropAndLocation = async () => {
//     if (cropSearch && locationSearch) {
//       const response = await fetch(`http://localhost:8080/market/cropandlocation/${cropSearch}/${locationSearch}`);
//       const data = await response.json();
//       setMarkets(data);
//     } else {
//       getMarkets();
//     }
//   };

//   const sortMarkets = async (sortBy = 'price') => {
//     const response = await fetch(`http://localhost:8080/market/sort?sortBy=${sortBy}&sortDir=desc`);
//     const data = await response.json();
//     setMarkets(data);
//     setShowSortMenu(false);
//   };

//   useEffect(() => {
//     getMarkets();
//   }, []);

//   // Keep existing functions (deleteMarket, handleEdit, handleInputChange, saveEdit, addMarket)...
//   const deleteMarket = async (id) => {
//     await fetch(`http://localhost:8080/market/${id}`, {
//       method: 'DELETE'
//     });
//     setMarkets(markets.filter(market => market.id !== id));
//   };

//   const handleEdit = (market) => {
//     setIsEditing(true);
//     setCurrentMarket(market);
//     setFormData(market);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const saveEdit = async () => {
//     await fetch(`http://localhost:8080/market/update/${formData.id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     });
//     setMarkets(markets.map(market => (market.id === formData.id ? formData : market)));
//     setIsEditing(false);
//     setCurrentMarket(null);
//   };

//   const addMarket = async () => {
//     await fetch('http://localhost:8080/market/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     });
//     getMarkets();
//     setIsAdding(false);
//     setFormData({
//       crop: '',
//       price: '',
//       marketName: '',
//       location: '',
//     });
//   };

//   const filteredMarkets = markets.filter(market =>
//     market.crop.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     market.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     market.marketName.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const InputField = ({ name, value, onChange, placeholder, type = "text" }) => (
//     <div className="mb-4">
//       <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
//         {name.replace(/([A-Z])/g, ' $1').trim()}
//       </label>
//       <input
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out placeholder-gray-400"
//       />
//     </div>
//   );

//   const SortMenu = () => (
//     <div className="relative">
//       <button
//         onClick={() => setShowSortMenu(!showSortMenu)}
//         className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
//       >
//         <SortAsc className="w-4 h-4" />
//         Sort
//         <ChevronDown className="w-4 h-4" />
//       </button>
      
//       {showSortMenu && (
//         <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-50">
//           <div className="py-1">
//             <button
//               onClick={() => sortMarkets('price')}
//               className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
//             >
//               Sort by Price
//             </button>
//             <button
//               onClick={() => sortMarkets('crop')}
//               className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
//             >
//               Sort by Crop
//             </button>
//             <button
//               onClick={() => sortMarkets('location')}
//               className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
//             >
//               Sort by Location
//             </button>
//             <button
//               onClick={() => sortMarkets('marketName')}
//               className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
//             >
//               Sort by Market Name
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );

//   return (
//     <div className="market-container space-y-6 pt-4">
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-2">
//         <div className="flex gap-4">
//           <div className="flex gap-2">
//             <input
//               type="text"
//               placeholder="Enter crop..."
//               value={cropSearch}
//               onChange={(e) => setCropSearch(e.target.value)}
//               className="w-40 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="text"
//               placeholder="Enter location..."
//               value={locationSearch}
//               onChange={(e) => setLocationSearch(e.target.value)}
//               className="w-40 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               onClick={findByCropAndLocation}
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//             >
//               Search
//             </button>
//           </div>
//           <div className="relative border-2 border-blue-500 rounded-lg">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <input
//               type="text"
//               placeholder="Filter results..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <SortMenu />
//         </div>
//         <button
//           onClick={() => setIsAdding(true)}
//           className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
//         >
//           <Plus className="w-5 h-5" />
//           Add Market
//         </button>
//       </div>

//       {(isEditing || isAdding) && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md">
//             <h3 className="text-2xl font-bold text-gray-800 mb-6">
//               {isEditing ? 'Edit Market' : 'Add New Market'}
//             </h3>
            
//             <input
//               type="text"
//               name="crop"
//               value={formData.crop}
//               onChange={handleInputChange} placeholder="Enter crop name"
//               className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out placeholder-gray-400"
//             />
//             <InputField name="crop" value={formData.crop} onChange={handleInputChange} placeholder="Enter crop name" /> 
//             <InputField name="price" value={formData.price} onChange={handleInputChange} placeholder="Enter price" type="number" />
//             <InputField name="marketName" value={formData.marketName} onChange={handleInputChange} placeholder="Enter market name" />
//             <InputField name="location" value={formData.location} onChange={handleInputChange} placeholder="Enter location" />
            
//             <div className="flex justify-end gap-3 mt-6">
//               <button
//                 onClick={() => { setIsEditing(false); setIsAdding(false); }}
//                 className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors duration-200"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={isEditing ? saveEdit : addMarket}
//                 className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
//               >
//                 {isEditing ? 'Save Changes' : 'Add Market'}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {filteredMarkets.map(market => (
//           <div
//             key={market.id}
//             className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//           >
//             <div className="p-6">
//               <div className="flex justify-between items-start mb-4">
//                 <h3 className="text-xl font-bold text-gray-800">{market.crop}</h3>
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => handleEdit(market)}
//                     className="p-1.5 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors duration-200"
//                   >
//                     <Edit2 className="w-4 h-4" />
//                   </button>
//                   <button
//                     onClick={() => deleteMarket(market.id)}
//                     className="p-1.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors duration-200"
//                   >
//                     <Trash2 className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
              
//               <div className="space-y-2">
//                 <div className="flex items-center text-gray-600">
//                   <span className="text-sm">Location:</span>
//                   <span className="ml-2 text-gray-800">{market.location}</span>
//                 </div>
//                 <div className="flex items-center text-gray-600">
//                   <span className="text-sm">Market:</span>
//                   <span className="ml-2 text-gray-800">{market.marketName}</span>
//                 </div>
//                 <div className="mt-4 flex items-center justify-between">
//                   <span className="text-sm font-medium text-gray-600">Price:</span>
//                   <span className="text-lg font-bold text-blue-600">₹ {market.price}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MarketCard;