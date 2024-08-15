'use client';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

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

      <form onSubmit={login} className="flex flex-col  p-12">
      <h2 className="text-2xl font-bold mb-4 text-white mb-12 text-center">Sign In</h2>
        <input
          type="text"
          id="userName"
          placeholder="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="p-2 pl-6 bg-transparent border border-0.5 border-custom-purple rounded-full text-white placeholder-custom-purple focus:outline-none mb-8"
        />
        <button
          type="submit"
          className="w-full py-2 px-4 rounded-full bg-transparent text-custom-purple border border-0.5 border-custom-purple hover:bg-custom-purple hover:text-white focus:bg-custom-purple focus:text-white">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;

