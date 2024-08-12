interface IUser {
    id: number;
    userName: string;
    email: string;
    profilePicture: string;
    statusMessage: string;
    friends : number[]
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

type UserAction = AddUserAction | RemoveUserAction | EditUserAction;

interface UserState {
    users: IUser[];
}


