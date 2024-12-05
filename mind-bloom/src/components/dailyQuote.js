import React, { useState, useEffect } from 'react';

const DailyQuote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
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
  }, []);

  return (
    <div className="mb-8">
      {quote && (
        <>
          <p className="text-gray-700 italic mb-2">"{quote}"</p>
          {author && <p className="text-gray-700 text-right">- {author}</p>}
        </>
      )}
    </div>
  );
};

export default DailyQuote;
