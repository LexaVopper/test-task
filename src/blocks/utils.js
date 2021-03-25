var subjects = '../../public/db.json';
export const displayedProps = ['id', 'firstName', 'lastName', 'email', 'phone'];

export function sliceUser(cPage) {
  let slicer = [0, 10];

  if (cPage > 1) {
    slicer[0] = slicer[0] + 10 * cPage - 10;
    slicer[1] = slicer[0] + 10;
  }
  return { start: slicer[0], end: slicer[1] };
}

export function findUserByParam(users, string) {
  for (let index = 0; index < displayedProps.length; index++) {
    if (users.filter((user) => user[displayedProps[index]] == string).length >= 1) {
      return (user) => user[displayedProps[index]] == string;
    }
  }
  // if (users.filter((users) => users.id == string).length >= 1) {
  //   console.log('id');
  //   return (users) => users.id == string;
  // } else if (users.filter((users) => users.firstName == string).length >= 1) {
  //   console.log('firstName');
  //   return (users) => users.firstName == string;
  // } else if (users.filter((users) => users.lastName == string).length >= 1) {
  //   console.log('lastName');
  //   return (users) => users.lastName == string;
  // } else if (users.filter((users) => users.email == string).length >= 1) {
  //   console.log('email');
  //   return (users) => users.email == string;
  // } else if (users.filter((users) => users.phone == string).length >= 1) {
  //   console.log('phone');
  //   return (users) => users.phone == string;
  // }
  return (user) => user;
}
