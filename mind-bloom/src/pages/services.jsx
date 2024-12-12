import React from 'react';
import Green from './../pictures/Green.jpg';
import therapy from './../pictures/therapy.jpeg';
import ButtonTernary from '../components/ButtonTernary';

const Services = () => {
  const services = [
    {
      title: 'Therapy',
      description: 'Access one-on-one therapy with a licensed mental health professional to discuss anxiety, depression, relationship issues, and more. Sessions are available in-person or virtually to fit your schedule.',
      link: 'https://www.findoctave.com/therapists?', // Octave therapy
    },
    {
      title: 'Counseling',
      description: 'Professional counseling services to help you navigate through life’s challenges.',
      link: 'https://www.betterhelp.com/get-started/?go=true&utm_content=136566704138&utm_source=AdWords&utm_medium=Search_PPC_c&utm_term=free+counseling+services_b&network=g&placement=&target=&matchtype=b&utm_campaign=16806402951&ad_type=text&adposition=&kwd_id=kwd-179620718&gad_source=1&gclid=Cj0KCQiApNW6BhD5ARIsACmEbkVd_pNpmhon0csmn6sFFVABspOEwmN_G-8ZxXyo8Us4NgIbsNua8sYaAqXCEALw_wcB&not_found=1&gor=start', // Better help 
    },
    {
      title: 'Support Groups',
      description: 'Join support groups to connect with others who are experiencing similar challenges.',
      link: 'https://www.psychologytoday.com/us/groups', // psychology today
    },
    {
      title: 'Online Diagnostic Assessments',
      description: 'Self-assessment tools to help users gauge their mental health status.',
      link: 'https://www.clinical-partners.co.uk/online-tests',
    }
  ];

  const handleGetHelpClick = () => {
    window.location.href = 'https://988lifeline.org/';
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center py-12" style={{ backgroundImage: `url(${Green})` }}>
      <div className="relative z-10 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">Mental Health Services</h1>
        <p className="text-gray-700 mb-6 text-center">
          Explore our range of popular mental health services designed to support your well-being.
        </p>
        <img src={therapy} alt="Therapy" className="mb-6 rounded-lg shadow-lg w-1/2 mx-auto" />
        <div>
          {services.map((service, index) => (
            <div key={index} className="mb-4">
              <h2 className="text-2xl font-semibold">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
              <a href={service.link} className="text-blue-500 hover:text-blue-700 cursor-pointer" target="_blank" rel="noopener noreferrer">
                Learn more
              </a>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center items-center justify-center content-center">
          <h2 className="text-2xl font-semibold text-center text-red-500">Crisis Intervention</h2>
          <p className="text-red-500 text-center">
            Immediate assistance for individuals in crisis situations.
          </p>
          <div className='flex justify-center'><ButtonTernary text={'Get help'} onClick={handleGetHelpClick} /></div>
        </div>
      </div>
    </div>
  );
};

export default Services;