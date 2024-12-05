import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-4">Welcome to Mind Bloom</h1>
        <p className="text-gray-700 mb-4">
          Mind Bloom is your go-to app for mental health and wellness. Explore our services and resources to help you on your journey to better mental health.
        </p>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Our Features</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Personalized mental health resources</li>
            <li>Guided meditation and mindfulness exercises</li>
            <li>Community support and forums</li>
            <li>Professional counseling and therapy sessions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;