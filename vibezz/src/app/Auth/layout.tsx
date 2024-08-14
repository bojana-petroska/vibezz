
import React from 'react';

const SignUpLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex">
     
      <div className="w-2/5 flex justify-center items-center">
        <img src="/LogoSignup.svg" alt="Logo Vibezz blue V in shape of butterfly" className="w-1/2 h-auto" />
       {/* <Image
      src="/LogoSignup.svg"
      alt="Logo Vibezz"
      width={800}
      height={500}
    /> */}
      </div>

      
      <div className="w-3/5 flex justify-end items-center">
        {children}
      </div>
    </div>
  );
};

export default SignUpLayout;


