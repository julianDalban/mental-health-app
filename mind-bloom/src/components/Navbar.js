import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../config/firebase';
import ButtonMain from "./ButtonMain";
import { showConfirmationDialog } from "./ConfirmationDialog";
import Logo from './Logo';
import TextType from "./TextType";
import { QuoteContext } from "./QuoteContext";

function Navbar({ openModal}) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { quote, author } = useContext(QuoteContext);

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
    try {
        await signOut(auth);
        toast.success("You have been logged out.");
        navigate('/');
    } catch (err) {
        console.error("Error logging out: ", err);
        toast.error("Error logging out: " + err.message);
    }
  };

  const confirmLogout = () => {
    showConfirmationDialog('Are you sure you want to log out?', handleLogout);
  };

  console.log('quote:\n' + quote, author);

  return (
    <nav className="bg-green-400 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="justify-left"><Logo /></div>
          <TextType text={quote} author={author} />
          <div className="hidden md:flex space-x-4">
            <ButtonMain text={'Home'} onClick={() => navigate('/')}/>
            <ButtonMain text={'About'} onClick={() => navigate('/about')}/>
            <ButtonMain text={'Services'} onClick={() => navigate('/services')}/>
            {isAuthenticated &&(
              <ButtonMain text={'Journal'} onClick={() => navigate('/journal')}/>
            )}
            {isAuthenticated ? (
              <ButtonMain text={'Logout'} onClick={confirmLogout}/>
            ) : (
              <ButtonMain text={'Login'} onClick={openModal}/>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;