export const selectedUser = (firstName, description, address) => ({
  type: 'SELECT_USER',
  payload: { firstName, description, address },
});
