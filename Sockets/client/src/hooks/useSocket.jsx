import { socketContext } from "../contexts/socketContext";
import { useContext } from "react";

const useSocket = () => {
  const socket = useContext(socketContext);
  return socket;
};

export { useSocket };
