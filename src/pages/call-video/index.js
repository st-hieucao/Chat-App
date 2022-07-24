import React, { useContext, useEffect, useRef } from 'react'
import { socketContext } from '../../components/socket';
import Peer from "simple-peer";
import { userContext } from '../../components/user-context';
import { useParams } from 'react-router-dom';

const CallVideo = () => {
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  const { socket, call, handelSetCall } = useContext(socketContext);
  const { user } = useContext(userContext);
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((currentStream) => {
      handelSetCall({ stream: currentStream });

      myVideo.current.srcObject = currentStream;
    });
  }, []);

  useEffect(() => {
    if (call.stream) {
      handleClickAnswer();
    }
  }, [call.stream]);

  useEffect(() => {
    if (id && call.stream) {
      handleClickCallUser();
    }
  }, [id, call.stream]);

  function handleClickCallUser() {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: call.stream,
      config: {
        iceServers: [
          { urls: ["http://localhost:8080"] },
          // {
          //   username: "ux2wTRV69C-BBZMnJrDgw_BzTj5Yyn0H5_9ufL9zxUw9MbkaTIYr4JOMLwj6g81VAAAAAGEU0j9naWFuZ3RoZXNoeQ==",
          //   credential: "a6f15664-fb41-11eb-bd31-0242ac120004",
          //   urls: [
          //     "turn:hk-turn1.xirsys.com:80?transport=udp",
          //     "turn:hk-turn1.xirsys.com:3478?transport=udp",
          //     "turn:hk-turn1.xirsys.com:80?transport=tcp",
          //     "turn:hk-turn1.xirsys.com:3478?transport=tcp",
          //     "turns:hk-turn1.xirsys.com:443?transport=tcp",
          //     "turns:hk-turn1.xirsys.com:5349?transport=tcp",
          //   ],
          // },
        ],
      },
    });

    peer.on("signal", (data) => {
      socket?.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: call.me,
        name: user.name,
      });
    });

    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    socket?.on("callAccepted", (signal) => {
      peer.signal(signal);
      handelSetCall({ callAccepted: true });
    });

    connectionRef.current = peer;
  }

  function handleClickAnswer() {
    handelSetCall({ callAccepted: true });

    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: call.stream,
      config: {
        iceServers: [
          { urls: ["http://localhost:8080"] },
          // {
          //   username: "ux2wTRV69C-BBZMnJrDgw_BzTj5Yyn0H5_9ufL9zxUw9MbkaTIYr4JOMLwj6g81VAAAAAGEU0j9naWFuZ3RoZXNoeQ==",
          //   credential: "a6f15664-fb41-11eb-bd31-0242ac120004",
          //   urls: [
          //     "turn:hk-turn1.xirsys.com:80?transport=udp",
          //     "turn:hk-turn1.xirsys.com:3478?transport=udp",
          //     "turn:hk-turn1.xirsys.com:80?transport=tcp",
          //     "turn:hk-turn1.xirsys.com:3478?transport=tcp",
          //     "turns:hk-turn1.xirsys.com:443?transport=tcp",
          //     "turns:hk-turn1.xirsys.com:5349?transport=tcp",
          //   ],
          // },
        ],
      },
    });

    peer.on("signal", (data) => {
      call.socket?.emit("answerCall", { signal: data, to: call.call?.from });
    });

    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });
    peer.signal(call.call?.signal);

    connectionRef.current = peer;
  }

  return (
    <div className="call">
      <div className="video-container">
        {call.stream && <video className="my-video" playsInline ref={myVideo} autoPlay />}
        {call.callAccepted && <video className="user-video" playsInline ref={userVideo} autoPlay />}
      </div>

      {/* {call.callAccepted && !call.callEnded && (
        <button className="hang-up" onClick={handleClickHangUp}>
          Call End
        </button>
      )} */}
    </div>
  )
}

export default CallVideo