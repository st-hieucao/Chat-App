import React, { createContext, useContext, useEffect } from 'react';
import { io } from "socket.io-client";
import { userContext } from '../user-context';

const ENDPOINT = "http://localhost:8080";

export const socketContext = createContext(null);

const SocketProvider = (props) => {
  const socket = io(ENDPOINT);
  const { user } = useContext(userContext);

  useEffect(() => {
    if (user) {
      socket.emit('user-connected', user._id);
    } else {
      socket.disconnect();
    }
  }, [user])

  const dataSocket = {
    socket
  };

  return (
    <socketContext.Provider value={dataSocket}>
      {props.children}
    </socketContext.Provider>
  )
}

export default SocketProvider;
