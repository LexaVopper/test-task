import React from 'react';
import { useSelector } from 'react-redux';
import AddNewUser from './AddNewUser';
import SearchBlock from './SearchBlock';

const UserInfo = React.memo(function UserInfo() {
  const selectedUser = useSelector((state) => state.selectedUser.clickedUser);

  return (
    <div className='tools_block'>
      <div className='container_tools'>
        <SearchBlock />

        <AddNewUser />
        <div className='user_info_block'>
          <div className='info_section'>
            <span className='user_param'>Выбран пользователь:</span>
            <span className='user_disc'>
              <b>{selectedUser.firstName}</b>
            </span>
          </div>

          <div className='info_section --with_area'>
            <span className='user_param'>Описание:</span>
            <textarea value={selectedUser.description} readOnly className='user_disc' />
          </div>

          <div className='info_section '>
            <span className='user_param'>Адрес проживания:</span>
            <span className='user_disc'>
              <b>{selectedUser.address.streetAddress}</b>
            </span>
          </div>

          <div className='info_section'>
            <span className='user_param'>Город:</span>
            <span className='user_disc'>
              <b>{selectedUser.address.city}</b>
            </span>
          </div>

          <div className='info_section'>
            <span className='user_param'>Провинция/штат:</span>
            <span className='user_disc'>
              <b>{selectedUser.address.state}</b>
            </span>
          </div>

          <div className='info_section'>
            <span className='user_param'>Индекс: </span>
            <span className='user_disc'>
              <b>{selectedUser.address.zip}</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default UserInfo;
