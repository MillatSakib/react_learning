import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./1.basicReact.jsx";
import Props from "./2.props.jsx";
import ConditionalRendering from "./3.conditionalRendering.jsx";
import ListUsingMapF from "./4.0.listUsingMap.jsx";
import HandelClick from "./5.EventHandeler.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Props />
    <ConditionalRendering />
    <ListUsingMapF></ListUsingMapF>
    <HandelClick></HandelClick>
  </React.StrictMode>
);
