'use client'
import Navbar from './components/Navbar';
import StoreWrapper from './store/store';


export default function Home() {
  return (
    <StoreWrapper>
      <div>
        <Navbar />
        <h1>VIBEZZ</h1>
        <br/>
      </div>
    </StoreWrapper>
  );
}


