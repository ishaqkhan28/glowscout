// 'use client'
// import Card from '@/app/spa/Card';
// import { NextPage } from 'next';
// import Link from 'next/link';
// import { useState } from 'react';

// const Home: NextPage = () => {
//   const [goal, setGoal] = useState('2');
//   return (
//     <div className="border-y-2 border-top border-[#351120] bg-[#f8f8f8]">
//   <div className="container mx-auto p-4 ">
//     <h1 className="text-7xl font-Raleway text-[#351120] text-center mb-8">Salons & Spas</h1>
//     <p className="text-[#351120] text-2xl mb-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et risus faucibus.</p>
//     <div className="flex justify-center space-x-4 flex-wrap">
//         <div className="flex space-x-4 bg-[#F6E9CE99] p-4 rounded-full mb-4 ">
//             <select
//               value={goal}
//               onChange={(e) => setGoal(e.target.value)}
//               className="bg-gray-100 border w-[150px] h-[40px] rounded-full p-2 opacity-30 font-bold border-[#351120]"
//             >
//               <option value="" className="bg-[#351120]">Filters

//               </option>


//               {/* Add your goals here */}
//             </select>
//             <svg width="4" height="40" viewBox="0 0 4 40" fill="none" xmlns="http://www.w3.org/2000/svg">
// <rect width="4" height="40" rx="2" fill="#351120" fill-opacity="0.2"/>
// </svg>
// <div className="bg-gray-100 border w-[300px] h-[40px] rounded-full p-2 opacity-30 font-Raleway border-[#351120]">
//         <input
//           type="text"
//           placeholder="Please enter your location"
//           className="bg-gray-100 text-[#351120] w-full h-full outline-none px-2 "
//         />
//       </div>
//             <div className="flex">
//       <div className="bg-gray-100 border w-[400px] h-[40px] rounded-full p-2 opacity-30 font-Raleway border-[#351120]">
//         <input
//           type="text"
//           placeholder="Search by Treatment"
//           className="bg-gray-100 w-full h-full outline-none px-2 "
//         />
//       </div>
//       <button className="bg-[#351120] text-white px-10 py-1 mt-1 rounded-full absolute ml-[260px] ">
//         Search
//       </button>
//     </div>
//         </div>
//       </div>
//       <Link href="/spasingle">
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {salons.map((salon, index) => (
//         <Card price={''} key={index} {...salon} />
//       ))}
//     </div>
//       </Link>
//   </div>
//   </div>
//   )
// };

// export default Home;
'use client'
import Card from '@/app/spa/Card';
import { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';

const salons = [
  { title: 'Pure Tranquility', subtitle: 'Lorem Ipsum', imageUrl: '/images/elias-kipfer-YhCdQGtQfk4-unsplash.svg', label: 'Lorem Ipsum' },
  { title: 'Crystal Calm', subtitle: 'Lorem Ipsum', imageUrl: '/images/Mask group (5).svg', label: 'Lorem Ipsum' },
  { title: 'Radiant Serenity', subtitle: 'Lorem Ipsum', imageUrl: '/images/Mask group (6).svg', label: 'Lorem Ipsum' },
  { title: 'Eternal Bliss', subtitle: 'Lorem Ipsum', imageUrl: '/images/person-getting-micro-needling-beauty-treatment 1.svg', label: 'Lorem Ipsum' },
  { title: 'Heavenly Escape', subtitle: 'Lorem Ipsum', imageUrl: '/images/Mask group (6).svg', label: 'Lorem Ipsum' },
  { title: 'Thermage', subtitle: 'Lorem Ipsum', imageUrl: '/images/cute-woman-lying-procedure-rejuvenation-skin 1.svg', label: 'Lorem Ipsum' },
  { title: 'Pure Tranquility', subtitle: 'Lorem Ipsum', imageUrl: '/images/Mask group (5).svg', label: 'Lorem Ipsum' },
  { title: 'Crystal Calm', subtitle: 'Lorem Ipsum', imageUrl: '/images/elias-kipfer-YhCdQGtQfk4-unsplash.svg', label: 'Lorem Ipsum' },
  { title: 'Radiant Serenity', subtitle: 'Lorem Ipsum', imageUrl: '/images/person-getting-micro-needling-beauty-treatment 1.svg', label: 'Lorem Ipsum' },
  { title: 'Eternal Bliss', subtitle: 'Lorem Ipsum', imageUrl: '/images/elias-kipfer-YhCdQGtQfk4-unsplash.svg', label: 'Lorem Ipsum' },
  { title: 'Heavenly Escape', subtitle: 'Lorem Ipsum', imageUrl: '/images/Mask group (6).svg', label: 'Lorem Ipsum' },
  { title: 'Thermage', subtitle: 'Lorem Ipsum', imageUrl: '/images/Mask group (5).svg', label: 'Lorem Ipsum' },
  { title: 'Pure Tranquility', subtitle: 'Lorem Ipsum', imageUrl: '/images/Mask group (6).svg', label: 'Lorem Ipsum' },
  { title: 'Crystal Calm', subtitle: 'Lorem Ipsum', imageUrl: '/images/cute-woman-lying-procedure-rejuvenation-skin 1.svg', label: 'Lorem Ipsum' },
  { title: 'Radiant Serenity', subtitle: 'Lorem Ipsum', imageUrl: '/images/Mask group (5).svg', label: 'Lorem Ipsum' },
  { title: 'Eternal Bliss', subtitle: 'Lorem Ipsum', imageUrl: '/images/elias-kipfer-YhCdQGtQfk4-unsplash.svg', label: 'Lorem Ipsum' },
  { title: 'Heavenly Escape', subtitle: 'Lorem Ipsum', imageUrl: '/images/Mask group (5).svg', label: 'Lorem Ipsum' },
  { title: 'Thermage', subtitle: 'Lorem Ipsum', imageUrl: '/images/elias-kipfer-YhCdQGtQfk4-unsplash.svg', label: 'Lorem Ipsum' },
  { title: 'Heavenly Escape', subtitle: 'Lorem Ipsum', imageUrl: '/images/Mask group (6).svg', label: 'Lorem Ipsum' },
  { title: 'Thermage', subtitle: 'Lorem Ipsum', imageUrl: '/images/person-getting-micro-needling-beauty-treatment 1.svg', label: 'Lorem Ipsum' },

];

const Home: NextPage = () => {
  const [goal, setGoal] = useState('2');
  return (
    <div className="border-y-2 border-top border-[#351120] bg-[#f8f8f8]">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-Raleway text-[#351120] text-center mb-8">Salons & Spas</h1>
        <p className="text-[#351120] text-lg sm:text-2xl mb-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et risus faucibus.</p>

        {/* Filters Section */}
        <div className="flex justify-center space-x-4 flex-wrap mb-8">
          <div className="flex flex-wrap justify-center gap-4 bg-[#F6E9CE99] p-4 rounded-full mb-4 w-full sm:w-auto">
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="bg-gray-100 border w-full sm:w-[150px] h-[40px] rounded-full p-2 opacity-80 font-bold border-[#351120]"
            >
              <option value="">Filters</option>
              {/* Add your filter options here */}
            </select>

            <div className="w-full sm:w-[300px]">
              <input
                type="text"
                placeholder="Please enter your location"
                className="bg-gray-100 text-[#351120] w-full h-[40px] outline-none px-2 rounded-full"
              />
            </div>

            <div className="w-full sm:w-[400px] flex-grow">
              <input
                type="text"
                placeholder="Search by Treatment"
                className="bg-gray-100 w-full h-[40px] outline-none px-2 rounded-full"
              />
            </div>

            <button className="bg-[#351120] text-white px-8 py-2 rounded-full mt-2 sm:mt-0 w-full sm:w-auto">
              Search
            </button>
          </div>
        </div>
        {/* Salon Cards */ }
  <Link href="/spasingle">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {salons.map((salon, index) => (
        <Card price={''} key={index} {...salon} />
      ))}
    </div>
  </Link>
      </div >
    </div >
  );
};

export default Home;
