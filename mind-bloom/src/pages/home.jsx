import React from 'react';
import { Link } from 'react-router-dom';
import brainIcon from "./../pictures/new_logo_face_brain.png";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">Welcome to Mind Bloom</h1>
        <p className="text-gray-700 mb-4 text-center">
          Mind Bloom is your go-to app for mental health and wellness. Explore our services and resources to help you on your journey to better mental health.
        </p>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Our Features</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Personalized mental health resources</li>
            <li>Guided meditation and mindfulness exercises</li>
            <li>Community support and forums</li>
            <li>Professional counseling and therapy sessions</li>
          </ul>
          <Link to="/services" className="text-blue-500 hover:underline">
            Explore Our Services
          </Link>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Why Choose Mind Bloom?</h2>
          <p className="text-gray-700 mb-4">
            At Mind Bloom, we believe in providing comprehensive mental health support tailored to your needs. Our platform offers a variety of tools and resources to help you manage stress, improve your mental well-being, and connect with others who understand your journey.
          </p>
          <div className="flex justify-center">
            <img src={brainIcon} alt="Mental Health" className="rounded-lg shadow-lg mb-4" style={{ width: '200px', height: 'auto' }} />
          </div>
        </div>
        <div className="flex justify-center">
          <Link to="/signup" className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;