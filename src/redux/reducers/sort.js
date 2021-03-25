export const initialState = {
  sortParams: {
    sortType: 'id',
    sortIndicator: 'acs',
  },
};

export const sort = (state = initialState, action) => {
  if (action.type === 'SET_SORT') {
    return {
      ...state, // Принимает все действующие значения
      sortParams: action.payload,
    };
  }
  return state;
};

export default sort;
