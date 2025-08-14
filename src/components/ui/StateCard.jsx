import React from 'react';

const StatCard = ({ title, value, change, icon }) => {
  const isPositive = change && change.startsWith('+');
  return (
    <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
            <p className="text-sm text-text-secondary font-medium">{title}</p>
            <div className="flex items-baseline">
                <p className="text-2xl font-bold text-text-primary">{value}</p>
                {change && (
                    <span className={`ml-2 text-sm font-semibold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                        {change}
                    </span>
                )}
            </div>
        </div>
        {icon && (
          <div className="mr-4 border p-4! rounded-xl">{icon}</div>
        )}
      </div>
    </div>
  );
};

export default StatCard;