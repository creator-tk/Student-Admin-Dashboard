
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart } from 'recharts';
import { enrollmentData, performanceDistributionData } from '../../data/mockData';

export const EnrollmentChart = () => (
  <div className="bg-white p-6 rounded-lg shadow">
    <h3 className="font-bold text-text-primary text-2xl primary-color">Class-wise Student Enrollment</h3>
    <p className="text-sm text-text-secondary mb-4">Student distribution across different grades</p>
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={enrollmentData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Bar dataKey="students" fill="#8884d8" barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export const PerformanceDistributionChart = () => (
  <div className="bg-white p-6 rounded-lg shadow">
    <h3 className="font-semibold text-text-primary">Performance Distribution</h3>
    <p className="text-sm text-text-secondary mb-4">Overall accuracy breakdown across all students</p>
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <PieChart data={performanceDistributionData} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="name" tick={{ fontSize: 12, width: 120 }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Excellent" stackId="a" fill="#81C784" />
          <Bar dataKey="Good" stackId="a" fill="#FFB74D" />
          <Bar dataKey="Average" stackId="a" fill="#64B5F6" />
          <Bar dataKey="Needs Improvement" stackId="a" fill="#E57373" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
);