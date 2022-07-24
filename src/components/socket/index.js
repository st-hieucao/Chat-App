import React, { createContext, useContext, useEffect, useState } from 'react';
import { io } from "socket.io-client";
import { userContext } from '../user-context';

export const ENDPOINT = "http://localhost:8080";

export const socketContext = createContext(null);

const SocketProvider = (props) => {
  const socket = io(ENDPOINT);
  const { user } = useContext(userContext);
  const [call, setCall] = useState({
    isReceivingCall: false,
    callAccepted: false,
    callEnded: false,
    stream: null,
    name: "",
    call: null,
    me: "",
  });

  useEffect(() => {
    if (user) {
      socket.emit('user-connected', user._id);
      socket.on("callUser", ({ from, name: callerName, signal }) => {
        setCall(...call, {call: { isReceivingCall: true, from, name: callerName, signal }})
      });
    }
  }, [user])

  const handleSetCall = (data) => {
    setCall({...call, data});
  }

  const dataSocket = {
    socket,
    call,
    handleSetCall
  };

  return (
    <socketContext.Provider value={dataSocket}>
      {props.children}
    </socketContext.Provider>
  )
}

export default SocketProvider;
