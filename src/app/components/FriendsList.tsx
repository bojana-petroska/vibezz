'use client'
import React from 'react';
import '../styles.css/components.css'

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
    <div className="friends-list-container">
      {friends.map((friend, index) => (
        <div
          key={friend.id}
          className={`friend-item ${index !== 0 ? 'ml-3' : ''}`}
        >
          <img
            src={friend.profilePicture}
            alt={`${friend.userName}'s profile`}
            className="friend-image"
          />
          <p className="friend-username-invisible">{friend.userName}</p>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;

