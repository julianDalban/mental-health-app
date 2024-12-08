import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonSecondary from "../components/ButtonSecondary";
import ButtonTernary from "../components/ButtonTernary";

const Error = () => {
  const navigate = useNavigate();

  return (
  <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div className="text-center">
      <p className="text-base font-semibold text-indigo-600">404</p>
      <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Page not found</h1>
      <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
      <div className="mt-12 flex items-center justify-center gap-x-6">
        <ButtonSecondary text={'Go back home'} onClick={() => navigate('/')} />
        <ButtonTernary text={'Contact Support'} onClick={() => navigate('/services')} />
      </div>
    </div>
  </main>

  );
};

export default Error;