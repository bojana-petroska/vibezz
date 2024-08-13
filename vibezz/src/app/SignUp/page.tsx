'use client';
import { useEffect, useState } from 'react';
import { Dispatch } from 'redux';
import { addUser } from '../store/actionCreator';
import { useDispatch, useSelector } from 'react-redux';
import SignIn from '../components/SignIn';

type Props = {
  saveUser: (user: IUser | any) => void;
};

export const SignUp: React.FC<Props> = ({ saveUser }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch: Dispatch<any> = useDispatch();

  const users = useSelector((state: UserState) => state.users);

  const addNewUser = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    let validation = true;
    const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!userName && !email && !validateEmail.test(email)) {
      validation = false;
    }

    // Will add pop up messages for wrong input when(if) we have a design

    if (validation) {
      const newUser = { userName, email };
      dispatch(addUser(newUser));
      setUserName('');
      setEmail('');
      console.log(`New User:`, newUser);
    }
  };

  useEffect(() => {
    console.log(`All Users:`, users);
  });

  return (
    <div>
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
    <SignIn />
    </div>
  );
};

export default SignUp;





