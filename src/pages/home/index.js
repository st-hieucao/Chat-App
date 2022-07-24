import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Avatar from '../../components/avatar';
import { userContext } from '../../components/user-context';
import { logout } from '../../store/user/actions';

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const {user, handleSaveUser, call} = useContext(userContext);

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

      {call?.call?.isReceivingCall && (
        <div className={`accept`}>
          <Avatar />
          <h4 className="call-video">Calling ...</h4>
          <Link to={`/call-video`} className="accept-btn">
            Reply Call
          </Link>
        </div>
      )}

    </div>
  )
}

export default Home