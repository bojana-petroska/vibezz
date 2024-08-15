'use client';

import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import { useState } from 'react';

export const Auth: React.FC = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  // const [isSignUp, setIsSignUp] = useState(true);

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
    <div>
      <h1>Be a part of the vibrant vibezz community</h1>
      <h3>Join today.</h3>
      <button>Sign Up</button>
      <p>------- or --------</p>
      <p>Already have an account?</p>
      <button>Sign In</button>
    </div>
  );
};

export default Auth;
