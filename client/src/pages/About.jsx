import React from 'react';

const About = () => {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-8 text-gray-800'>🏡 About Real Estate Project</h1>
      {/* Title and Descriptions */}
      <div className='mb-12'>
        <h2 className='text-xl font-semibold mb-2 text-gray-800'>Our Mission</h2>
        <p className='text-gray-600'>
          Real Estate is dedicated to simplifying the process of finding your perfect home, whether you're buying, selling, or renting. Our mission is to empower individuals and families to navigate real estate transactions with confidence and ease.
        </p>
      </div>
      
      {/* Team Members */}
      <div className='mb-12'>
        <h2 className='text-xl font-semibold mb-2 text-gray-800'>Our Team</h2>
        <ul className='text-gray-600 list-disc pl-6'>
          <li>👨‍💼 Prasad Kachare</li>
          <li>👩‍💼 Anushka Phadatare</li>
          <li>👨‍💼 Umakant Shinde </li>
        </ul>
      </div>
      
      {/* Platform Features */}
      <div>
        <h2 className='text-xl font-semibold mb-2 text-gray-800'>Platform Features</h2>
        <ul className='text-gray-600 list-disc pl-6'>
          <li>🔒 Secure user registration</li>
          <li>🔍 Easy property search</li>
          <li>💼 User-controlled file management</li>
          <li>🛡️ Privacy-focused transactions</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
