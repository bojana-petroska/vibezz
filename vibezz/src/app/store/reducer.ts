export const initialState: StateType = {
  users: [
    {
      id: 1,
      userName: 'bo',
      email: 'bo@gmail.com',
      profilePicture:
        'https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg',
      statusMessage: `There ain't no room for things  to change When we are both so deeply stuck in our ways You can't deny how hard I've tried I changed who I was to put you both first But now I give up`,
      friends: [2, 3, 4, 5, 6],
    },
    {
      id: 2,
      userName: 'elena',
      email: 'elena@gmail.com',
      profilePicture: 'https://jooinn.com/images/dog-67.jpg',
      statusMessage: 'hello from the other side',
      friends: [1, 3, 5],
    },
    {
      id: 3,
      userName: 'nikita',
      email: 'compact@gmail.com',
      profilePicture:
        'https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg',
      statusMessage: 'hello from the other side',
      friends: [1, 2, 5],
    },
    {
      id: 4,
      userName: 'beta',
      email: 'compact@gmail.com',
      profilePicture:
        'https://factanimal.com/wp-content/uploads/2023/03/cute-red-panda.jpg',
      statusMessage: 'hello from the other side',
      friends: [1, 5],
    },
    {
      id: 5,
      userName: 'idylle',
      email: 'compact@gmail.com',
      profilePicture:
        'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/8eb6ed26-b894-4e19-8960-4db9ed5cc5c5/width=450/00530-471790193-_lora_Cute%20Animals_1_Cute%20Animals%20-%20fantastic%20creature%20anime%20simple%20tiny%20cute%20flaphy%20and%20soft%20pretty%20little%20animal%20ultra%20realist.jpeg',
      statusMessage: 'hello from the other side',
      friends: [1, 2, 3, 4],
    },
    {
      id: 6,
      userName: 'jane',
      email: 'compact@gmail.com',
      profilePicture:
        'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?ixlib=rb-4.0.3&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
      statusMessage: 'hello from the ocean!',
      friends: [1, 2, 3, 4],
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
      if (state.users.find((user) => user.userName === action.user.userName)) {
        const newState: StateType = {
          ...state,
          auth: {
            isLoggedIn: true,
            userName: action.user.userName,
          },
        };
        return newState;
      } else {
        console.log(`You have to provide username for login`);
        return state;
      }
    case 'SIGN_OUT_USER':
      return {
        ...state,
        auth: {
          isLoggedIn: false,
          userName: ''
        },
      };
    case 'EDIT_USER':
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.user.id ? { ...user, ...action.user } : user
        ),
      };
      case 'ADD_FRIEND':
      return {
        ...state,
        users: state.users.map((user) => user.id === action.payload.userId ? { ...user, friends: [...user.friends, action.payload.friendId] } : user)
      }
    default:
      return state;
  }
};

export default reducer;
