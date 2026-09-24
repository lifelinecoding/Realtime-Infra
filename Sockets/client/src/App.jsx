
import { useSocket } from "./hooks/useSocket"

function App() {

  const socket = useSocket();

  socket.on("message", (data) => {
    console.log(data);
    socket.emit("ack", "Badhiya hu bhai");
  });

  return (
    <>
      Let's Start with a Chat Application
    </>
  )
}

export default App
