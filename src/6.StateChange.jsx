import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleReduce = () => {
    setCount(count - 1);
  };
  const handleAdd = () => {
    setCount(count + 1);
  };

  return (
    <div className="newClass">
      <h3>Counter: {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}
