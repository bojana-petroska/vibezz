'use client';
import { useRouter, usePathname } from 'next/navigation';
import { signOutCurrentUser } from '../store/actionCreator';
import { useDispatch } from 'react-redux';

const Navbar: React.FC = () => {
  const router = useRouter();
  const pathName = usePathname();
  const dispatch = useDispatch();

  const navigation = (path: string) => {
    router.push(path);
  };

  const signOut = () => {
    dispatch(signOutCurrentUser());
    router.push('/Auth');
  };

  return (
    <nav>
      <div className="nav-buttons">
        <button
          onClick={() => navigation('/FeedPage')}
          style={{ fontWeight: pathName === '/FeedPage' ? 'bold' : 'normal' }}>
          Feed Page
        </button>
        <button
          onClick={() => navigation('/Profile')}
          style={{ fontWeight: pathName === '/Profile' ? 'bold' : 'normal' }}>
          Profile
        </button>
        <button onClick={signOut}>Sign Out</button>
      </div>
    </nav>
  );
};

export default Navbar;
