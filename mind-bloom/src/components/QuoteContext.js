import React, { createContext, useState, useEffect, useMemo }  from "react";
export const QuoteContext = createContext();
let quoteData = null;
export const QuoteProvider = ({ children }) => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    let API_KEY = process.env.REACT_APP_QUOTES_API_KEY;
    useEffect(() => {
        const fetchQuote = async () => {
          try {
            const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational', {
              headers: {
                'X-Api-Key': API_KEY,
              },
            });
            const data = await response.json();
            if (data.length > 0) {
              setQuote(data[0].quote);
              setAuthor(data[0].author);
              console.log(data); 
            }
          } catch (error) {
            console.error('Error fetching quote:', error);
          }
        };
    
        if (!quoteData) {
            fetchQuote();
        } else {
            setQuote(quoteData.quote);
            setAuthor(quoteData.author);
        }
      }, []);
      const value = useMemo(() => ({ quote, author }), [quote, author]);
    return (
        <QuoteContext.Provider value={value}>
            {children}
        </QuoteContext.Provider>
    );
};