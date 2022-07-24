import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../avatar';
import style from './style.module.scss';

const UserOnline = (props) => {
  return (
    <div className={style.user} key={props.key}>
      <Avatar name={props.name}/>
      <span className={style.userName}>{props.name}</span>
      <Link to={`call-video/:${props.key}`}>Call</Link>
    </div>
  )
}

export default UserOnline;
