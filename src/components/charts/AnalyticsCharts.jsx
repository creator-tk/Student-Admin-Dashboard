import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { performanceBySkill, studentPerformanceDistribution, engagementTrends } from '../../data/mockData';

const COLORS = ['#81C784', '#FFB74D', '#E57373'];

export const PerformancePieChart = () => (
  <div className="bg-white p-6 rounded-lg shadow h-full">
    <h3 className="font-semibold text-text-primary">Student Performance Distribution</h3>
    <p className="text-sm text-text-secondary mb-4">Overall accuracy breakdown</p>
    <div style={{ width: '100%', height: 250 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={studentPerformanceDistribution}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
          >
            {studentPerformanceDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
      </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
);


export const SkillPerformanceChart = () => (
    <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-semibold text-text-primary">Average Performance by Skill Area</h3>
         <p className="text-sm text-text-secondary mb-4">Individual skill performance metrics</p>
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <BarChart data={performanceBySkill} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis unit="%" tick={{ fontSize: 12 }}/>
                    <Tooltip />
                    <Bar dataKey="performance" fill="#4A90E2" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
);

export const EngagementTrendsChart = () => (
     <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-semibold text-text-primary">Student Engagement Trends</h3>
         <p className="text-sm text-text-secondary mb-4">Monthly engagement patterns and learning time</p>
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <BarChart data={engagementTrends} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="activeStudents" fill="#4A90E2" name="Active Students" />
                    <Bar dataKey="hours" fill="#50E3C2" name="Learning Hours"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
)