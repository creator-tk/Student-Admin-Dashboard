import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiGrid, FiAward, FiUsers, FiBarChart2, FiSettings, FiChevronsLeft } from 'react-icons/fi';
import { FaWandSparkles } from 'react-icons/fa6';


const Sidebar = () => {
  const navItems = [
    { to: '/dashboard', icon: <FiGrid className="mr-3" />, label: 'Dashboard' },
    { to: '/leaderboard', icon: <FiAward className="mr-3" />, label: 'Leaderboard' },
    { to: '/students', icon: <FiUsers className="mr-3" />, label: 'Students' },
    { to: '/analytics', icon: <FiBarChart2 className="mr-3" />, label: 'Analytics' },
    { to: '/settings', icon: <FiSettings className="mr-3" />, label: 'Settings' },
  ];

  return (
    <div className="w-64 border-gray-500 bg-sidebar-bg flex flex-col h-full shadow-lg">
      <div className="flex items-center justify-center h-20 border-b">
        <div className='border p-2 rounded-2xl w-[50px] h-[50px] mr-3 flex items-center justify-center text-white bg-primary-color'>
          <FaWandSparkles size={25} className="text-primary" />
        </div>
        <div className='text-start'>
          <h1 className="text-xl font-bold text-text-primary">SpeakGenie</h1>
          <p>Admin Panel</p>
        </div>

      </div>
      <nav className="flex-1 px-4 py-6">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 my-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                isActive
                  ? 'bg-primary-color text-white'
                  : 'text-text-secondary hover:bg-gray-100'
              }`
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="px-4 py-6 border-t flex  items-center gap-4">
        <div className='w-[50px] h-[50px] flex items-center justify-center font-extrabold bg-primary-color rounded-2xl text-white text-3xl'>
          <span>S</span>
        </div>
        <div>
          <h4 className='text-xl font-bold'>School Admin</h4>
          <small>School Admin</small><br />
          <small className='font-semibold text-green-900'>Greenwood Elementary</small>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;