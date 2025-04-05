import { SortAsc, ChevronDown, ChevronUp } from 'lucide-react';

const SortMenu = ({ showSortMenu, setShowSortMenu, sortMarkets }) => (
    <div className="relative">
      <button
        onClick={() => setShowSortMenu(!showSortMenu)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
      >
        <SortAsc className="w-4 h-4" />
        Sort
        <ChevronDown className="w-4 h-4" />
      </button>
      
      {showSortMenu && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-50">
          <div className="py-1">
            {['price', 'crop', 'location', 'marketName'].flatMap(field => [
              {
                field, 
                dir: 'desc', 
                label: `Sort ${field}`, 
                icon: <ChevronDown className="w-4 h-4 ml-2" />
              },
              {
                field, 
                dir: 'asc', 
                label: `Sort ${field}`, 
                icon: <ChevronUp className="w-4 h-4 ml-2" />
              }
            ]).map(({field, dir, label, icon}) => (
              <button
                key={`${field}-${dir}`}
                onClick={() => sortMarkets(field, dir)}
                className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
              >
                {label}
                {icon}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
  export default SortMenu;