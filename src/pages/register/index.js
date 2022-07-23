import React, { useContext, useEffect } from 'react';
import style from './style.module.scss';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signup } from '../../store/user/actions';
import { useHistory } from 'react-router-dom';
import { userContext } from '../../components/user-context';

const Register = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const {user, handleSaveUser } = useContext(userContext);

  const onSubmit = (data) => {
    dispatch(signup(data, (res) => {
      localStorage.setItem('USER', JSON.stringify(res));
      handleSaveUser(res)
      history.push('/');
    }))
  };

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [user]);

  return (
    <div className={style.register} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={style.title}>Enter your name</h3>
      <form className={style.formRegister}>
        <input className={style.input} type='text' placeholder='Your name' {...register("name")}></input>
        <button className={style.submitBtn}>GO</button>
      </form>
    </div>
  )
}

export default Register;
