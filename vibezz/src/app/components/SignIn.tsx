'use client';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { redirect } from 'next/navigation'

const SignIn: React.FC = () => {
  const users = useSelector((state: UserState) => state.users);
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();

  const login = (e:React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    
        const action = {
            type: 'LOGIN',
            user: {
                userName,
            }
        }
        dispatch(action);
       
   
  }

  return (
    <div>
      <form>
        <input
          type="text"
          id="userName"
          placeholder="username"
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
      </form>
      <button onClick={login} >Sign In</button>
    </div>
  );
};

export default SignIn;

