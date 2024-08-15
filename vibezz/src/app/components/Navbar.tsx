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
    <nav className="flex flex-col md:flex-row items-center justify-between p-4">
      <div className="col-span-3 lg:col-span-3"></div>

      <div className="flex flex-wrap justify-center space-x-4 md:space-x-8 mb-4 md:mb-0">
        <button
          onClick={() => navigation('/FeedPage')}
          className={`w-40 md:w-36 px-4 py-2 rounded-full text-white flex justify-center items-center transition-all duration-300 ${
            pathName === '/FeedPage'
              ? 'bg-gradient-to-r from-[#504CB3] to-[#7C79C9] shadow-xl'
              : 'bg-transparent border border-white border-opacity-50'
          }`}>
          Feed
        </button>
        <button
          onClick={() => navigation('/Profile')}
          className={`w-40 md:w-36 px-4 py-2 rounded-full text-white flex justify-center items-center transition-all duration-300 ${
            pathName === '/Profile'
              ? 'bg-gradient-to-r from-[#504CB3] to-[#7C79C9] shadow-xl'
              : 'bg-transparent border border-white border-opacity-50'
          }`}>
          Profile
        </button>
      </div>

      <div className="flex justify-center md:justify-end">
        <button
          onClick={signOut}
          className="w-40 md:w-36 lg:w-36 px-4 py-2 rounded-full text-white flex justify-center items-center border border-white border-opacity-50 bg-transparent transition-all duration-300">
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
