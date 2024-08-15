'use client';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

const SignIn: React.FC = () => {
  const users = useSelector((state: StateType) => state);
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

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

  useEffect(() => {
    if (users.auth.isLoggedIn) {
      console.log(users.auth.isLoggedIn);
      router.push('/Profile');
    }
  }, [users.auth.isLoggedIn, router]);


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

