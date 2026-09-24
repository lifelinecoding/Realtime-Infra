import { useEffect, useMemo } from "react";
import { io } from "socket.io-client";
import { socketContext } from "./socketContext";


const SocketProvider = ({ children }) => {
  const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;

  const socket = useMemo(() => {
    return io(SOCKET_URL, {
      autoConnect: false,
      withCredentials: true,
    });
  }, [SOCKET_URL]);

  useEffect(() => {
    // Connect to server
    socket.connect();

    const handleConnect = () => {
      console.log("Connection Successful! Socket ID:", socket.id);
    };

    const handleDisconnect = (reason) => {
      console.log("Disconnected:", reason);
    };

    // Attach event listeners
    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);

    // CLEANUP: Unbind listeners and disconnect when component unmounts
    return () => {
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.disconnect();
    };
  }, [socket]);

  return (
    <socketContext.Provider value={socket}>{children}</socketContext.Provider>
  );
};

export { SocketProvider };
