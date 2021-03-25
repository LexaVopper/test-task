export const setSortBy = (sortType, sortIndicator) => ({
  type: 'SET_SORT',
  payload: {
    sortType,
    sortIndicator,
  },
});
