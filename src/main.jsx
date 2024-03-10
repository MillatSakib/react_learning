import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./1.basicReact.jsx";
import Props from "./2.props.jsx";
import ConditionalRendering from "./3.conditionalRendering.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Props />
    <ConditionalRendering />
  </React.StrictMode>
);
