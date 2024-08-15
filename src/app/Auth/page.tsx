'use client';

import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import { useState } from 'react';

const Auth: React.FC = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const openSignUp = () => {
    setShowSignUp(true);
    setShowSignIn(false);
  };

  const openSignIn = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  const closePopUp = () => {
    setShowSignIn(false);
    setShowSignUp(false);
  };

  return (
    <div className="flex h-screen">
      <div className="w-2/5 flex items-center justify-center p-10">
      </div>
      <div className="w-3/5 flex flex-col justify-center items-start p-10 space-y-6">
        <h1 className="text-4xl font-bold">
          Be a part of the vibrant vibezz community
        </h1>
        <h3 className="text-xl">Join today.</h3>

        <div className="flex flex-col space-y-4 w-full max-w-xs">
          <button
            onClick={openSignUp}
            className={`
              w-full py-3 rounded-full hover:bg-custom-purple hover:text-white focus:bg-custom-purple focus:text-white
              ${showSignUp ? 'bg-custom-purple text-white' : 'bg-transparent text-custom-purple border border-0.5 border-custom-purple'}
              focus:outline-none
            `}
              >
            Sign Up
          </button>

          <div className="flex items-center space-x-2">
            <div className="flex-grow h-px bg-custom-purple"></div>
            <span className="text-custom-purple">or</span>
            <div className="flex-grow h-px bg-custom-purple"></div>
          </div>

          <p className="text-start">Already have an account?</p>

          <button
            onClick={openSignIn}
            className={`
              w-full py-3 rounded-full hover:bg-custom-purple hover:text-white focus:bg-custom-purple focus:text-white
              ${showSignIn ? 'bg-custom-purple text-white' : 'bg-transparent text-custom-purple border border-0.5 border-custom-purple'}
              focus:outline-none
            `}
              >
            Sign In
          </button>
        </div>
      </div>

      {showSignUp && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-custom-radial rounded-2xl shadow-lg p-6 w-full max-w-md transform transition-transform duration-300 ease-in-out p-20"
            style={{ transform: 'translateY(0)' }}>
            <button
            onClick={closePopUp}
            className="absolute top-2 right-2 text-white text-2xl"
            >&times;</button>
            <SignUp />
          </div>
        </div>
      )}

      {showSignIn && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div  className="bg-custom-radial rounded-2xl shadow-lg p-6 w-full max-w-md transform transition-transform duration-300 ease-in-out p-20"
            style={{ transform: 'translateY(0)' }}>
            <button
            onClick={closePopUp}
            className="absolute top-2 right-2 text-white text-2xl"
            >&times;</button>
            <SignIn />
          </div>
        </div>
      )}
    </div>
  );
};

export default Auth;

