'use client';
import { useEffect, useState } from 'react';
import { Dispatch } from 'redux';
import { addUser } from '../store/actionCreator';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

export const SignUp: React.FC = () => {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch: Dispatch<any> = useDispatch();
  const router = useRouter();

  const users = useSelector((state: StateType) => state);

  const addNewUser = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    let validation = true;
    const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!userName && !email && !validateEmail.test(email)) {
      validation = false;
    };

    if (validation) {
      const newUser = { userName, email };
      dispatch(addUser(newUser));
      dispatch({ type: 'LOGIN', user: { userName } });
      setUserName('');
      setEmail('');
      console.log(`New User:`, newUser);
    }
  };

  useEffect(() => {
    console.log(`All Users:`, users);
    if (users.auth.isLoggedIn) {

      router.push('/Profile');
    }
  }, [users.auth.isLoggedIn, router, users]);
 
  return (
    <div>
      <form onSubmit={addNewUser} className="flex flex-col p-12">
      <h2 className="text-2xl font-bold mb-4 text-white mb-12 text-center">Sign Up</h2>
        <input
          type="text"
          id="userName"
          placeholder="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="p-2 pl-6 bg-transparent border border-0.5 border-custom-purple rounded-full text-white placeholder-custom-purple focus:outline-none mb-4"
        />
        <input
          type="text"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 pl-6 bg-transparent border border-0.5 border-custom-purple rounded-full text-white placeholder-custom-purple focus:outline-none mb-10"
        />
        <button 
        type="submit"
         className="w-full py-2 px-4 rounded-full bg-transparent text-custom-purple border border-0.5 border-custom-purple hover:bg-custom-purple hover:text-white focus:bg-custom-purple focus:text-white"
        >Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;

