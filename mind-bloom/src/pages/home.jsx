import React from 'react';
import { Link } from 'react-router-dom';
import brainIcon from "./../pictures/new_logo_face_brain.png";
import Green from './../pictures/Green.jpg';
import { useNavigate } from 'react-router-dom';
import ButtonMain from '../components/ButtonMain';

const Home = () => {
  const navigate = useNavigate();

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
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">You may ask, why green?</h2>
          <p className="text-gray-700 mb-4">
            The color green is often associated with tranquility, calmness, and relaxation. It is known to have a soothing effect on the mind and body, which can help reduce stress and anxiety. Green is also linked to nature and the outdoors, promoting a sense of peace and well-being. Incorporating green into your environment can create a more serene and balanced atmosphere, contributing positively to your mental health.
          </p>
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
        <ButtonMain text={'Get Started'} onClick={() => navigate('/services')}/>
        </div>
      </div>
    </div>
  );
};

export default Home;