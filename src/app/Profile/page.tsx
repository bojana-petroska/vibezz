'use client';
import { useState, useEffect, Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editUser } from '../store/actionCreator';
import Navbar from '../components/Navbar';
import FriendsList from '../components/FriendsList';
import AddFriends from '../components/AddFriend';
import '../styles.css/profile.css';
import DeleteFriends from '../components/DeleteFriend';

const ProfilePage: React.FC = () => {
  const [profilePicture, setProfilePicture] = useState('');
  const [coverPhoto, setCoverPhoto] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [editStatusMessage, setEditStatusMessage] = useState(false);
  const [editProfilePhoto, setEditProfilePhoto] = useState(false);
  const [editCoverPhoto, setEditCoverPhoto] = useState(false);
  const [editing, setEditing] = useState(false);

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
      setEditProfilePhoto(false);
      setEditCoverPhoto(false);
    }
  };

  const editingStatusMessage = () => {
    setEditStatusMessage((prev) => !prev);
  };

  const editingProfilePhoto = () => {
    setEditProfilePhoto((prev) => !prev);
  };

  const editingCoverPhoto = () => {
    setEditCoverPhoto((prev) => !prev);
  };

  useEffect(() => {
    if (loggedInUser) {
      setProfilePicture(loggedInUser.profilePicture || '');
      setCoverPhoto(loggedInUser.coverPhoto || '');
      setStatusMessage(loggedInUser.statusMessage || '');

      setEditing(
        !loggedInUser.profilePicture ||
          !loggedInUser.statusMessage ||
          !loggedInUser.coverPhoto
      );
    }
  }, [loggedInUser]);

  const friendsList = users.users.filter((user) =>
    loggedInUser?.friends.includes(user.id)
  );

  return (
    <div className="profile-page-container">
      <Navbar />
      <div className="profile-content-container">
        <FriendsList friends={friendsList} />
        <div className="profile-main-content">
          <div className="cover-photo-container">
          {editCoverPhoto ? (
              <div>
                <input
                  type="text"
                  placeholder="Cover Photo URL"
                  value={coverPhoto}
                  onChange={(e) => setCoverPhoto(e.target.value)}
                  className="profile-input"
                />
                <button onClick={updateUser} className="save-button">
                  Save
                </button>
              </div>
            ) : (
              <div className="relative">
                <img
                  src={
                    coverPhoto ||
                    'https://via.placeholder.com/600x200?text=Cover+Photo'
                  }
                  alt="Cover"
                  className="cover-photo"
                />
                <button
                  onClick={editingCoverPhoto}
                  className="edit-cover-button absolute bottom-2 right-2">
                  Edit Cover Photo
                </button>
              </div>
            )}
            {editProfilePhoto ? (
              <div>
                <input
                  type="text"
                  placeholder="Profile Photo URL"
                  value={profilePicture}
                  onChange={(e) => setProfilePicture(e.target.value)}
                  className="profile-input"
                />
                <button onClick={updateUser} className="save-button">
                  Save
                </button>
              </div>
            ) : (
              <div className="relative">
                <img
                  src={
                    profilePicture || 'https://via.placeholder.com/150'
                  }
                  alt={`${loggedInUser?.userName}'s profile`}
                  className="profile-picture"
                />
                <button
                  onClick={editingProfilePhoto}
                  className="edit-profile-picture-button absolute bottom-2 left-2">
                  Edit Profile Picture
                </button>
              </div>
            )}
          </div>
          <div className="profile-info-container">
            {loggedInUser && (
              <div className="flex flex-col">
                <h2 className="username">@{loggedInUser.userName}</h2>
                {editStatusMessage ? (
                  <div className="status-message-container">
                    <input
                      type="text"
                      placeholder="Edit status message"
                      value={statusMessage}
                      onChange={(e) => setStatusMessage(e.target.value)}
                      className="status-message-input"
                    />
                    <p className="status-message">{statusMessage}</p>
                    <button onClick={updateUser} className="save-button">
                      Save
                    </button>
                  </div>
                ) : (
                  <div className="mt-4">
                    <p className="status-message">{statusMessage}</p>
                    <button
                      onClick={editingStatusMessage}
                      className="edit-status-button">
                      {statusMessage
                        ? 'Edit Status Message'
                        : 'Write a Status Message'}
                    </button>
                  </div>
                )}
              </div>
            )}
            {editing && (
              <div className="edit-profile-container">
                <input
                  type="text"
                  placeholder="Profile Photo URL"
                  value={profilePicture}
                  onChange={(e) => setProfilePicture(e.target.value)}
                  className="profile-input"
                />
                <input
                  type="text"
                  placeholder="Cover Photo URL"
                  value={coverPhoto}
                  onChange={(e) => setCoverPhoto(e.target.value)}
                  className="profile-input"
                />
                <button onClick={updateUser} className="update-button">
                  Update
                </button>
              </div>
            )}
          </div>
        </div>
        <div>
          <AddFriends />
          <DeleteFriends />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
