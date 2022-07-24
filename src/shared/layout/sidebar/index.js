import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import UserOnline from '../../../components/user-online';
import { getUser } from '../../../store/user/actions';
import style from './style.module.scss';

const Sidebar = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    dispatch(getUser(null, (data) => {
      console.log(data)
      setUsers(data)
    }))
  }, [])

  return (
    <div className={style.sidebar}>
      <div className={style.content}>
        <h3 className={style.title}>Người liên hệ</h3>
        <div className={style.users}>
        {
          users.map((user) => (<UserOnline key={user._id} name={user.name} />))
        }
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
