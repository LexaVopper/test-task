export const initialState = {
  page: 1,
};

export const setPage = (state = initialState, action) => {
  if (action.type === 'SET_PAGE') {
    return {
      ...state, // Принимает все действующие значения
      page: action.payload,
    };
  }
  return state;
};

export default setPage;
