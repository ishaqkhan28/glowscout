'use client'
import TreatmentCard from '@/app/treatment/TreatmentsCard';
import { useState } from 'react';
import Link from 'next/link';
const treatments = [
  { title: 'Botox', description: 'Lorem Ipsum', imageSrc: '/images/Mask group (3).svg', label: 'Lorem Ipsum' },
  { title: 'Thermage', description: 'Lorem Ipsum', imageSrc: '/images/Mask group (2).svg', label: 'Lorem Ipsum' },
  { title: 'Chemical Peels', description: 'Lorem Ipsum', imageSrc: '/images/woman-having-facial-treatment 1.svg', label: 'Lorem Ipsum' },
  { title: 'Laser Resurfacing', description: 'Lorem Ipsum', imageSrc: '/images/Mask group.svg', label: 'Lorem Ipsum' },
  { title: 'Chemical Peels', description: 'Lorem Ipsum', imageSrc: '/images/woman-having-facial-treatment 1.svg', label: 'Lorem Ipsum' },
  { title: 'Laser Resurfacing', description: 'Lorem Ipsum', imageSrc: '/images/Mask group.svg', label: 'Lorem Ipsum' },
  { title: 'Botox', description: 'Lorem Ipsum', imageSrc: '/images/Mask group (3).svg', label: 'Lorem Ipsum' },
  { title: 'Thermage', description: 'Lorem Ipsum', imageSrc: '/images/Mask group (2).svg', label: 'Lorem Ipsum' },
  { title: 'Botox', description: 'Lorem Ipsum', imageSrc: '/images/Mask group (3).svg', label: 'Lorem Ipsum' },
  { title: 'Thermage', description: 'Lorem Ipsum', imageSrc: '/images/Mask group (2).svg', label: 'Lorem Ipsum' },
  { title: 'Chemical Peels', description: 'Lorem Ipsum', imageSrc: '/images/woman-having-facial-treatment 1.svg', label: 'Lorem Ipsum' },
  { title: 'Laser Resurfacing', description: 'Lorem Ipsum', imageSrc: '/images/Mask group.svg', label: 'Lorem Ipsum' },
  { title: 'Chemical Peels', description: 'Lorem Ipsum', imageSrc: '/images/woman-having-facial-treatment 1.svg', label: 'Lorem Ipsum' },
  { title: 'Laser Resurfacing', description: 'Lorem Ipsum', imageSrc: '/images/Mask group.svg', label: 'Lorem Ipsum' },
  { title: 'Botox', description: 'Lorem Ipsum', imageSrc: '/images/Mask group (3).svg', label: 'Lorem Ipsum' },
  { title: 'Thermage', description: 'Lorem Ipsum', imageSrc: '/images/Mask group (2).svg', label: 'Lorem Ipsum' },
  { title: 'Botox', description: 'Lorem Ipsum', imageSrc: '/images/Mask group (3).svg', label: 'Lorem Ipsum' },
  { title: 'Thermage', description: 'Lorem Ipsum', imageSrc: '/images/Mask group (2).svg', label: 'Lorem Ipsum' },
  { title: 'Chemical Peels', description: 'Lorem Ipsum', imageSrc: '/images/woman-having-facial-treatment 1.svg', label: 'Lorem Ipsum' },
  { title: 'Laser Resurfacing', description: 'Lorem Ipsum', imageSrc: '/images/Mask group.svg', label: 'Lorem Ipsum' },
  // Add more treatments as needed
];

const Treatments = () => {
  const [filter, setfilter] = useState('2');
  return (
    <div className="border-y-2 border-top bg-[#f8f8f8] border-[#351120]">
    <div className="container mx-auto py-8 bg-[#f8f8f8]">
      <h1 className="sm:text-7xl text-3xl font-Raleway text-[#351120] text-center mb-8">Treatments</h1>
      <div className="mb-8">
        <p className="text-[#351120] text-2xl mb-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        {/* Filters Section */}
        <div className="flex justify-center space-x-4 flex-wrap mb-8">
          <div className="flex flex-wrap justify-center gap-4 bg-[#F6E9CE99] p-4 rounded-full mb-4 w-full sm:w-auto">
            <select
              value={filter}
              onChange={(e) => setfilter(e.target.value)}
              className="bg-gray-100 border w-full sm:w-[150px] h-[40px] rounded-full p-2 opacity-80 font-bold border-[#351120]"
            >
              <option value="">Filters</option>
              {/* Add your filter options here */}
            </select>
            <svg width="4" height="40" viewBox="0 0 4 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="4" height="40" rx="2" fill="#351120" fill-opacity="0.2"/>
</svg>
<Link href="/comparetreatments"><button className='border-2 bg-[#351120] text-[#FEF5E3] rounded-full p-2 px-6 gap-4'>Compare Treatments</button></Link>

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {treatments.map((treatment, index) => (
          <TreatmentCard
            key={index}
            title={treatment.title}
            description={treatment.description}
            imageSrc={treatment.imageSrc}
            label={treatment.label}
          />
        ))}
      </div>
    </div>
    </div>
</div>
  );
};

export default Treatments;