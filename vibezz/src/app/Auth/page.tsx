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

// 'use client';

// import SignIn from '../components/SignIn';
// import SignUp from '../components/SignUp';
// import { useState } from 'react';

// export const Auth: React.FC = () => {
//   const [isSignUp, setIsSignUp] = useState(true); // Toggle between sign-up and sign-in

//   const toggleAuthMode = () => setIsSignUp(!isSignUp);

//   return (
//     <div>
//       {isSignUp ? <SignUp /> : <SignIn />}
//       <button onClick={toggleAuthMode}>
//         {isSignUp ? 'Already have an account? Sign In' : 'New here? Sign Up'}
//       </button>
//     </div>
//   );
// };

// export default Auth;



