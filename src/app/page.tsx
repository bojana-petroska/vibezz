'use client';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import StoreWrapper from './store/store';
import { useSelector } from 'react-redux';

function Home() {
  const users = useSelector((state: StateType) => state);

  useEffect(() => {
    if (!users.auth.isLoggedIn) {
      redirect('/Auth');
    }
  }, [users.auth.isLoggedIn]);

  return (
    <StoreWrapper>
      <></>
    </StoreWrapper>
  );
}

export default Home;

