import React, { createContext, useEffect, useState } from 'react';

export const userContext = createContext({});

const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  const handleSaveUser = (user) => {
    setUser(user);
  };

  useEffect(() => {
    const dataUserLocal = localStorage.getItem('USER');
    if (dataUserLocal) {
      setUser(JSON.parse(dataUserLocal));
    }
  }, []);

  const dataContext = {
    user,
    handleSaveUser
  }

  return (
    <userContext.Provider value={dataContext}>
      {props.children}
    </userContext.Provider>
  )
}

export default UserProvider;
