'use client'
import { useContext, useEffect } from 'react';
import { redirect } from 'next/navigation'
import Navbar from './components/Navbar';
import StoreWrapper from './store/store';
import FeedPage from './FeedPage/page';
import { useSelector } from 'react-redux';

export default function Home() {
  
   const users = useSelector((state: StateType) => state);

  useEffect(() => {
    if (!users.auth.isLoggedIn)
    {
      redirect('/auth');
    }
  },[users.auth.isLoggedIn]
  )

  return (
    <StoreWrapper>
      <div>
        <Navbar />
        <FeedPage/>
        <br/>
      </div>
    </StoreWrapper>
  );
}