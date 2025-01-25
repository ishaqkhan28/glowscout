// pages/index.tsx
import Head from 'next/head';
import Review from '@/app/spasingle/Reviews';
import { useState } from 'react';

const reviews = [
  { name: 'Ashley K.', text: 'It\'s a long established fact that glowscout is doing such a great job.', rating: 4 },
  { name: 'Client 2', text: 'It\'s a long established fact that glowscout is doing such a great job.', rating: 4 },
  { name: 'Client 3', text: 'It\'s a long established fact that glowscout is doing such a great job.', rating: 4 },
  { name: 'Client 4', text: 'It\'s a long established fact that glowscout is doing such a great job.', rating: 4 },
];

const Home: React.FC = () => {
  const [newReview, setNewReview] = useState('');
  const [newRating, setNewRating] = useState(0);

  const handleSubmit = () => {
    // Handle the review submission logic
    console.log(newReview, newRating);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-6xl text-center font-Raleway font-[300] mb-6">Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <Review key={index} name={review.name} text={review.text} rating={review.rating} />
        ))}
      </div>
      <button className="items-center mt-4 py-2 px-4 bg-[#351120] text-[#f8f8f8] rounded-full" onClick={() => console.log('View all reviews')}>View all</button>
      <div className="mt-8 p-4 border-2 border-[#351120] rounded-xl">
        <h2 className="text-3xl font-Raleway mb-4">Add your review</h2>
        <textarea
          className="w-full p-2 mb-4 border rounded"
          placeholder="Write your review here..."
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        />
        <div className="flex mb-4">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-8 h-8 cursor-pointer ${index < newRating ? 'text-yellow-500' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              onClick={() => setNewRating(index + 1)}
            >
              <path d="M9.049 2.927C9.245 2.297 9.903 2 10.512 2s1.267.297 1.463.927l1.008 3.118 3.265.047c.684.01 1.075.856.558 1.261l-2.634 2.009.986 3.142c.188.601-.514 1.107-1.043.713l-2.69-1.894-2.69 1.894c-.53.394-1.231-.112-1.043-.713l.986-3.142-2.634-2.009c-.517-.405-.126-1.251.558-1.261l3.265-.047 1.008-3.118z" />
            </svg>
          ))}
        </div>
        <button className="py-2 px-4 bg-[#351120] text-[#f8f8f8] rounded-full" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Home;