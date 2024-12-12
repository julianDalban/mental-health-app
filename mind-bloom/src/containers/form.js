import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile } from 'firebase/auth';
import LogoNoText from '../components/LogoNoDescription';
import Green from './../pictures/Green.jpg';

const AuthForm = ({ isSignUp }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'confirmPassword') setConfirmPassword(value);
  };

  const onFinish = async (e) => {
    e.preventDefault();

    if (isSignUp && password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Handle form submission logic here
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center py-12" style={{ backgroundImage: `url(${Green})` }}>
      <div className="relative z-10 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-center mb-4">
          <LogoNoText />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-center">{isSignUp ? 'Sign Up' : 'Login'}</h1>
        <form onSubmit={onFinish}>
          {isSignUp && (
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          {isSignUp && (
            <div className="mb-4">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
          )}
          <button type="submit" className="w-full bg-emerald-500 text-white p-2 rounded-lg hover:bg-emerald-600 transition duration-300">
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>
        <div className="mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-base font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Sign in with Google
          </button>
        </div>
        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member? <Link to={isSignUp ? '/signin' : '/signup'} className="font-semibold text-indigo-600 hover:text-indigo-500">{isSignUp ? 'Sign In' : 'Sign Up'}</Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;