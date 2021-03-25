import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectedUser } from '../redux/actions/selectedUser';
import cn from 'classnames';

const UserStruct = React.memo(function ListOfUsers({
  id,
  firstName,
  lastName,
  email,
  phone,
  address,
  description,
}) {
  const dispatch = useDispatch();
  const onSelectUser = React.useCallback((firstName, description, address) => {
    dispatch(selectedUser(firstName, description, address));
  }, []);

  const ActiveUser = useSelector((state) => state.selectedUser.clickedUser);
  return (
    <div
      className={cn('infoBlock', {
        active: (ActiveUser.firstName === firstName) & (ActiveUser.address === address),
      })}
      onClick={() => onSelectUser(firstName, description, address)}>
      <div className='block --id'>
        <p>{id}</p>
      </div>
      <div className='block --firstName'>
        <p>{firstName}</p>
      </div>
      <div className='block --lastName'>
        <p>{lastName}</p>
      </div>
      <div className='block --email'>
        <p>{email}</p>
      </div>
      <div className='block --phone'>
        <p>{phone}</p>
      </div>
    </div>
  );
});

export default UserStruct;
