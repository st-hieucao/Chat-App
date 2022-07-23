import React from 'react';
import Avatar from '../avatar';
import style from './style.module.scss';

const UserOnline = (props) => {
  return (
    <div className={style.user} key={props.key}>
      <Avatar name={props.name}/>
      <span className={style.userName}>{props.name}</span>
    </div>
  )
}

export default UserOnline;
