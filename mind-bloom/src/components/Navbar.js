import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from '../config/firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import Logo from './Logo';
import ButtonMain from "./ButtonMain";

function Navbar() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (!confirmed) {
        return;
    }

    try {
        await signOut(auth);
        alert("You have been logged out.");
        navigate('/');
    } catch (err) {
        console.error("Error logging out: ", err);
        alert("Error logging out: " + err.message);
    }
  };

  return (
    <nav className="bg-green-400 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="justify-left"><Logo /></div>
          <div className="hidden md:flex space-x-4">
            <ButtonMain text={'Home'} onClick={() => navigate('/')}/>
            <ButtonMain text={'About'} onClick={() => navigate('/about')}/>
            <ButtonMain text={'Services'} onClick={() => navigate('/services')}/>
            <ButtonMain text={'Contact'} onClick={() => navigate('/contact')}/>
            {isAuthenticated &&(
              <ButtonMain text={'Journal'} onClick={() => navigate('/journal')}/>
            )}
            {isAuthenticated ? (
              <ButtonMain text={'Logout'} onClick={handleLogout}/>
            ) : (
              <ButtonMain text={'Login'} onClick={() => navigate('/signin')}/>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;