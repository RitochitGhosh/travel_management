import React from 'react';

const TestimonialCard = ({ imgSrc, name, position, text } : any ) => {
  return (
    <div className="relative w-[360px] h-auto rounded-xl p-6 shadow-lg overflow-hidden bg-white">
      <div className="flex items-center mb-4">
        <img src={imgSrc} alt={name} className="w-14 h-14 rounded-full mr-4" />
        <div>
          <div className="text-lg font-semibold text-black">{name}</div>
          <div className="text-sm text-gray-500">{position}</div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-[-10px] left-[-10px] text-5xl text-gray-200">“</div>
        <div className="text-gray-700 ml-6">{text}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;