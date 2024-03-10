// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="newClass">
      <h1>This is basic of react.</h1>
      <Person></Person>
    </div>
  );
}

function Person() {
  const money = 2000;
  const person = { name: "sakib", age: 12 };
  return (
    <div>
      <h3>
        My name is {person.name}. I am {person.age} years old. and I have{" "}
        {money} tk in my moneybag
      </h3>
    </div>
  );
}

function handelClick() {
  alert("ok");
}

export default App;
