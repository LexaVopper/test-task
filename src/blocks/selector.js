import { createSelector } from 'reselect';
import * as _ from 'lodash';
import { findUserByParam } from './utils.js';

const allUsers = (state) => state.userList.users;
const sortBy = (state) => state.sort.sortParams;
const filterBy = (state) => state.filter.filter;

export const filteredUsers = createSelector([allUsers, filterBy], (arr, filter) => {
  return arr.filter(findUserByParam(arr, filter));
});

export const sortedUsers = createSelector([filteredUsers, sortBy], (arr, ind) => {
  return _.orderBy(arr, [ind.sortType], [ind.sortIndicator]);
});
