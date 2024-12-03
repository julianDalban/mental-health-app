import React from "react";
import Logo from './Logo';
import ButtonMain from "./ButtonMain";

function Navbar() {
  return (
    <nav className="bg-green-400 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="justify-left"><Logo /></div>
          <div className="hidden md:flex space-x-4">
            <ButtonMain text={'Home'}/>
            <ButtonMain text={'About'}/>
            <ButtonMain text={'Services'}/>
            <ButtonMain text={'Contact'}/>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;