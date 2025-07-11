import React from 'react';
import FeatureCard from './FeatureCard';
import { IoRocketSharp } from "react-icons/io5";
import { TbFileUpload } from "react-icons/tb";

const features = [
  { title: 'Upload Brief', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit!' , icon: <TbFileUpload /> },
  { title: 'Generate Designs', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit!', icon: <TbFileUpload/> },
  { title: 'Refine Creation', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit!', icon: <IoRocketSharp /> },
];

const FeaturesGrid = () => (
  <div className='pl-10'>
    <div className='w-3xl'>
        <h3 className="text-4xl text-left pl-10 font-semibold mb-6 ">
          Unleash Your <span className="text-purple-500">Creativity</span>
        </h3>
        <p className='pl-10 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium magnam at beatae labore, corporis fuga reiciendis. Asperiores commodi fugit quibusdam.</p>
    </div>
        
    <div className="grid md:grid-cols-3 gap-2">
    {features.map((f, i) => <FeatureCard key={i} {...f} />)}
  </div>
  </div>
);

export default FeaturesGrid;
