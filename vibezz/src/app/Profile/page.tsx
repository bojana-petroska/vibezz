'use client';
import { useState, useEffect, Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editUser, addFriend } from '../store/actionCreator';
import Navbar from '../components/Navbar';

const ProfilePage: React.FC = () => {
  const [profilePicture, setProfilePicture] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [editStatusMessage, setEditStatusMessage] = useState(false);
  const [editing, setEditing] = useState(false);
  const [addFriendId, setAddFriendId] = useState<number | null>(null);

  const users = useSelector((state: StateType) => state);
  const dispatch: Dispatch<any> = useDispatch();

  const loggedInUser = users.users.find(
    (user) => user.userName.toLowerCase() === users.auth.userName.toLowerCase()
  );

  const updateUser = () => {
    if (loggedInUser) {
      const editedUser = { id: loggedInUser.id, statusMessage, profilePicture };
      dispatch(editUser(editedUser));
      setEditing(false);
      setEditStatusMessage(false);
    }
  };

  const handleAddFriend = () => {
    if (loggedInUser && addFriendId) {
      dispatch(addFriend(loggedInUser.id, addFriendId));
      setAddFriendId(null);
    }
  };

  const editingStatusMessage = () => {
    setEditStatusMessage((prev) => !prev);
  };

  useEffect(() => {
    if (loggedInUser) {
      setProfilePicture(loggedInUser.profilePicture || '');
      setStatusMessage(loggedInUser.statusMessage || '');

      setEditing(!loggedInUser.profilePicture || !loggedInUser.statusMessage);
    }
  }, [loggedInUser]);

  return (
    <div>
      <Navbar />
      <h2>@{loggedInUser?.userName}</h2>
      {loggedInUser && (
        <>
          <div>
            <img
              src={
                profilePicture ||
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.z4no5tqp2ryBdMMD5NU9OgAAAA%26pid%3DApi&f=1&ipt=5775a54179cdca8f5a19821599cabda8b9851192922ea1ea970df0b854c7b486&ipo=images'
              }
              alt={`${loggedInUser?.userName}'s photo`}
              style={{ width: '150px', height: '150px', borderRadius: '50%' }}
            />
            <p>{statusMessage}</p>
            {editStatusMessage ? (
              <div>
                <input
                type='text'
                placeholder='edit status message'
                value={statusMessage} 
                onChange={(e) => setStatusMessage(e.target.value)}
                />
                <button onClick={updateUser}>save</button>
              </div>
            ) : (
              <button onClick={editingStatusMessage}>edit status message</button>
            )
            }
            {editing && (
              <div>
                <input
                  type="text"
                  placeholder="photo url"
                  value={profilePicture}
                  onChange={(e) => setProfilePicture(e.target.value)}
                />
                {/* <input
                  type="text"
                  placeholder="status message"
                  value={statusMessage}
                  onChange={(e) => setStatusMessage(e.target.value)}
                /> */}
                <button onClick={updateUser}>Update</button>
              </div>
            )}
          </div>
          <div>
            <select
              value={addFriendId || ''}
              onChange={(e) => setAddFriendId(Number(e.target.value))}>
              <option value="" disabled>
                select a friend to add
              </option>
              {users.users
                .filter((user) => user.id !== loggedInUser.id)
                .map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.userName}
                  </option>
                ))}
            </select>
            <button onClick={handleAddFriend}>add a friend</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
