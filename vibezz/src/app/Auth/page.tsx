'use client';

import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import { useState } from 'react';

export const Auth: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleButoon = () => setIsSignUp(!isSignUp);

  return (
    <div>
      {isSignUp ? <SignUp /> : <SignIn />}
      <button onClick={toggleButoon}>
        {isSignUp ? 'Already have an account? Sign In' : 'New here? Sign Up'}
      </button>
    </div>
  );
};

export default Auth;



