'use client';
import { useSelector } from "react-redux";

const FeedPage: React.FC = () => {
  const users = useSelector((state: StateType) => state);
  const loggedInUser = users.users.find(user => user.userName.toLowerCase() === users.auth.userName.toLowerCase());
  const nameLoggedInUser = loggedInUser?.userName;
  const pictureLoggedInUser = loggedInUser?.profilePicture;
  const messageLoggedInUser = loggedInUser?.statusMessage;

  const friendsIds = loggedInUser?.friends;
  const friendsData = users.users.filter(user => friendsIds?.includes(user.id));

  return (
    <div>
      <section>
        {friendsData.map(friend => (
          <div key={friend.id} style={{ display: 'inline-block', alignItems: 'center' }}>
            <img src={friend.profilePicture} alt={`${friend.userName}'s profile`}
            style={{ 
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '1px solid #ccc',
            }}
            ></img>
          </div>
        ))}
      </section>
      <h2>Feed Page</h2>
      {pictureLoggedInUser && (
        <img src={pictureLoggedInUser} alt={`${nameLoggedInUser}'s profile`}
        style={{ 
          width: '100px', height: '100px', borderRadius: '50%' 
        }}
        ></img>
      )}
      <p>@{nameLoggedInUser}</p>
      <p>{messageLoggedInUser}</p>
      
      <img src={'images/strawberries.jpeg'}></img>
      <div>
      {friendsData.length === 0 ? (
        <p>no friends yet : (</p>
      ) : (
        friendsData.map(friend => (
          <div key={friend.id}>
            <img src={friend.profilePicture} alt={`${friend.userName}'s profile`}
            style={{ width: '100px', height: '100px', borderRadius: '50%' }}
            ></img>
            <h3>@{friend.userName}</h3>
            <p>{friend.statusMessage}</p>
            <img src={'images/strawberries.jpeg'}></img>
          </div>
        ))
      )}
      </div>
    </div>
  );
};

export default FeedPage;



