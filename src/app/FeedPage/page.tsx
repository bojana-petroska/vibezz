'use client';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import RandomImage from '../components/RandomImage';

const FeedPage: React.FC = () => {
  const users = useSelector((state: StateType) => state);
  const loggedInUser = users.users.find(
    (user) => user.userName.toLowerCase() === users.auth.userName.toLowerCase()
  );

  const friendsIds = loggedInUser?.friends || [];
  const friendsData = users.users.filter((user) =>
    friendsIds?.includes(user.id)
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="w-full md:w-1/4 flex flex-row md:flex-col items-start overflow-x-auto md:overflow-visible top-0 left-0 p-4 space-x-3 md:space-x-0 md:space-y-3">
          {friendsData.map((friend, index) => (
            <div
              key={friend.id}
              className={`flex-shrink-0 ${index !== 0 ? '-ml-3 md:ml-0' : ''}`}>
              <img
                src={friend.profilePicture}
                alt={`${friend.userName}'s profile`}
                className="w-12 h-12 rounded-full object-cover border border-custom-purple"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col w-full md:w-2/4 p-4">
          <div className="mb-6 p-4 border border-custom-purple rounded-lg bg-transparent">
            {loggedInUser && (
              <div className="flex items-center mb-4">
                <img
                  src={loggedInUser.profilePicture}
                  alt={`${loggedInUser.userName}'s profile`}
                  className="w-16 h-16 rounded-full object-cover mr-4 border border-custom-purple"
                />
                <div>
                  <h2 className="text-custom-purple text-xl">@{loggedInUser.userName}</h2>
                  <p className="text-white">{loggedInUser.statusMessage}</p>
                </div>
              </div>
            )}
          </div>

          {friendsData.length === 0 ? (
            <p className="text-white">No friends yet :(</p>
          ) : (
            friendsData.map((friend) => (
              <div key={friend.id} className="mb-4 bg-transparent">
                <div className="border border-custom-purple rounded-lg p-4 bg-transparent">
                  <div className="flex items-center mb-4">
                    <img
                      src={friend.profilePicture}
                      alt={`${friend.userName}'s profile`}
                      className="w-10 h-10 rounded-full object-cover mr-4"
                    />
                    <h3 className="text-custom-purple">@{friend.userName}</h3>
                  </div>
                  <p className="text-white">{friend.statusMessage}</p>
                </div>
                <div className="mt-4">
                  <RandomImage />
                </div>
              </div>
            ))
          )}
        </div>

        <div className="w-full md:w-1/4"></div>
      </div>
    </div>
  );
};

export default FeedPage;

