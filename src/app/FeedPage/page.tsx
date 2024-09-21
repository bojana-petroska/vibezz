'use client';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import RandomImage from '../components/RandomImage';
import FriendsList from '../components/FriendsList';
import '../styles.css/feedpage.css';

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
    <div className="feed-page-container">
      <Navbar />
      <div className="feed-content-container">
        <FriendsList friends={friendsData} />
        <div className="feed-main-content">
          <div className="user-info-card">
            {loggedInUser && (
              <div className="user-info-header">
                <img
                  src={loggedInUser.profilePicture}
                  alt={`${loggedInUser.userName}'s profile`}
                  className="user-profile-picture"/>
                <div>
                  <h2 className="user-username">@{loggedInUser.userName}</h2>
                  <p className="user-status-message">{loggedInUser.statusMessage}</p>
                </div>
              </div>
            )}
          </div>
          {friendsData.length === 0 ? (
            <p></p>
          ) : (
            friendsData.map((friend) => (
              <div key={friend.id} className="friend-card">
                <div className="friend-info-card">
                  <div className="friend-info-header">
                    <img
                      src={friend.profilePicture}
                      alt={`${friend.userName}'s profile`}
                      className="friend-profile-picture"/>
                    <h3 className="friend-username">@{friend.userName}</h3>
                  </div>
                  <p className="friend-status-message">{friend.statusMessage}</p>
                </div>
                <div>
                  <RandomImage />
                </div>
              </div>
            ))
          )}
        </div>
        <div className="feed-sidebar"></div>
      </div>
    </div>
  );
};

export default FeedPage;

