import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Goru></Goru>
    </>
  );
}

function Person() {
  return (
    <div className="student">
      <h3>I am a Person</h3>
      <div>Do you know about me?</div>
      <h1>Aren't you know about you??</h1>
    </div>
  );
}

function Goru() {
  return (
    <div>
      <h1>I am Humba</h1>
    </div>
  );
}
export default App;
