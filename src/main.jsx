import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./1.basicReact.jsx";
import Props from "./2.props.jsx";
import ConditionalRendering from "./3.conditionalRendering.jsx";
import ListUsingMapF from "./4.0.listUsingMap.jsx";
import HandelClick from "./5.EventHandeler.jsx";
import Counter from "./6.StateChange.jsx";
import Users from "./7.API.jsx";
import Posts from "./8.LoadApiData.jsx";
import Contries from "./9.DataLoad.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Props />
    <ConditionalRendering />
    <ListUsingMapF></ListUsingMapF>
    <HandelClick></HandelClick>
    <Counter></Counter>
    <Users></Users>
    <Posts></Posts>
    <Contries></Contries>
  </React.StrictMode>
);
