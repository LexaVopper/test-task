import { combineReducers } from 'redux';

import sort from './sort';
import userList from './userList';
import selectedUser from './selectedUser';
import filter from './filter';
import page from './page';

const rootReducer = combineReducers({
  sort,
  userList,
  selectedUser,
  filter,
  page,
});

export default rootReducer;
