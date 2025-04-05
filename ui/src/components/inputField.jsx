import React from 'react';

const InputField = ({ name, value, onChange, placeholder, type = "text" }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
      {name.replace(/([A-Z])/g, ' $1').trim()}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out placeholder-gray-400"
    />
  </div>
);

export default InputField;
