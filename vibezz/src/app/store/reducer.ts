export const initialState: StateType = {
  users: [
    {
      id: 1,
      userName: 'bo',
      email: 'bo@gmail.com',
      profilePicture:
        'https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg',
      statusMessage: 'hello from the other side',
      friends: [1, 2, 3],
    },
    {
      id: 2,
      userName: 'elena',
      email: 'elena@gmail.com',
      profilePicture: 'https://jooinn.com/images/dog-67.jpg',
      statusMessage: 'hello from the other side',
      friends: [1],
    },
    {
      id: 3,
      userName: 'nikita',
      email: 'compact@gmail.com',
      profilePicture:
        'https://duckduckgo.com/?q=images+kayak&iar=images&iax=images&ia=images&iai=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F3413678%2Fpexels-photo-3413678.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-thilo-lehnert-3413678.jpg%26fm%3Djpg',
      statusMessage: 'hello from the other side',
      friends: [1],
    },
  ],
  auth: {
    isLoggedIn: false,
    userName: '',
  },
};

const reducer = (
  state: StateType = initialState,
  action: UserAction
): StateType => {
  switch (action.type) {
    case 'ADD_USER':
      const newUser: IUser = {
        id: Math.ceil(Math.random() * 1000),
        userName: action.user.userName,
        email: action.user.email,
        profilePicture: '',
        statusMessage: '',
        friends: [],
      };
      return {
        ...state,
        users: [...state.users, newUser],
      };
      case 'LOGIN':
        if (action.user.userName) {
          const newState: StateType = {
            ...state,
            auth: {
              isLoggedIn: true,
              userName: action.user.userName,
            }
          }
          return newState;
        } else {
          console.log(`You have to provide username for login`);
          return state;
        }
    case 'REMOVE_USER':
      const updatedUsers: IUser[] = state.users.filter(
        (user) => user.userName !== action.type
      );
      return {
        ...state,
        users: updatedUsers,
      };
    case 'EDIT_USER':
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.user.id ? { ...user, ...action.user } : user
        ),
      };
    default:
      return state;
  }
};

export default reducer;
