export const initialState = {
  clickedUser: {
    firstName: 'name',
    description: 'Пользователь не выбран',
    address: {
      streetAddress: 'address',
      city: 'city',
      state: 'state',
      zip: 'zip',
    },
  },
};

export const selectedUser = (state = initialState, action) => {
  if (action.type === 'SELECT_USER') {
    return {
      ...state, // Принимает все действующие значения
      clickedUser: action.payload,
    };
  }
  return state;
};

export default selectedUser;
