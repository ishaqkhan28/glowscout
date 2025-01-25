// components/Review.tsx
import React from 'react';

interface ReviewProps {
  name: string;
  text: string;
  rating: number;
}

const Review: React.FC<ReviewProps> = ({ name, text, rating }) => {
  return (
    <div className="p-4 ">
      <h3 className="text-4xl font-semibold mb-2">{name}</h3>
      <p className="mb-4">{text}</p>
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927C9.245 2.297 9.903 2 10.512 2s1.267.297 1.463.927l1.008 3.118 3.265.047c.684.01 1.075.856.558 1.261l-2.634 2.009.986 3.142c.188.601-.514 1.107-1.043.713l-2.69-1.894-2.69 1.894c-.53.394-1.231-.112-1.043-.713l.986-3.142-2.634-2.009c-.517-.405-.126-1.251.558-1.261l3.265-.047 1.008-3.118z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default Review;