import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userContext } from '../../components/user-context';
import { logout } from '../../store/user/actions';

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const {user, handleSaveUser} = useContext(userContext);

  useEffect(() => {
    if (!user) {
      history.push('/register');
    }
  }, [user])

  const handleLogout = () => {
    handleSaveUser(null);
    dispatch(logout());
  };

  return (
    <div>
      <h2>Hello {user?.name}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home