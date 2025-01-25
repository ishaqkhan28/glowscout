import React from 'react';
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center py-20 sm:py-28 bg-[#FEF5E3] rounded-lg px-4">
      <h1 className="text-3xl sm:text-5xl font-Raleway mb-8 sm:mb-12 text-center">
        Clients Testimonials
      </h1>
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
        {/* Left Arrow SVG */}
        <svg
          className="items-center mb-4 sm:mb-0"
          width="17"
          height="30"
          viewBox="0 0 17 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 17C4.10457 17 5 16.1046 5 15C5 13.8954 4.10457 13 3 13L3 17ZM0.585786 13.5858C-0.195262 14.3668 -0.195262 15.6332 0.585786 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857866C15.3611 0.0768167 14.0948 0.0768166 13.3137 0.857865L0.585786 13.5858ZM3 13L2 13L2 17L3 17L3 13Z"
            fill="#351120"
          />
        </svg>

        {/* Testimonial Image */}
        <Image
          className="rounded-xl mb-4 sm:mb-0 flex"
          src={"/images/Group 4042.svg"}
          alt={'client'}
          width={700}
          height={700}
        />

        {/* Right Arrow SVG */}
        <svg
          className="items-center mb-4 sm:mb-0"
          width="17"
          height="30"
          viewBox="0 0 17 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 13C12.8954 13 12 13.8954 12 15C12 16.1046 12.8954 17 14 17L14 13ZM16.4142 16.4142C17.1953 15.6332 17.1953 14.3668 16.4142 13.5858L3.68629 0.857863C2.90524 0.0768146 1.63891 0.0768145 0.857866 0.857863C0.0768168 1.63891 0.0768167 2.90524 0.857865 3.68629L12.1716 15L0.857863 26.3137C0.0768145 27.0948 0.0768144 28.3611 0.857863 29.1421C1.63891 29.9232 2.90524 29.9232 3.68629 29.1421L16.4142 16.4142ZM14 17L15 17L15 13L14 13L14 17Z"
            fill="#351120"
          />
        </svg>
      </div>
    </div>
  );
};

export default Testimonial;
