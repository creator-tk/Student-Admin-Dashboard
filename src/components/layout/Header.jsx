import React from 'react';
import { FiBell, FiChevronDown } from 'react-icons/fi';

const Header = () => {
    
  return (
    <header className="h-20 bg-white flex items-center justify-between px-6 border-b">
        <div>
            <h2 className="text-lg font-semibold text-text-primary">Welcome back, School Admin!</h2>
            <p className="text-sm text-text-secondary">Here's your school's overview.</p>
        </div>
      <div className="flex items-center">
        <FiBell className="text-text-secondary h-6 w-6 mr-6" />
        <div className="flex items-center">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3">
            S
          </div>
          <div>
            <p className="text-sm font-semibold text-text-primary">School Admin</p>
            <p className="text-xs text-text-secondary">Greenwood Elementary</p>
          </div>
          <FiChevronDown className="ml-2 text-text-secondary" />
        </div>
      </div>
    </header>
  );
};

export default Header;