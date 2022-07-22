import React from 'react';
import UserOnline from '../../../components/user-online';
import style from './style.module.scss';

const Sidebar = () => {
  const users = [
    {
      id: 1,
      name: 'Cao Kha Hieu'
    },
    {
      id: 2,
      name: 'Nguyen Hoang Thinh'
    },
    {
      id: 3,
      name: 'Cao Huu Tri'
    },
    {
      id: 4,
      name: 'Nguyen Hoang Sang'
    }
  ];

  return (
    <div className={style.sidebar}>
      <div className={style.content}>
        <h3 className={style.title}>Người liên hệ</h3>
        <div className={style.users}>
        {
          users.map((user) => (<UserOnline key={user.id} name={user.name} />))
        }
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
