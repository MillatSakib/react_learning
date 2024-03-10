import "./App.css";

function ConditionalRendering() {
  return (
    <div className="newClass">
      <TypeOne task="Learn React" isDone="false"></TypeOne>
      <TypeTwo task="Sleep in Night" isDone="true"></TypeTwo>
      <TypeThree task="PC Build" isDone="true"></TypeThree>
      <TypeFive task="Laptop Buy" isDone="false"></TypeFive>
      <TypeFour task="Laptop Buy" isDone="true"></TypeFour>
    </div>
  );
}

function TypeOne({ task, isDone }) {
  if (isDone === "true") {
    return <li>Finished {task}</li>;
  } else {
    return <li>Work on {task}</li>;
  }
}

function TypeTwo({ task, isDone }) {
  if (isDone) {
    return <li>Finished {task}</li>;
  }
  return <li>Work on {task}</li>;
}

function TypeThree({ task, isDone }) {
  return (
    <li>
      {isDone ? "Finished" : "Work on"} {task}
    </li>
  );
}

function TypeFour({ task, isDone }) {
  return (
    <li>
      {task} {isDone && "Done"}
    </li>
  );
}

function TypeFive({ task, isDone }) {
  return (
    <li>
      {task} {isDone && "Do it"}
    </li>
  );
}

export default ConditionalRendering;
