
import { useEffect } from "react"
import { io } from "socket.io-client"

function App() {

  useEffect(() => {
    const socket = io("http://localhost:3000");
    socket.on("connect" , () =>{
      console.log("Connecting to server");
    })

    socket.on("message", (data) => {
      console.log(data);
    })

    return () =>{
      // socket.disconnect();
    }
  }, []);

  return (
    <>
      Let's Start with a Chat Application
    </>
  )
}

export default App
