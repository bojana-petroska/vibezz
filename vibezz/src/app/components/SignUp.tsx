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

    // Will add pop up messages for wrong input when(if) we have a design

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
    <div className="bg-white">
      <form onSubmit={addNewUser}>
        <input
          type="text"
          id="userName"
          placeholder="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={addNewUser}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;

