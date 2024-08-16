'use client';
import { useRouter, usePathname } from 'next/navigation';
import { signOutCurrentUser } from '../store/actionCreator';
import { useDispatch } from 'react-redux';
import '../styles.css/components.css';

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
    <nav className="navbar">
      <div className="navbar-buttons">
        <button
          onClick={() => navigation('/FeedPage')}
          className={`navbar-button ${pathName === '/FeedPage' ? 'navbar-button-active' : 'navbar-button-inactive'}`}
        >
          Feed
        </button>
        <button
          onClick={() => navigation('/Profile')}
          className={`navbar-button ${pathName === '/Profile' ? 'navbar-button-active' : 'navbar-button-inactive'}`}
        >
          Profile
        </button>
      </div>

      <div className="navbar-signout">
        <button onClick={signOut} className="navbar-button navbar-button-inactive">
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
