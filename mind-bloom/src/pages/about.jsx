import React, { useState, useEffect } from 'react';

const About = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      if (quote) return; // Check if the quote has already been fetched

      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
          headers: {
            'X-Api-Key': '9LDqAagcTeAKXenyLe+0BA==iw89IECzugjM86lp',
          },
        });
        const data = await response.json();
        if (data.length > 0) {
          setQuote(data[0].quote);
          setAuthor(data[0].author);
        }
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };

    fetchQuote();
  }, [quote]); // Add quote as a dependency to ensure it only runs once

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl">
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
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Why Choose Mind Bloom?</h2>
          <p className="text-gray-700">
            At Mind Bloom, we believe that mental health is just as important as physical health. Our app provides a safe and supportive environment for you to explore and improve your mental well-being. Join our community and take the first step towards a healthier, happier you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
