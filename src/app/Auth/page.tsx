'use client';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import { useState } from 'react';
import '../styles.css/auth.css';

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
    <div className="auth-container">
      <div className="left-panel">
        <img src="/LogoSignup.svg" alt="Logo Vibezz blue V in shape of butterfly" className="logo" />
      </div>
      <div className="right-panel">
        <h1 className="auth-title">Be a part of the vibrant vibezz community</h1>
        <h3 className="auth-subtitle">Join today.</h3>

        <div className="auth-buttons-container">
          <button
            onClick={openSignUp}
            className={`auth-button ${showSignUp ? 'auth-button-sign-up-active' : 'auth-button-sign-up-inactive'}`}
          >
            Sign Up
          </button>

          <div className="auth-divider">
            <div className="auth-divider-line"></div>
            <span className="auth-divider-text">or</span>
            <div className="auth-divider-line"></div>
          </div>

          <p className="auth-signin-container">Already have an account?</p>

          <button
            onClick={openSignIn}
            className={`auth-button ${showSignIn ? 'auth-button-sign-up-active' : 'auth-button-sign-up-inactive'}`}
          >
            Sign In
          </button>
        </div>
      </div>

      {showSignUp && (
        <div className="auth-popup">
          <div className="auth-popup-content">
            <button onClick={closePopUp} className="auth-popup-close">
              &times;
            </button>
            <SignUp />
          </div>
        </div>
      )}

      {showSignIn && (
        <div className="auth-popup">
          <div className="auth-popup-content">
            <button onClick={closePopUp} className="auth-popup-close">
              &times;
            </button>
            <SignIn />
          </div>
        </div>
      )}
    </div>
  );
};

export default Auth;
