import axios from 'axios';

export const fetchUsers = () => (dispatch) => {
  axios
    .get(
      'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D',
    )
    .then(({ data }) => {
      dispatch(setUserList(data));
    });
};

export const setUserList = (users) => ({
  type: 'SET_USER_LIST',
  payload: users,
});
export const addUserList = (users) => ({
  type: 'ADD_USER_LIST',
  payload: users,
});
