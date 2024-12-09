<<<<<<< HEAD
import React from 'react';

const Services = () => {
  const services = [
    {
        title: 'Octave Therapy',
        description: 'Search for in person or virtual therapy sessions with a licensed therapist at locations near you.',
        link: 'https://www.findoctave.com/therapists?', // Octave therapy
      },
    {
      title: 'Counseling',
      description: 'Professional counseling services to help you navigate through life’s challenges.',
      link: 'https://www.betterhelp.com/get-started/?go=true&utm_content=136566704138&utm_source=AdWords&utm_medium=Search_PPC_c&utm_term=free+counseling+services_b&network=g&placement=&target=&matchtype=b&utm_campaign=16806402951&ad_type=text&adposition=&kwd_id=kwd-179620718&gad_source=1&gclid=Cj0KCQiApNW6BhD5ARIsACmEbkVd_pNpmhon0csmn6sFFVABspOEwmN_G-8ZxXyo8Us4NgIbsNua8sYaAqXCEALw_wcB&not_found=1&gor=start', // Better help 
    },
    {
      title: 'Therapy',
      description: 'Various therapy options including cognitive-behavioral therapy, art therapy, and more.',
      link: 'https://www.example.com/therapy', // Replace with actual link
    },
    {
      title: 'Support Groups',
      description: 'Join support groups to connect with others who are experiencing similar challenges.',
      link: 'https://www.example.com/support-groups', // Replace with actual link
    },
    {
      title: 'Crisis Intervention',
      description: 'Immediate assistance for individuals in crisis situations.',
      link: 'https://www.example.com/crisis-intervention', // Replace with actual link
    },
    {
      title: 'Mindfulness Training',
      description: 'Learn mindfulness techniques to help manage stress and improve mental well-being.',
      link: 'https://www.example.com/mindfulness-training', // Replace with actual link
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">Mental Health Services</h1>
        <p className="text-gray-700 mb-4">
          Explore our range of mental health services designed to support your well-being.
        </p>
        <div>
          {services.map((service, index) => (
            <div key={index} className="mb-4">
              <h2 className="text-2xl font-semibold">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
              <a href={service.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
=======
const Services = () => {
  return (
    <div>
      <h1>Testing page</h1>
>>>>>>> 494b93c0b53013a4424140687f1a1e278061ce67
    </div>
  );
};

export default Services;