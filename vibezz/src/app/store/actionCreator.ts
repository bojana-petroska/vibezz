export function addUser(user: Omit<IUser, 'id' | 'profilePicture' | 'statusMessage' | 'friends'>) {
    const action: UserAction = {
        type: 'ADD_USER',
        user
    }

    return action;
};

export function removeUser(userName: string) {
    const action: UserAction = {
        type: 'REMOVE_USER',
        userName
    }

    return action;
}

export function editUser(user: Partial<Omit<IUser, 'id'>> & { id: number }) {
    const action: EditUserAction = {
        type: 'EDIT_USER',
        user
    }
    return action;
}




