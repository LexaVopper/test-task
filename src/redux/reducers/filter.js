export const initialState = {
  filter: '',
};

export const setFilter = (state = initialState, action) => {
  if (action.type === 'SET_FILTER') {
    return {
      ...state, // Принимает все действующие значения
      filter: action.payload,
    };
  }
  return state;
};

export default setFilter;
