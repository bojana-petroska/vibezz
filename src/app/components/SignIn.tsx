'use client';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import '../styles.css/components.css';

const SignIn: React.FC = () => {
  const users = useSelector((state: StateType) => state);
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const login = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    const action = {
      type: 'LOGIN',
      user: {
        userName,
      },
    };
    dispatch(action);
  };

  useEffect(() => {
    if (users.auth.isLoggedIn) {
      console.log(users.auth.isLoggedIn);
      router.push('/FeedPage');
    }
  }, [users.auth.isLoggedIn, router]);

  return (
    <div>
      <form onSubmit={login} className="signin-form">
        <h2 className="signin-title">Sign In</h2>
        <input
          type="text"
          id="userName"
          placeholder="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="signin-input"
        />
        <button type="submit" className="signin-button">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;

