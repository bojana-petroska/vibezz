'use client';
import { useSelector } from "react-redux";

const FeedPage: React.FC = () => {
  const users = useSelector((state: StateType) => state);
  const loggedInUser = users.users.find(user => user.userName.toLowerCase() === users.auth.userName.toLowerCase());
  const nameLoggedInUser = loggedInUser?.userName;
  console.log(nameLoggedInUser);

  return (
    <div>
      <h2>Feed Page</h2>
      <p>{nameLoggedInUser}</p>
    </div>
  );
};

export default FeedPage;



