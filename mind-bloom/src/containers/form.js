import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LogoNoText from '../components/LogoNoDescription';
import ButtonTernary from '../components/ButtonTernary';
import ButtonSecondary from '../components/ButtonSecondary';

const AuthForm = ({ isSignUp, onClose = () => {} }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onFinish = async (e) => {
    e.preventDefault();

    if (isSignUp && password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: username });
        toast.success('Sign up successful!');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success('Sign in successful!');
      }
      onClose(); // Close the modal on successful submission
      navigate('/');
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleLinkClick = (path) => {
    onClose(); // Close the modal
    navigate(path); // Navigate to the specified path
  };

  return (
    <div className="p-6">
      <form onSubmit={onFinish}>
        {isSignUp && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder='e.g. JohnDoe'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 text-m font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder='e.g. john.doe@hello.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-m font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {isSignUp && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
        )}
        <div className="flex items-center justify-between">
          <ButtonSecondary text={isSignUp ? 'Sign Up' : 'Sign In'} type='submit' />
        </div>
      </form>
      <div className="hidden md:flex space-x-4">
        <ButtonTernary text='Sign in with Google' onClick={() => {
          const provider = new GoogleAuthProvider();
          signInWithPopup(auth, provider)
            .then((result) => {
              toast.success('Sign in with Google successful!');
              onClose(); // Close the modal on successful submission
              navigate('/');
            })
            .catch((error) => {
              toast.error(error.message);
            });
        }} 
        />
      </div>
      <p className="mt-4 text-center text-gray-600">
        {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
        <span
          onClick={() => handleLinkClick(isSignUp ? '/signin' : '/signup')}
          className="text-blue-500 hover:text-blue-700 cursor-pointer">
          {isSignUp ? 'Sign In' : 'Sign Up'}
        </span>
      </p>
    </div>
  );
};

export default AuthForm;