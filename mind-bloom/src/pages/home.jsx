import React from 'react';
import { Link } from 'react-router-dom';
import brainIcon from "./../pictures/new_logo_face_brain.png";
import Green from './../pictures/Green.jpg';

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center py-12" style={{ backgroundImage: `url(${Green})` }}>
      <div className="relative z-10 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-2xl w-full">
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
          <Link to="/services" className="visible border-1 font-serif border-double border-slate-100 px-5 py-1 rounded-full shadow-lg transition 
      ease-in-out delay-150 bg-emerald-500 hover:-translate-y-1 hover:scale-110 
      hover:bg-teal-500 duration-300 mb-8">
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
          <Link to="/services" className="visible border-1 font-serif border-double border-slate-100 px-5 py-1 rounded-full shadow-lg transition 
      ease-in-out delay-150 bg-emerald-500 hover:-translate-y-1 hover:scale-110 
      hover:bg-teal-500 duration-300">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;