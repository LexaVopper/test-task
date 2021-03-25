import React from 'react';
import { setFilter } from '../redux/actions/filter';
import { useDispatch } from 'react-redux';
import { setPage } from '../redux/actions/page';

const SearchBlock = React.memo(function SearchBlock() {
  const dispatch = useDispatch();

  const setFilterBy = React.useCallback((filterBy) => {
    dispatch(setPage(1));
    dispatch(setFilter(filterBy));
  }, []);

  return (
    <div id='search_block' className='search_block'>
      <div className='example'>
        <input type='text' placeholder='Фильтр' id='search_block'></input>
        <button
          type='submit'
          onClick={() => setFilterBy(document.getElementById('search_block').value)}>
          <i className='fa fa-search'>Поиск</i>
        </button>
      </div>
    </div>
  );
});

export default SearchBlock;
