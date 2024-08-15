export function addUser(
  user: Omit<IUser, 'id' | 'profilePicture' | 'statusMessage' | 'friends'>
) {
  const action: UserAction = {
    type: 'ADD_USER',
    user,
  };

  return action;
}

export function editUser(user: Partial<Omit<IUser, 'id'>> & { id: number }) {
  const action: UserAction = {
    type: 'EDIT_USER',
    user,
  };
  return action;
}

export function addFriend(userId: number, friendId: number) {
  return {
    type: 'ADD_FRIEND',
    payload: { userId, friendId },
  };
}

export function removeFriend(friendName: string) {
  return {
    type: 'REMOVE_FRIEND',
    payload: friendName,
  };
}

export const signOutCurrentUser = () => ({
  type: 'SIGN_OUT_USER',
});

