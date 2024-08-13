interface IUser {
  id: number;
  userName: string;
  email: string;
  profilePicture: string;
  statusMessage: string;
  friends: number[];
}

interface AddUserAction {
  type: 'ADD_USER';
  user: Omit<IUser, 'id' | 'profilePicture' | 'statusMessage' | 'friends'>;
}

interface RemoveUserAction {
  type: 'REMOVE_USER';
  userName: string;
}

interface EditUserAction {
  type: 'EDIT_USER';
  user: Partial<Omit<IUser, 'id'>> & { id: number };
}

interface LoginUserAction {
    type: 'LOGIN';
    user: Omit<IUser, 'id' | email | 'profilePicture' | 'statusMessage' | 'friends'>;
  }

type UserAction = AddUserAction | RemoveUserAction | EditUserAction | LoginUserAction;

interface UserState {
  users: IUser[];
}

interface IAuth {
  isLoggedIn: boolean;
  userName: string; 
}

type StateType = {
  users: IUser[];
  auth: IAuth;
};

interface IStatusMEssage {
  id: number;
  statusMessage: string
}

