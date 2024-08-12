'use client';
import { useState } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/actionCreator';

type Props = {
  saveUser: (user: IUser | any) => void;
};

export const SignUp: React.FC<Props> = ({ saveUser }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch: Dispatch<any> = useDispatch();

  const addNewUser = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    let validation = true;
    const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!userName && !email && !validateEmail.test(email)) {
      validation = false;
    }

    if (validation) {
      const newUser = { userName, email };
      dispatch(addUser(newUser));
      setUserName('');
      setEmail('');
      console.log(newUser);
    }
  };

  return (
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
      <button onClick={addNewUser}>Add User</button>
    </form>
  );
};

export default SignUp;
