import React from 'react';

const FeatureCard = ({ title, description, icon }) => (
  <div>
    <div className="bg-[#27282A] text-white p-6 m-10 rounded-xl flex flex-col gap-2">
    <div className="text-white bg-purple-600 w-10 flex items-center justify-center p-1 rounded-full text-3xl">{icon}</div>
    <h3 className="text-xl pt-5 font-semibold">{title}</h3>
    <p className="text-sm text-gray-400">{description}</p>
  </div>
  </div>
);

export default FeatureCard;
