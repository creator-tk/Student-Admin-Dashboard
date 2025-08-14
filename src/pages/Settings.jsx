import React from 'react';

// Main App component to render the settings page
export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
      <Settings />
    </div>
  );
}

// A reusable component for each settings section card
const SettingsSection = ({ title, subtitle, children }) => (
  <div className="bg-white p-6 rounded-lg mb-6 border border-gray-300 shadow-md">
    <div className="mb-4">
      <h3 className="text-lg text-gray-800 font-extrabold">{title}</h3>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
    <hr className="mb-6"/>
    {children}
  </div>
);

// The main Settings page component
const Settings = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Settings</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column */}
        <div>
          {/* Profile Settings Card */}
          <SettingsSection 
            title="Profile Settings" 
            subtitle="Update your personal information and contact details"
          >
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
                <input 
                  type="text" 
                  defaultValue="Admin User" 
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                <input 
                  type="email" 
                  defaultValue="admin@example.com" 
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Phone</label>
                <input 
                  type="tel" 
                  defaultValue="+1-555-0123" 
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="text-left pt-2">
                <button 
                  type="submit" 
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Update Profile
                </button>
              </div>
            </form>
          </SettingsSection>
          
          {/* Notification Preferences Card */}
          <SettingsSection 
            title="Notification Preferences" 
            subtitle="Manage how and when you receive notifications"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-700">Email Notifications</h4>
                  <p className="text-sm text-gray-500">Receive updates via email.</p>
                </div>
                <input type="checkbox" defaultChecked className="h-5 w-5 rounded text-blue-500 focus:ring-blue-500 border-gray-300" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-700">Performance Reports</h4>
                  <p className="text-sm text-gray-500">Weekly performance summaries.</p>
                </div>
                <input type="checkbox" defaultChecked className="h-5 w-5 rounded text-blue-500 focus:ring-blue-500 border-gray-300" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-700">New School Alerts</h4>
                  <p className="text-sm text-gray-500">Notifications for new school registrations.</p>
                </div>
                <input type="checkbox" className="h-5 w-5 rounded text-blue-500 focus:ring-blue-500 border-gray-300" />
              </div>
            </div>
          </SettingsSection>
        </div>
        
        {/* Right Column */}
        <div>
          {/* System Settings Card */}
          <SettingsSection 
            title="System Settings" 
            subtitle="Configure system preferences and default options"
          >
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Default Language</label>
                <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Time Zone</label>
                <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                  <option>UTC-5 (Eastern Time)</option>
                  <option>UTC+0 (GMT)</option>
                  <option>UTC+8 (Pacific Time)</option>
                </select>
              </div>
              <div className="text-left pt-2">
                <button 
                  type="submit" 
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Save Settings
                </button>
              </div>
            </form>
          </SettingsSection>

          {/* Data Management Card */}
          <SettingsSection 
            title="Data Management" 
            subtitle="Export data and manage system backups"
          >
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Export Data</h4>
                <div className="flex flex-wrap gap-2">
                  <button className="border bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-lg text-sm hover:bg-gray-200">Export Student Data</button>
                  <button className="border bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-lg text-sm hover:bg-gray-200">Export School Reports</button>
                  <button className="border bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-lg text-sm hover:bg-gray-200">Export Analytics</button>
                </div>
              </div>border 
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Backup</h4>
                <button className="border! rounded-xl font-bold py-2 px-4 ">Create Backup</button>
                <p className="text-xs text-gray-500 mt-2">Last backup: March 15, 2024</p>
              </div>
            </div>
          </SettingsSection>
        </div>
      </div>
    </div>
  );
};
