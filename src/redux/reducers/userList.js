const initialState = {
  users: [],
  isLoading: false,
};

const list = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_LIST':
      return {
        ...state,
        users: action.payload,
      };
    case 'ADD_USER_LIST':
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    default:
      return state;
  }
};

export default list;
