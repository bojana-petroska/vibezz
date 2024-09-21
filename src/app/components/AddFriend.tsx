'use client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFriend } from '../store/actionCreator';

const AddFriends: React.FC = () => {
  const [addFriendId, setAddFriendId] = useState<number | null>(null);
  const users = useSelector((state: StateType) => state);
  const dispatch = useDispatch();

  const loggedInUser = users.users.find(
    (user) => user.userName.toLowerCase() === users.auth.userName.toLowerCase()
  );

  const handleAddFriend = () => {
    if (loggedInUser && addFriendId) {
      dispatch(addFriend(loggedInUser.id, addFriendId));
      setAddFriendId(null);
    }
  };

  return (
    <div className="border border-custom-purple rounded-lg p-4 mx-4 my-6 bg-transparent">
      <select
        value={addFriendId || ''}
        onChange={(e) => setAddFriendId(Number(e.target.value))}
        className="p-2 mt-4 rounded-lg border border-custom-purple w-full my-4">
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
        className="mt-2 bg-custom-purple text-white rounded-lg p-2 w-full">
        Add Friend
      </button>
    </div>
  );
};

export default AddFriends;

