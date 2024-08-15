'use client'
import React from 'react';

interface Friend {
  id: number;
  userName: string;
  profilePicture: string;
}

interface FriendsListProps {
  friends: Friend[];
}

const FriendsList: React.FC<FriendsListProps> = ({ friends }) => {
  return (
    <div className="w-full md:w-1/4 flex flex-row md:flex-col items-start overflow-x-auto md:overflow-visible top-0 left-0 p-4 space-x-3 md:space-x-0 md:space-y-3 mr-10 md:mr-40">
      {friends.map((friend, index) => (
        <div
          key={friend.id}
          className={`flex-shrink-0 ${index !== 0 ? '-ml-3 md:ml-0' : ''}`}
        >
          <img
            src={friend.profilePicture}
            alt={`${friend.userName}'s profile`}
            className="w-12 h-12 rounded-full object-cover border border-custom-purple"
          />
        </div>
      ))}
    </div>
  );
};

export default FriendsList;

