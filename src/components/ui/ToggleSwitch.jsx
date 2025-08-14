import React, { useState } from 'react';

const ToggleSwitch = ({ enabled }) => {
  const [isEnabled, setIsEnabled] = useState(enabled);

  return (
    <div
      onClick={() => setIsEnabled(!isEnabled)}
      className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
        isEnabled ? 'bg-primary' : 'bg-gray-300'
      }`}
    >
      <div
        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
          isEnabled ? 'translate-x-7' : ''
        }`}
      />
    </div>
  );
};

export default ToggleSwitch;