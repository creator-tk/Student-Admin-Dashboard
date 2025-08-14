// src/data/mockData.js

export const dashboardStats = [
    { title: 'TOTAL STUDENTS', value: '245', change: '+12%', icon: 'users' },
    { title: 'TOTAL CLASSES', value: '8', change: 'CBSE Board', icon: 'book' },
    { title: 'AVG. PERFORMANCE', value: '86.2%', change: '-5%', icon: 'chart' },
    { title: 'TOP PERFORMER', value: 'Ahan K.', details: '830 pts', icon: 'award' },
];

export const leaderboardData = [
    { rank: 1, name: 'Ahan Kumar', class: 8, points: 830, accuracy: 98, streak: 305, avatar: 'A' },
    { rank: 2, name: 'Flower Girl', class: 7, points: 295, accuracy: 94, streak: 45, avatar: 'F' },
    { rank: 3, name: 'Hvff', class: 6, points: 190, accuracy: 95, streak: 0, avatar: 'H' },
    { rank: 4, name: '12 June Child Test', class: 5, points: 165, accuracy: 92, streak: 0, avatar: 'J' },
    { rank: 5, name: 'Hcdff', class: 4, points: 160, accuracy: 101, streak: 30, avatar: 'H' },
    { rank: 6, name: 'Eva', class: 3, points: 145, accuracy: 90, streak: 294, avatar: 'E' },
];

export const allStudentsData = [...leaderboardData, 
    { rank: 7, name: 'Sophia Kim', class: 2, points: 138, accuracy: 88, streak: 207, avatar: 'S' },
    { rank: 8, name: 'James Wilson', class: 6, points: 132, accuracy: 80, streak: 243, avatar: 'J' },
    { rank: 9, name: 'Olivia Davis', class: 5, points: 128, accuracy: 91, streak: 22, avatar: 'O' },
    { rank: 10, name: 'Liam Garcia', class: 1, points: 120, accuracy: 85, streak: 202, avatar: 'L' },
];

export const enrollmentData = [
    { name: 'Class 1', students: 30 }, { name: 'Class 2', students: 28 },
    { name: 'Class 3', students: 25 }, { name: 'Class 4', students: 26 },
    { name: 'Class 5', students: 23 }, { name: 'Class 6', students: 25 },
    { name: 'Class 7', students: 29 }, { name: 'Class 8', students: 30 },
];

export const performanceDistributionData = [
    { name: 'Category A', 'Excellent': 40, 'Good': 24, 'Average': 20, 'Needs Improvement': 10 },
];

export const analyticsStats = [
    { title: 'Total Learning Hours', value: '2,847', change: '+12% from last month' },
    { title: 'Lessons Completed', value: '1,892', change: '+18% from last month' },
    { title: 'Average Session Time', value: '24 min', change: '+8% from last month' },
    { title: 'Active Students', value: '1,156', change: '+5% from last month' },
];

export const studentPerformanceDistribution = [
    { name: 'Excellent (85-100%)', value: 45 },
    { name: 'Good (70-84%)', value: 35 },
    { name: 'Needs Improvement (<70%)', value: 20 },
];

export const performanceBySkill = [
    { name: 'Vocabulary', performance: 82 }, { name: 'Grammar', performance: 78 },
    { name: 'Pronunciation', performance: 76 }, { name: 'Listening', performance: 85 },
    { name: 'Speaking', performance: 74 },
];

export const monthOverMonthImprovement = [
    { skill: 'Vocabulary', change: '+5%' }, { skill: 'Grammar', change: '+8%' },
    { skill: 'Pronunciation', change: '+12%' }, { skill: 'Listening', change: '+3%' },
    { skill: 'Speaking', change: '+15%' },
];

export const engagementTrends = [
    { name: 'Jan', activeStudents: 400, hours: 240 },
    { name: 'Feb', activeStudents: 300, hours: 221 },
    { name: 'Mar', activeStudents: 480, hours: 229 },
    { name: 'Apr', activeStudents: 390, hours: 200 },
    { name: 'May', activeStudents: 430, hours: 218 },
];