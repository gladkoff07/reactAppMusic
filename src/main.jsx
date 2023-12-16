import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AudioProvider } from "./context/audioContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AudioProvider>
    <App />
  </AudioProvider>
);
