import React from 'react';
import { FiAward, FiFilter, FiDownload } from 'react-icons/fi';
import { leaderboardData } from '../data/mockData';
import { BiMedal, BiTrophy } from 'react-icons/bi';

const PodiumCard = ({ student, color, bgColor }) => (
    <div className={`text-white relative flex flex-col items-center rounded-t-xl w-[200px] bg-transparent`}>
			<div className=' w-full flex items-center justify-center bg-white! pb-6 border border-white'>
				<div className={` w-30 h-30 rounded-full flex items-center justify-center font-bold  text-white ${color}`}>
						<FiAward size={30}/>
				</div>
			</div>

				<div className={`flex flex-col justify-center w-full text-center overflow-hidden p-4 rounded-t-2xl min-h-[250px] ${bgColor}`}>
					<h3 className="font-bold text-2xl">{student.name}</h3>
					<p className="text-sm text-text-secondary">{`Class ${student.class}`}</p>
					<p className="text-2xl font-bold text-text-primary mt-2">{`${student.points} pts`}</p>
				</div>
    </div>
);

const Leaderboard = () => {
  const [topStudent, secondStudent, thirdStudent, ] = leaderboardData;

  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow ">
				<div className='flex items-center gap-2'>
					<BiTrophy size={30} fill='blue'/>
					<h2 className="text-4xl font-bold primary-color">School Leaderboard</h2>
				</div>
				
				<p className="text-text-secondary">Celebrating our top performers and encouraging healthy competition.</p>
      </div>

      {/* Champions Podium */}
      <div className="mb-8 shadow-md border border-gray-200 pb-2 rounded-xl overflow-hidden">
				<div className='text-center mb-12 bg-yellow-200 py-8 flex  flex-col items-center'>
					<div className='flex items-center gap-2 w-fit'>
						<BiMedal size={20} fill='blue'/><h3 className="text-3xl font-bold primary-color">
					Champions Podium</h3><BiMedal size={20} fill='blue'/>
					</div>

					<p>This month's top 3 achievers</p>
				</div>

        <div className='flex justify-center '>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end w-fit">
            <div className="order-2 scale-90 md:order-1 "><PodiumCard student={secondStudent} rank={2} color="bg-gray-400" bgColor="bg-gray-500 "/></div>
            <div className="order-1  md:order-2 translate-y-[-20px] "><PodiumCard student={topStudent} rank={1} color="bg-yellow-500" bgColor={"bg-amber-300"}/></div>
            <div className="order-3 scale-90 md:order-3  "><PodiumCard student={thirdStudent} rank={3} color="bg-orange-400" bgColor={"bg-amber-600"}/></div>
          </div>
        </div>
      </div>

			<div className='border border-gray-300 rounded-xl mb-4 w-full p-4 shadow-md grid grid-cols-[1fr_110px_130px_120px] gap-2'>
				<input type="text" disabled placeholder='Search Students' className='p-2 outline-1 rounded-md outline-gray-300 pl-12' />
				<select className='p-2 border rounded-md'><option className='truncate'>All Classes</option></select>
				<select className='p-2 border rounded-md'><option className='truncate'>This Month</option></select>
					<button className="flex justify-center items-center gap-2 text-sm border rounded-lg whitespace-nowrap truncate w-full"><FiFilter /> More Filters</button>
			</div>
        
        {/* Complete Rankings Table */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
					<div className="flex justify-between items-center mb-4">
						<div>
								<h3 className="font-semibold primary-color text-2xl">Complete Rankings</h3>
								<p className="text-sm text-text-secondary">All students ranked by points earned this month.</p>
						</div>
					</div>
					<div>
						{leaderboardData.map((student) => (
							<div key={student.rank} className={`bg-gray-100 border border-gray-300 mb-2 rounded-md flex justify-between hover:bg-gray-50 ${student.rank <= 3 && "bg-yellow-200!"}`}>
								<div className="px-6 py-4">
									<div className="flex items-center">
										<div className="w-10 h-10 border rounded-full bg-primary-color text-white flex items-center justify-center font-bold mr-4">{student.avatar}</div>
										<div>
											<p className="font-semibold">{student.name}</p>
											<p className="text-xs text-text-secondary">{`Class ${student.class}`}</p>
										</div>
									</div>
								</div>
								<div className='flex justify-center items-center mr-4'>
									<span className="px-6 text-text-primary font-extrabold">{student.points} <br /><span className='font-light'>points</span></span>
									<span className="px-6 font-semibold text-green-500">{`${student.accuracy}%`}</span>
									<button className="text-primary font-semibold hover:underline border p-2 rounded-xl">View Profile</button>
								</div>
							</div>
						))}
					</div>
        </div>
    </div>
  );
};

export default Leaderboard;