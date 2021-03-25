import React, { useState } from 'react';
import Rodal from 'rodal';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addUserList } from '../redux/actions/userList';

// include styles
import 'rodal/lib/rodal.css';

const AddNewUser = React.memo(function AddNewUser() {
  const dispatch = useDispatch();
  const [state, setState] = useState(false);

  const show = () => {
    setState({ visible: true });
  };

  const hide = () => {
    setState({ visible: false });
  };
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    const newuser = {
      id: data.id,
      firstName: data.firstName[0].toUpperCase() + data.firstName.slice(1),
      lastName: data.lastName[0].toUpperCase() + data.lastName.slice(1),
      address: {
        city: 'Не задан',
        state: 'Не задан',
        streetAddress: 'Не задан',
        zip: 'Не задан',
      },
      description: 'Не задано',
      email: data.email,
      phone: data.phone,
    };

    dispatch(addUserList(newuser));
  };

  return (
    <div className='toggle_form'>
      <button onClick={show.bind()}>Форма добавления пользователя</button>

      <Rodal
        className='form'
        width={500}
        height={410}
        visible={state.visible}
        onClose={hide.bind()}>
        <div className='add_user_block'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Id</label>
            <input name='id' ref={register({ required: true, pattern: /[0-9]/ })} />
            {errors.id && <p>Нужно ввести Id</p>}
            <label>FirstName</label>
            <input name='firstName' ref={register({ required: true, pattern: /[A-Za-z]/ })} />
            {errors.firstName && <p>Нужно ввести FirstName</p>}
            <label>LastName</label>
            <input name='lastName' ref={register({ required: true, pattern: /[A-Za-z]/ })} />
            {errors.lastName && <p>Нужно ввести LastName</p>}
            <label>Email</label>
            <input
              name='email'
              ref={register({ required: true, pattern: /[a-z0-9]\@[A-Za-z]+([.])+[A-Za-z]/ })}
            />
            {errors.email && <p>Нужно ввести Email</p>}
            <label>Phone</label>
            <input
              placeholder='(111)111-1111'
              name='phone'
              ref={register({ required: true, maxLength: 13, pattern: /\(\d{3}\)\d{3}-\d{4}/ })}
            />
            {errors.phone && <p>Нужно ввести Phone </p>}
            <input className='submit' type='submit' value='Создать пользователя' />
          </form>
        </div>
      </Rodal>
    </div>
  );
});
export default AddNewUser;

// function AddNewUser() {
//   return (
//     <div className='add_user_block'>
//       <div className='create_user'>
//         <input type='text' placeholder='Id' className='search_block --id'></input>
//         <input type='text' placeholder='FirstName' className='search_block --firstName'></input>
//         <input type='text' placeholder='LastName' className='search_block --lastName'></input>
//         <input type='text' placeholder='Email' className='search_block'></input>
//         <input type='text' placeholder='Phone' className='search_block'></input>

//         <button>Добавить</button>
//       </div>
//       <button className='showForm'>Показать форму добаления</button>
//     </div>
//   );
// }

// export default AddNewUser;
