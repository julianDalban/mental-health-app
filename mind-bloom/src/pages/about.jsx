import React from 'react';
import Green from './../pictures/Green.jpg';

const About = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center py-12" style={{ backgroundImage: `url(${Green})` }}>
      <div className="relative z-10 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">About Us</h1>
        <p className="text-gray-700 mb-8 text-center">
          Welcome to our website! We are dedicated to providing the best services and resources for mental health and wellness.
        </p>
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            Our mission is to support individuals on their journey to better mental health by providing comprehensive resources and services.
          </p>
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            If you have any questions or need further information, please feel free to contact us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
