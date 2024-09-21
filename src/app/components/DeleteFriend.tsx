'use client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFriend } from '../store/actionCreator';

const DeleteFriends: React.FC = () => {
  const [selectedFriendId, setSelectedFriendId] = useState<number | null>(null);
  const users = useSelector((state: StateType) => state);
  const dispatch = useDispatch();

  const loggedInUser = users.users.find(
    (user) => user.userName.toLowerCase() === users.auth.userName.toLowerCase()
  );

  const friendsList = users.users.filter((user) => loggedInUser?.friends.includes(user.id))

  const handleDeleteFriend = () => {
    if (selectedFriendId !== null) {
      dispatch(removeFriend(selectedFriendId));
      setSelectedFriendId(null);
    }
  };

  return (
    <div className="border border-custom-purple rounded-lg p-4 mx-4 my-6 bg-transparent">
      <select
        value={selectedFriendId || ''}
        onChange={(e) => setSelectedFriendId(Number(e.target.value))}
        className="p-2 mt-4 rounded-lg border border-custom-purple w-full my-4">
        <option value="" disabled>
          Select a friend to delete
        </option>
        {friendsList
          .filter((user) => user.id !== loggedInUser?.id)
          .map((user) => (
            <option key={user.id} value={user.id}>
              {user.userName}
            </option>
          ))}
      </select>
      <button
        onClick={handleDeleteFriend}
        className="mt-2 bg-custom-purple text-white rounded-lg p-2 w-full">
        Delete Friend
      </button>
    </div>
  );
};

export default DeleteFriends;

