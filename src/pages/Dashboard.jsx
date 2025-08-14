import React from 'react';
import StatCard from '../components/ui/StateCard';
import { EnrollmentChart } from '../components/charts/DashboardCharts';
import { dashboardStats, allStudentsData } from '../data/mockData';
import { FiUsers, FiBookOpen, FiBarChart, FiAward, FiMoreVertical } from 'react-icons/fi';
import { PerformancePieChart } from '../components/charts/AnalyticsCharts';

const icons = {
    users: <FiUsers size={24} className="text-accent-blue" />,
    book: <FiBookOpen size={24} className="text-accent-orange" />,
    chart: <FiBarChart size={24} className="text-accent-red" />,
    award: <FiAward size={24} className="text-accent-green" />,
}

const LeaderboardTable = () => (
  <div className="bg-white p-6 rounded-lg mt-6 shadow-xl border border-gray-200">
    <div className="flex justify-between items-center mb-4">
      <div>
        <h3 className="font-bold primary-color text-2xl">School Leaderboard - Top 10 Champions</h3>
        <p className="text-sm text-text-secondary">Our highest performing students this month with points and achievements.</p>
      </div>
      <button className="text-text-secondary">
          <FiMoreVertical />
      </button>
    </div>
    <div className="overflow-x-auto flex flex-wrap gap-4 justify-center sm:justify-start">
      {allStudentsData.slice(0, 5).map((student) => (
        <div key={student.rank} className="bg-white shadow-md border border-gray-300! w-[180px] rounded-xl p-2 py-4! flex flex-col gap-2">
            <div className="w-full flex flex-col justify-center items-center">
              <div className="rounded-full flex items-center justify-center w-[60px] h-[60px] border! border-gray-400 shadow font-extrabold">{student.avatar}</div>
              <span className='font-extrabold text-center truncate'>{student.name}</span>
            </div>
            <p className="text-center">{`Class ${student.class}`}</p>
            <div className='flex items-center justify-center'>
              <p className="text-center  max-w-[80px] bg-gray-300 font-bold py-1 px-2! rounded-2xl">{student.points} pts</p>
            </div>
            <p className="text-center bg-green-200 rounded-xl text-green-500 p-1 font-semibold">{`${student.accuracy}% accuracy`}</p>

            
            <button className="border w-full rounded-md border-gray-300 p-1 shadow-md">View 
              Profile</button>
        </div>
      ))}
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div>
      <h3 className='text-4xl primary-color font-bold'>Greenwood Elementary School</h3>
      <p className='mb-4'>Welcome back, School Admin! Here's your school's overview.</p>
        
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map(stat => (
          <StatCard 
            key={stat.title}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={icons[stat.icon]}
          />
          ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <EnrollmentChart />
        <PerformancePieChart/>
      </div>
        
      {/* Leaderboard */}
      <LeaderboardTable />

    </div>
  );
};

export default Dashboard;