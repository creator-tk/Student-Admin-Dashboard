import React from 'react';
import { allStudentsData } from '../data/mockData';
import { FiSearch, FiDownload } from 'react-icons/fi';

const Students = () => {
	return (
		<div className="bg-white p-6 rounded-lg shadow max-w-screen">
			<div className="flex justify-between items-center gap-4 mb-4 md:flex-row flex-col">
						<div>
							<h2 className="text-xl font-bold text-text-primary">All Students</h2>
							<p className="text-text-secondary">Complete student directory with performance details.</p>
					</div>
					<div className="flex items-center gap-2">
							<div className="relative">
									<FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
									<input type="text" placeholder="Search students..." className="pl-10 pr-4 py-2 border rounded-lg" />
							</div>
							<button className="flex items-center gap-2 px-4 py-2 text-sm bg-primary text-white rounded-lg"><FiDownload /> Export All</button>
					</div>
			</div>
			<table className=" text-sm text-left text-gray-500 overflow-x-auto ">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50">
						<tr>
								<th className="px-6 py-3">Student Name</th>
								<th className="px-6 py-3">Class</th>
								<th className="px-6 py-3">Total Points</th>
								<th className="px-6 py-3">Overall Accuracy</th>
								<th className="px-6 py-3">Current Streak</th>
								<th className="px-6 py-3">Actions</th>
						</tr>
				</thead>
				<tbody>
					{allStudentsData.map((student) => (
						<tr key={student.rank} className="bg-white border-b hover:bg-gray-50">
							<td className="px-6 py-4">
									<div className="flex items-center">
											<div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mr-4">{student.avatar}</div>
											<p className="font-semibold">{student.name}</p>
									</div>
							</td>
							<td className="px-6 py-4">{`Class ${student.class}`}</td>
							<td className="px-6 py-4 font-semibold text-text-primary">{`${student.points} pts`}</td>
							<td className="px-6 py-4 font-semibold text-green-500">{`${student.accuracy}%`}</td>
							<td className="px-6 py-4">{`${student.streak} days`}</td>
							<td className="px-6 py-4"><button className="text-primary font-semibold hover:underline">View Details</button></td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="text-center mt-6">
					<button className="bg-gray-200 text-text-secondary font-semibold py-2 px-6 rounded-lg">Load More Students</button>
			</div>
		</div>
	)
}

export default Students;