'use client';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

export const Auth: React.FC = () => {

  return (
    <div>
      <SignUp />
      <SignIn />
    </div>
  );
};

export default Auth;
