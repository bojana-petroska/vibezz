'use client';
import { useState, useEffect, Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editUser, addFriend } from '../store/actionCreator';
import Navbar from '../components/Navbar';
import FriendsList from '../components/FriendsList';

const ProfilePage: React.FC = () => {
  const [profilePicture, setProfilePicture] = useState('');
  const [coverPhoto, setCoverPhoto] = useState('');
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
      const editedUser = {
        id: loggedInUser.id,
        statusMessage,
        profilePicture,
        coverPhoto,
      };
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
      setCoverPhoto(loggedInUser.coverPhoto || '');
      setStatusMessage(loggedInUser.statusMessage || '');

      setEditing(
        !loggedInUser.profilePicture || !loggedInUser.statusMessage || !loggedInUser.coverPhoto
      );
    }
  }, [loggedInUser]);

  const friendsList = users.users.filter((user) =>
    loggedInUser?.friends.includes(user.id)
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col md:flex-row min-h-screen">
        <FriendsList friends={friendsList} />
        <div className="flex flex-col w-full md:w-2/4 p-4">
          <div className="relative w-full mb-6">
            <img
              src={coverPhoto || 'https://via.placeholder.com/600x200?text=Cover+Photo'}
              alt="Cover"
              className="w-full h-40 object-cover rounded-lg"
            />
            <img
              src={profilePicture || 'https://via.placeholder.com/150'}
              alt={`${loggedInUser?.userName}'s profile`}
              className="w-24 h-24 rounded-full object-cover border-0.5 border-white absolute left-1/2 transform -translate-x-1/2 -bottom-12"
            />
          </div>
          <div className="p-4 border border-custom-purple rounded-lg bg-transparent mt-16">
            {loggedInUser && (
              <div className="flex flex-col">
                <h2 className="text-custom-purple text-xl">@{loggedInUser.userName}</h2>
                {editStatusMessage ? (
                  <div className="flex flex-col mt-4">
                    <input
                      type="text"
                      placeholder="Edit status message"
                      value={statusMessage}
                      onChange={(e) => setStatusMessage(e.target.value)}
                      className="p-2 rounded-lg border border-custom-purple"
                    />
                    <p className="text-white mt-2">{statusMessage}</p>
                    <button
                      onClick={updateUser}
                      className="mt-2 bg-custom-purple text-white rounded-lg p-2"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div className="mt-4">
                    <p className="text-white">{statusMessage}</p>
                    <button
                      onClick={editingStatusMessage}
                      className="mt-2 text-custom-purple"
                    >
                      {statusMessage ? 'Edit Status Message' : 'Write a Status Message'}
                    </button>
                  </div>
                )}
              </div>
            )}
            {editing && (
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Profile Photo URL"
                  value={profilePicture}
                  onChange={(e) => setProfilePicture(e.target.value)}
                  className="p-2 mb-2 rounded-lg border border-custom-purple"
                />
                <input
                  type="text"
                  placeholder="Cover Photo URL"
                  value={coverPhoto}
                  onChange={(e) => setCoverPhoto(e.target.value)}
                  className="p-2 mb-2 rounded-lg border border-custom-purple"
                />
                <button
                  onClick={updateUser}
                  className="bg-custom-purple text-white rounded-lg p-2"
                >
                  Update
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <div className="border border-custom-purple rounded-lg p-4 bg-transparent">
            <h3 className="text-custom-purple">Add Friends</h3>
            <select
              value={addFriendId || ''}
              onChange={(e) => setAddFriendId(Number(e.target.value))}
              className="p-2 mt-2 rounded-lg border border-custom-purple w-full"
            >
              <option value="" disabled>
                Select a friend to add
              </option>
              {users.users
                .filter((user) => user.id !== loggedInUser?.id)
                .map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.userName}
                  </option>
                ))}
            </select>
            <button
              onClick={handleAddFriend}
              className="mt-2 bg-custom-purple text-white rounded-lg p-2 w-full"
            >
              Add Friend
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

