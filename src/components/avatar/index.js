import React from 'react';
import style from './style.module.scss';

const Avatar = (props) => {
  return (
    <div className={style.avatar}>
      <div className={style.active}></div>
      <img className={style.image} src='./images/avatar-user.png' alt='user avatar'></img>
    </div>
  )
}

export default Avatar;
