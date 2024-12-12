import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile } from 'firebase/auth';
import LogoNoText from '../components/LogoNoDescription';
import Green from './../pictures/Green.jpg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ButtonSecondary from '../components/ButtonSecondary';
import ButtonTernary from '../components/ButtonTernary';

const AuthForm = ({ isSignUp, onClose = () => {}, isModal = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
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
      onClose();
      navigate('/');
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success('Signed in with Google successfully!');
      navigate('/');
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleLinkClick = (path) => {
    onClose();
    navigate(path);
  }

  const isAuthPage = location.pathname === '/signup' || location.pathname === '/signin';

  return (
    <div className={`p-6 items-center justify-center ${isAuthPage ? 'min-h-screen flex flex-col justify-center' : ''}`} style={{ backgroundImage: `url(${Green})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className={`p-6 ${isAuthPage ? 'relative z-10 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-2xl w-full' : ''}`}>
          <div className='size-[10rem] mx-auto bg-inherit backdrop-blur-lg bg-opacity-10 rounded-xl shadow-sm'>
            <LogoNoText />
          </div>
        <h1 className={`p-6 text-3xl font-bold mb-4 text-center text-gray-200 ${isAuthPage ? 'text-gray-700' : ''}`}>{isSignUp ? 'Sign Up' : 'Login'}</h1>
        <form onSubmit={onFinish} className='mb-4'>
          {isSignUp && (
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor='username'>Username</label>
              <input
                type="text"
                name="username"
                placeholder='e.g. JohnDoe'
                value={username}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor='email'>Email</label>
            <input
              type="email"
              name="email"
              placeholder='e.g. john.doe@hello.com'
              value={email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor='password'>Password</label>
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
              <label className="block text-gray-700" htmlFor='confirmPassword'>Confirm Password</label>
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
        <div className="flex items-center justify-between">
          <ButtonSecondary text={isSignUp ? 'Sign Up' : 'Sign In'} type='submit' />
        </div>
        </form>
        <div className="flex items-center justify-between mb-4">
          <ButtonTernary text={'Sign in with Google'} onClick={{handleGoogleSignIn}} />
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
    </div>
  );
};

export default AuthForm;