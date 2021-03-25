import React from 'react';
import cn from 'classnames';

const Categories = React.memo(function Categories({
  items,
  onClickCategory,
  sortType,
  activeItem,
}) {
  const onSelectItem = (index) => {
    onClickCategory(items[index]);
  };

  return (
    <div className='user_category'>
      {items &&
        items.map((name, index) => (
          <button
            onClick={() => onSelectItem(index)}
            className={cn(sortType, { active: items[index] === activeItem })}
            key={`${name}_${index}`}>
            {name}
          </button>
        ))}
    </div>
  );
});

export default Categories;
