import React from 'react';

import Categories from './Categories';
import UserStruct from './UserStruct';
import UserInfo from './UserInfo';

import { useSelector, useDispatch } from 'react-redux';

import { fetchUsers } from '../redux/actions/userList';
import { setSortBy } from '../redux/actions/sort';
import { setPage } from '../redux/actions/page';
//Селектор
import { sortedUsers } from '../blocks/selector';
//Пагинация
import Pagination from 'react-pagination-library';
import 'react-pagination-library/build/css/index.css';
//Utils
import { sliceUser } from './utils.js';

const categoryNames = ['id', 'firstName', 'lastName', 'email', 'phone'];
const sortParams = {
  increase: 'acs',
  decrease: 'desc',
};

function MainBlock() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page.page);
  const users = useSelector(sortedUsers);
  const currentType = useSelector((state) => state.sort.sortParams);

  const changeCurrentPage = (numPage) => {
    dispatch(setPage(numPage));
  };

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const onSelectCategory = React.useCallback(
    (type) => {
      if (currentType.sortType === type) {
        if (currentType.sortIndicator === sortParams.decrease) {
          dispatch(setSortBy(type, sortParams.increase));
        } else if (currentType.sortIndicator === sortParams.increase) {
          dispatch(setSortBy(type, sortParams.decrease));
        }
      } else {
        dispatch(setSortBy(type, sortParams.increase));
      }
    },
    [setSortBy, currentType],
  );

  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='user'>
          <div id='user_items' className='user_items'>
            <Categories
              items={categoryNames}
              sortType={currentType.sortIndicator}
              activeItem={currentType.sortType}
              onClickCategory={(index) => onSelectCategory(index)}
            />
          </div>
          <div className='users_list'>
            {users.slice(sliceUser(page).start, sliceUser(page).end).map((obj, index) => (
              <UserStruct key={`${obj.id}_${index}`} {...obj} />
            ))}
            <div className='pagination'>
              <Pagination
                currentPage={page}
                totalPages={Math.ceil(users.length / 10)}
                changeCurrentPage={changeCurrentPage}
                theme='bottom-border'
              />
            </div>
          </div>
        </div>
        <UserInfo />
      </div>
    </div>
  );
}

export default MainBlock;
