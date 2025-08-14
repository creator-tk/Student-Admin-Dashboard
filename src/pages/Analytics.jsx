import React from 'react';
import StatCard from '../components/ui/StateCard';
import { PerformancePieChart, SkillPerformanceChart, EngagementTrendsChart } from '../components/charts/AnalyticsCharts';
import { analyticsStats, monthOverMonthImprovement } from '../data/mockData';
import {FiTrendingUp } from 'react-icons/fi';

const Analytics = () => {
    return (
      <div>
        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {analyticsStats.map((stat) => (
            <StatCard 
                key={stat.title}
                title={stat.title}
                value={stat.value}
                change={stat.change}
            />
          ))}
        </div>

        {/* Performance Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 rounded-xl">
          <div className="lg:col-span-1 shadow-md border border-gray-300 rounded-xl"><PerformancePieChart /></div>
          <div className="lg:col-span-2 shadow-md border border-gray-300 rounded-xl">
            <div>
              <SkillPerformanceChart />
            </div>
            <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-text-primary mb-4">Month-over-Month Improvement</h3>
              <div className='grid grid-cols-2 gap-4'>
                {monthOverMonthImprovement.map(item => (
                    <div key={item.skill} className="flex justify-between items-center p-3 border border-gray-300 rounded-xl shadow-md">
                      <span className="text-text-secondary">{item.skill}</span>
                      <span className="font-semibold text-green-500 flex items-center">
                          <FiTrendingUp className="mr-1"/>
                          {item.change}
                      </span>
                    </div>
                ))}
              </div>

            </div>
          </div>
        </div>
        
          {/* Improvement & Engagement */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2"><EngagementTrendsChart /></div>
        </div>
      </div>
    );
};

export default Analytics;