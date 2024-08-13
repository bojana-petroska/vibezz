'use client';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { redirect } from 'next/navigation'

const SignIn: React.FC = () => {
  const users = useSelector((state: UserState) => state.users);
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();

  // const login = () => {
  //   const action: LoginUserAction
  // }

  return (
    <div>
      <form>
        <input
          type="text"
          id="userName"
          placeholder="username"
          value={userName}
        //   onChange={}
        />
      </form>
      <button>Sign In</button>
    </div>
  );
};

export default SignIn;

