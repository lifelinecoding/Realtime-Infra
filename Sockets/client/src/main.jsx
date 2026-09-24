import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { SocketProvider } from "./contexts/SocketProvider.jsx";

createRoot(document.getElementById("root")).render(
  <SocketProvider>
    <App />
  </SocketProvider>,
);
